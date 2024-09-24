import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

const components = ["Button", "IconButton"]; // Diğer bileşenleri buraya ekle

export default {
    // Input from src
    input: components.reduce((acc, comp) => {
        acc[comp] = `src/${comp}/index.tsx`;
        return acc;
    }, {}),
    output: components.map(comp => ({
        dir: `dist/${comp}`,
        format: "es", // ES modül formatında çıkış
        sourcemap: true,
        entryFileNames: "index.js", // Her bileşen için index.js
    })),
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "tsconfig.json",
            useTsconfigDeclarationDir: true,
        }),
        postcss({
            extensions: [".css"],
            modules: false,
            minimize: true,
            inject: true, // CSS dosyasını JS ile birleştir
        }),
        copy({
            targets: [
                {
                    src: "src/styles/globals/variables.css",
                    dest: "dist/styles/globals",
                },
                {
                    src: "src/components/**/*.css", // Tüm bileşenlerin CSS dosyalarını kopyala
                    dest: "dist/components",
                },
            ],
        }),
    ],
    external: ["react", "react-dom"],
};
