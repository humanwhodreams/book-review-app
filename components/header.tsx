import { Brand } from '@/components/ui/brand';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full border-b bg-background">
      <nav className="flex flex-row items-center justify-between h-12 px-4 mx-auto max-w-7xl lg:px-0">
        <Brand />
        <ThemeToggle />
      </nav>
    </header>
  );
}
