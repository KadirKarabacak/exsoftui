import type { Preview } from "@storybook/react";
import "../src/styles/tailwind.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: "dark",
            values: [
                {
                    name: "dark",
                    value: "#333333", // Koyu arka plan rengi
                },
                {
                    name: "light",
                    value: "#ffffff", // Açık arka plan rengi (isteğe bağlı)
                },
            ],
        },
    },
};

export default preview;
