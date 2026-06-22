'use client'

import { FC, HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("rounded-xl border border-border bg-card p-4 text-foreground shadow-sm transition-all duration-300 hover:border-[#10b981]/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]", className)}
      {...props}
    />
  );
};

export const CardHeader: FC<CardProps> = ({ className, ...props }) => {
  return <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />;
};

export const CardTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => {
  return <h3 className={cn("text-xl font-semibold leading-none tracking-tight", className)} {...props} />;
};

export const CardContent: FC<CardProps> = ({ className, ...props }) => {
  return <div className={cn("", className)} {...props} />;
};
