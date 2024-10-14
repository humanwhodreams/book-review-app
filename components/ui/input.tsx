import * as React from 'react';

import { cn } from '@/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { focusInput, focusError } from '@/lib/focuses';

const inputVariants = cva(
  [
    'flex w-full rounded-md border border-input text-base transition-colors placeholder:text-muted-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground disabled:cursor-not-allowed disabled:opacity-50',
    focusInput,
  ],
  {
    variants: {
      variant: {
        default: 'bg-background hover:bg-background/90',
        secondary: 'bg-secondary hover:bg-secondary/90',
      },
      sizes: {
        default: 'h-10 px-3 py-2',
        sm: 'h-8 px-3 py-2',
        lg: 'h-11 px-4 py-2',
      },
      hasError: {
        true: focusError,
      },
    },
    defaultVariants: {
      variant: 'default',
      sizes: 'default',
      hasError: false,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, sizes, hasError, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, sizes, hasError, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
