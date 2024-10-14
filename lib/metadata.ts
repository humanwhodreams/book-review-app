import type { Metadata } from 'next';

export function overrideMetadata(override: Metadata): Metadata {
  return {
    title: {
      template: '%s - BRA',
      default: 'Book Reviewing Application',
    },
    description:
      override.description ??
      'An application that allows you to review books you have read.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://book-reviewing-app.vercel.app',
      siteName: 'Book Reviewing Application',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@humanwhodreams',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      ...override.twitter,
    },
    ...override,
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.SITE_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.SITE_URL}`);
