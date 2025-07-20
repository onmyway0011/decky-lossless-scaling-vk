import deckyPlugin from "@decky/rollup";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";

export default deckyPlugin({
  plugins: [
    typescript({ 
      tsconfig: "./tsconfig.json",
      noEmitOnError: false,
      ignoreDeprecations: "5.0"
    }),
    babel({
      babelHelpers: "bundled",
      extensions: [".ts", ".tsx"],
      include: ["src/**/*"],
    }),
  ],
});
