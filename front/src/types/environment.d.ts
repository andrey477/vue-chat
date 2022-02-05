declare global {
  namespace NodeJS {
    interface Process {
      env: {
        VUE_APP_SOCKET_ENDPOINT: string;
      };
    }
  }
}
