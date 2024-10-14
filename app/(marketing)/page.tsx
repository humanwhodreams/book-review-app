import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Section } from '@/components/ui/section';
import { overrideMetadata } from '@/lib/metadata';
import { type Metadata } from 'next';

export const metadata: Metadata = overrideMetadata({
  title: 'Home',
});

export default function Home() {
  return (
    <main>
      <Section className='space-y-4'>
        <h1>Hello world</h1>
        <p>Feeling electric about this book review application.</p>
        <pre className="p-4 border rounded-md bg-muted w-fit">
          <code className="text-sm">
            console.log(
            <span className="text-blue-500">
              'displaying file: hello-world.tsx'
            </span>
            )
          </code>
        </pre>
        <div className="flex flex-row items-center gap-2 p-2 border rounded-md max-w-96 bg-muted/50">
          <Input type="text" sizes={'lg'} placeholder="name@email.com" />
          <Button type="button">Submit</Button>
        </div>
      </Section>
    </main>
  );
}
