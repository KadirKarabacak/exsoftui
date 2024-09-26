import React from "react";
import { clsx } from "../utils/utils";
// import "./index.css";
import "../styles/tailwind.css";
// import { BeakerIcon } from "@heroicons/react/24/solid";

//! Test Cases

export interface ButtonProps {
    variant?: "outlined" | "contained";
    color?: "primary" | "warning" | "success" | "error";
    size?: "small" | "medium" | "large";
    rounded?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    endIcon?: React.ReactNode;
    animated?: boolean;
    fullWidth?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    style?: object;
    shouldDisplaySpinner?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
    variant = "contained",
    color = "primary",
    size = "medium",
    animated = true,
    fullWidth = false,
    isLoading = false,
    loadingText = "Loading...",
    shouldDisplaySpinner = true,
    rounded,
    label,
    className,
    disabled,
    // endIcon = <BeakerIcon className="w-4 h-4" />,
    endIcon,
    style,
    ...props
}: ButtonProps) => {
    //! Disabled
    const getDisabledStyles = (color: string) => ({
        backgroundColor: variant !== "outlined" ? `var(--${color}-color)` : "",
        opacity: 0.6,
    });

    const buttonClass = clsx(
        "exsoft-button",
        `exsoft-button--${size}`,
        `exsoft-button--${variant}`,
        `exsoft-button--${color}`,
        disabled && "exsoft-button--disabled",
        endIcon && "gap-2 items-center",
        animated && "exsoft-button--animated",
        fullWidth && "exsoft-button--fullWidth",
        isLoading && "exsoft-button--loading",
        rounded && `exsoft-button--rounded-${rounded}`,
        className
    );

    const spinnerStyles = {
        display: !shouldDisplaySpinner ? "none" : "block",
        borderColor:
            variant === "outlined"
                ? "var(--loading-spinner-color)"
                : "var(--spinner-border-color)",
        borderTopColor:
            variant === "outlined"
                ? `var(--${color}-color)`
                : "var(--loading-spinner-color)",
    };

    return (
        <button
            type="button"
            className={buttonClass}
            style={disabled ? getDisabledStyles(color) : style}
            aria-disabled={disabled || isLoading}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <span className="loading-spinner" style={spinnerStyles}></span>
            )}
            {isLoading ? loadingText : label}
            {!isLoading && endIcon}
        </button>
    );
};
