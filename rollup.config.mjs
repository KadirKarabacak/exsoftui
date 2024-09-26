import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

const components = ["Button", "IconButton"]; // Diğer bileşenleri buraya ekleyin

export default [
    // 1. Bileşenler için ayrı ayrı çıkış
    {
        input: components.reduce((acc, comp) => {
            acc[comp] = `src/${comp}/index.tsx`;
            return acc;
        }, {}),
        output: components.map(comp => ({
            dir: `dist/${comp}`, // Her bileşen için ayrı klasör
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
                inject: false, // CSS dosyasını JS'ye enjekte etme, ayrı tut
                extract: true, // Her bileşenin kendi dizinine index.css çıkar
            }),
            copy({
                targets: [
                    // Tailwind CSS dosyasını doğru dizine kopyala
                    {
                        src: "src/styles/tailwind.css",
                        dest: "dist/styles", // İkinci bir "dist" klasörü oluşmasını engelle
                    },
                    // Global değişkenler için CSS dosyasını kopyala
                    {
                        src: "src/styles/globals/variables.css",
                        dest: "dist/styles/globals",
                    },
                ],
            }),
        ],
        external: ["react", "react-dom"],
    },
    // 2. Ana `index.ts` dosyası için genel çıkış
    {
        input: "src/index.ts", // Ana giriş dosyanız
        output: [
            {
                file: "dist/index.js", // CommonJS formatı
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "dist/index.esm.js", // ESM formatı
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "tsconfig.json",
                useTsconfigDeclarationDir: true,
            }),
            postcss({
                extensions: [".css"],
                minimize: true,
                extract: "dist/styles/tailwind.css", // Tailwind CSS dosyasını ana dist'e çıkar
            }),
            copy({
                targets: [
                    // Tailwind CSS dosyasını doğru dizine kopyala
                    {
                        src: "src/styles/tailwind.css",
                        dest: "dist/styles", // İkinci bir "dist" klasörü oluşmasını engelle
                    },
                    // Global değişkenler için CSS dosyasını kopyala
                    {
                        src: "src/styles/globals/variables.css",
                        dest: "dist/styles/globals",
                    },
                ],
            }),
        ],
        external: ["react", "react-dom"],
    },
];
