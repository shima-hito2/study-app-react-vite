/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_URL: string
    readonly VITE_APP_BACK_COLOR: string
    // その他の環境変数...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }