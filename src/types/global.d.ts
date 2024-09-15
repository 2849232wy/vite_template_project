declare global {
  interface Window {
    $message?: import('naive-ui').MessageProviderInst;
    $dialog?: import('naive-ui').DialogProviderInst;
  }
}

export { }