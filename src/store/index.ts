import { createPinia }  from "pinia"
import { createPersistedState } from "pinia-plugin-persistedstate"
const pinia = createPinia()
const persistedState = createPersistedState({

    serializer: {
      serialize: (state) => JSON.stringify(state),
      deserialize: (data) => JSON.parse(data),
    },
  
  
})
pinia.use(persistedState)
export default pinia