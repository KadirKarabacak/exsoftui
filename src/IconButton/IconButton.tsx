import React from "react";
import { clsx } from "../utils/utils";
import "./index.css";

//! Test Cases
export interface IconButtonProps {
    variant?: "outlined" | "contained";
    color?: "primary" | "warning" | "success" | "error";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    isLoading?: boolean;
    spinnerColor?: string;
    style?: object;
}

export const IconButton = ({
    variant = "contained",
    color = "primary",
    size = "medium",
    isLoading = false,
    spinnerColor,
    className,
    disabled,
    style,
    icon,
    ...props
}: IconButtonProps) => {
    //! Disabled
    const getDisabledStyles = (color: string) => ({
        backgroundColor:
            variant !== "outlined"
                ? `var(--${color}-color, var(--disabled-color))`
                : "",
        opacity: 0.9,
    });

    const buttonClass = clsx(
        "exsoft-icon-button",
        `exsoft-icon-button--${size}`,
        `exsoft-icon-button--${variant}`,
        `exsoft-icon-button--${color}`,
        disabled && "exsoft-icon-button--disabled",
        isLoading && "exsoft-icon-button--loading",
        className
    );

    const spinnerStyles = {
        borderColor:
            variant === "outlined"
                ? "var(--loading-spinner-color)"
                : "var(--spinner-border-color-2)",
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
            {!isLoading && icon}
        </button>
    );
};
