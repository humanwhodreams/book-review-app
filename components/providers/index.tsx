import { ReactNode } from 'react';
import { TailwindIndicator } from '@/components/ui/tailwind-indicator';
import { ThemeProvider } from '@/components/providers/theme';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        // disableTransitionOnChange
      >
        {children}
        <TailwindIndicator />
      </ThemeProvider>
    </>
  );
}
