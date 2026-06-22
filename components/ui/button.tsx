"use client";

import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

const Button: FC<ButtonProps> = ({
  className,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2 focus:ring-offset-background cursor-pointer",
        {
          "bg-[#10b981] text-black hover:bg-emerald-400": variant === "primary",
          "border border-[#10b981] text-[#10b981] hover:bg-[#10b981]/10":
            variant === "outline",
          "text-gray-300 hover:text-white hover:bg-white/10":
            variant === "ghost",
        },
        className,
      )}
      {...props}
    />
  );
};

export default Button;
