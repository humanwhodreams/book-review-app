import Link from 'next/link';
import { cn } from '@/lib/cn';

interface Props {
  href?: string;
}

export function Brand({ href }: Props) {
  return (
    <Link
      href={href || '/'}
      className={cn('text-2xl font-semibold tracking-tight py-2')}
    >
      Booking Review App
    </Link>
  );
}
