import React from "react";
import "./button.css";
import { BeakerIcon } from "@heroicons/react/24/solid";

//! Test Cases
// = <BeakerIcon className="size-6" />

export interface ButtonProps {
    variant?: "outlined" | "contained";
    color?: "primary" | "warning" | "success" | "error";
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    animated?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
    variant = "contained",
    color = "primary",
    size = "medium",
    animated = true,
    label,
    className,
    disabled,
    startIcon,
    endIcon,
    ...props
}: ButtonProps) => {
    const isIcon = startIcon || endIcon;

    const buttonClass = `
        exsoft-button 
        exsoft-button--${size} 
        exsoft-button--${variant} 
        exsoft-button--${color} 
        ${className || ""} 
        ${disabled ? "exsoft-button--disabled" : ""} 
        ${isIcon ? "gap-2 items-center" : ""} 
        ${animated ? "exsoft-button--animated" : ""}
    `;

    return (
        <button
            type="button"
            // Size - Variant - ClassName - Disabled - Icon - Animation
            className={buttonClass}
            {...props}
        >
            {startIcon && startIcon}
            {label}
            {endIcon && endIcon}
        </button>
    );
};
