const isDev = true;

const Log = {
  success: (functionName, result) => {
    if (isDev) {
      console.log(functionName + " success", result);
    }
  },
  failure: (functionName, error) => {
    if (isDev) {
      console.log(functionName + " error", error);
    }
  },
};

export { Log };
