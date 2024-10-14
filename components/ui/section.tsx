import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  children?: ReactNode;
  className?: string;
}

export function Section({ children, className }: Props) {
  return (
    <section className={cn('max-w-7xl mx-auto px-4 lg:px-0 py-12', className)}>
      {children}
    </section>
  );
}
