import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions) {
  return {
    port: options.port ?? 3000,
    open: true,
    // react-router-dom / dev-server
    historyApiFallback: true,
    hot: true,
  };
}
