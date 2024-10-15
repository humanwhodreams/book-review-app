import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Section } from '@/components/ui/section';
import { overrideMetadata } from '@/lib/metadata';
import { getCollection } from '@/utils/wix/get-collection';
import { type Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = overrideMetadata({
  title: 'Home',
});

export default async function Home() {
  const data = await getCollection({ id: 'Books' });

  return (
    <main>
      <Section className="space-y-4">
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
      <Section>
        <h2 data-underline={false}>List of books reviewed.</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
          {data.map((datum) => (
            <div key={datum._id} className="col-span-1">
              <Image
                src={datum.data?.coverImage}
                alt={`${datum.data?.title} cover image.`}
                width={1920}
                height={0}
                className="object-contain h-auto rounded-lg"
              />
              <div className="py-4">
                <h4>{datum.data?.title}</h4>
                <p className="[&:not(:first-child)]:mt-0 text-muted-foreground">
                  {datum.data?.description}
                </p>
              </div>
              <div>
                <span className="font-medium">{datum.data?.author}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
