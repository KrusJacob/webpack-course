import { PluginItem } from "@babel/core";

export function removeDataTestIdBabelPlugin(): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const farbiddenProps = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeValue = current.node.name;
            if (farbiddenProps.includes(nodeValue)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
