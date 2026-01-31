import { Metadata } from 'next';

export const siteConfig = {
  name: 'Your Company Name',
  shortName: 'Company',
  description: 'Your company description goes here. A modern tech startup delivering innovative solutions.',
  url: 'https://yourdomain.com',
  ogImage: 'https://yourdomain.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/yourcompany',
    github: 'https://github.com/yourcompany',
    linkedin: 'https://linkedin.com/company/yourcompany',
  },
};

export function generateMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description: fullDescription,
    keywords: ['company', 'business', 'services', 'portfolio'],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: '@yourcompany',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
