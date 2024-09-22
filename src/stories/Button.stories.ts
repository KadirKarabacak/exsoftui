import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Example/Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Apply props to All Stories
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

//! CONTAINED
export const PrimaryContained: Story = {
    args: {
        color: "primary",
        label: "Button",
    },
};
export const PrimaryContainedDisabled: Story = {
    args: {
        color: "primary",
        label: "Button",
        disabled: true,
    },
};
export const WarningContained: Story = {
    args: {
        color: "warning",
        label: "Button",
    },
};
export const WarningContainedDisabled: Story = {
    args: {
        color: "warning",
        label: "Button",
        disabled: true,
    },
};
export const SuccessContained: Story = {
    args: {
        color: "success",
        label: "Button",
    },
};
export const SuccessContainedDisabled: Story = {
    args: {
        color: "success",
        label: "Button",
        disabled: true,
    },
};
export const ErrorContained: Story = {
    args: {
        color: "error",
        label: "Button",
    },
};
export const ErrorContainedDisabled: Story = {
    args: {
        color: "error",
        label: "Button",
        disabled: true,
    },
};

//! OUTLINED
export const PrimaryOutlined: Story = {
    args: {
        color: "primary",
        label: "Button",
        variant: "outlined",
    },
};
export const PrimaryOutlinedDisabled: Story = {
    args: {
        color: "primary",
        label: "Button",
        variant: "outlined",
        disabled: true,
    },
};
export const WarningOutlined: Story = {
    args: {
        color: "warning",
        label: "Button",
        variant: "outlined",
    },
};
export const WarningOutlinedDisabled: Story = {
    args: {
        color: "warning",
        label: "Button",
        variant: "outlined",
        disabled: true,
    },
};
export const SuccessOutlined: Story = {
    args: {
        color: "success",
        label: "Button",
        variant: "outlined",
    },
};
export const SuccessOutlinedDisabled: Story = {
    args: {
        color: "success",
        label: "Button",
        variant: "outlined",
        disabled: true,
    },
};
export const ErrorOutlined: Story = {
    args: {
        color: "error",
        label: "Button",
        variant: "outlined",
    },
};
export const ErrorOutlinedDisabled: Story = {
    args: {
        color: "error",
        label: "Button",
        variant: "outlined",
        disabled: true,
    },
};

//: SIZES
export const ButtonLarge: Story = {
    args: {
        label: "Large",
        variant: "contained",
        size: "large",
    },
};
export const ButtonMedium: Story = {
    args: {
        label: "Medium",
        variant: "contained",
        size: "medium",
    },
};
export const ButtonSmall: Story = {
    args: {
        label: "Small",
        variant: "contained",
        size: "small",
    },
};

//: CLASSNAME
export const ButtonClassname: Story = {
    args: {
        color: "error",
        label: "Classnames",
        variant: "contained",
        className: "!rounded-full !font-bold",
    },
};
