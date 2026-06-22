'use client'

import { FC, HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

const Badge: FC<BadgeProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-transparent px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2",
        className
      )}
      {...props}
    />
  );
};

export default Badge;
