import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
// import { fileURLToPath } from "url";
import UnoCSS from "unocss/vite";

// const __dirname = fileURLToPath(new URL("./", import.meta.url));
// https://vitejs.dev/config/
export default (configEnv: any) => {
  const env = loadEnv(configEnv.mode, process.cwd());

  return defineConfig({
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        imports: [
          "vue",
          {
            "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
    resolve: {
      // 设置文件./src路径为 @
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "./src"),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additonalData: '@import "@/style/index.css";',
        },
      },
    },
    server: {
      proxy: {
        [env.VITE_BASE_URL_SUFFIX]: {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(`/^\/${env.VITE_BASE_URL_SUFFIX}/`, ""),
        },
      },
    },
  });
};
