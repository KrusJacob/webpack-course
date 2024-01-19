import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths, BuildPlatform } from "./config/build/types/types";
// in case you run into any typescript error when configuring `devServer`
// import "webpack-dev-server";

interface EnvVariables {
  mode: BuildMode;
  port: number;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };
  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode || "development",
    paths: paths,
    platform: env.platform ?? "desktop",
  });
  return config;
};
