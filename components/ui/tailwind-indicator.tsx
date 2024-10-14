import * as React from 'react';

import { cn } from '@/lib/cn';

interface Props {
  position?: 'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';
}

export function TailwindIndicator({ position = 'bottom_left' }: Props) {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div
      className={cn(
        'h-8 px-3 text-sm rounded-md',
        'font-medium bg-muted text-muted-foreground',
        'fixed z-50 flex items-center justify-center',
        position === 'top_right' && 'top-1 right-1',
        position === 'top_left' && 'top-1 left-1',
        position === 'bottom_right' && 'bottom-1 right-1',
        position === 'bottom_left' && 'bottom-1 left-1'
      )}
    >
      <div className="sm:hidden">extra-small &mdash; xs</div>
      <div className="hidden md:hidden sm:flex">small &mdash; sm</div>
      <div className="hidden md:flex lg:hidden">medium &mdash; md</div>
      <div className="hidden lg:flex xl:hidden">large &mdash; lg</div>
      <div className="hidden xl:flex 2xl:hidden">extra-large &mdash; xl</div>
      <div className="hidden 2xl:flex">extra-extra-large &mdash; 2xl</div>
    </div>
  );
}
