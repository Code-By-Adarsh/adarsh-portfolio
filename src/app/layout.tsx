import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adarsh-mishra.vercel.app';
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'YOUR_GOOGLE_VERIFICATION_TOKEN';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Adarsh Mishra | QA Automation Tester & Platform Engineer',
    template: '%s | Adarsh Mishra',
  },
  description:
    'Portfolio of Adarsh Jayprakash Mishra — QA Automation Tester (Selenium, Playwright, TestNG), Web3 QA, and Creator of SkillTa & CodeDropz.',
  keywords: [
    'Adarsh Mishra',
    'Adarsh Jayprakash Mishra',
    'QA Automation Tester',
    'Software Tester',
    'Playwright',
    'Selenium WebDriver',
    'Web3 QA',
    'MetaMask Testing',
    'CodeDropz',
    'SkillTa',
    'Mail-Karo',
    'Postman API Testing',
    'STLC',
    'Quality Assurance Engineer',
  ],
  authors: [{ name: 'Adarsh Jayprakash Mishra', url: 'https://github.com/Code-By-Adarsh' }],
  creator: 'Adarsh Jayprakash Mishra',
  publisher: 'Adarsh Jayprakash Mishra',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: googleVerification,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Adarsh Mishra | QA Automation Tester & Platform Engineer',
    description:
      'Explore test automation suites, STLC manual testing projects, Web3 QA, and software projects by Adarsh Mishra.',
    url: siteUrl,
    siteName: 'Adarsh Mishra Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 1024,
        height: 1024,
        alt: 'Adarsh Mishra - QA Automation Tester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adarsh Mishra | QA Automation Tester & Platform Engineer',
    description:
      'QA Automation Tester (Selenium, Playwright, TestNG), Web3 QA, and Creator of SkillTa & CodeDropz.',
    creator: '@AdarshMi18',
    images: ['/profile.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Adarsh Jayprakash Mishra',
      alternateName: 'Adarsh Mishra',
      jobTitle: 'QA Automation Tester',
      description:
        'QA Automation Tester with hands-on manual and automation testing experience across Web3, e-commerce, and SaaS applications.',
      url: siteUrl,
      image: `${siteUrl}/profile.jpg`,
      sameAs: [
        'https://www.linkedin.com/in/adarsh-jayprakash-mishra',
        'https://github.com/Code-By-Adarsh',
        'https://twitter.com/AdarshMi18',
        'https://www.skillta.tech',
      ],
      knowsAbout: [
        'Quality Assurance',
        'Software Testing Life Cycle (STLC)',
        'Test Automation',
        'Selenium WebDriver',
        'Playwright',
        'TestNG',
        'Postman API Testing',
        'Web3 QA',
        'Java',
        'JavaScript',
        'TypeScript',
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'University of Mumbai',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Adarsh Mishra Portfolio',
      description: 'QA Automation Tester & Platform Engineer Portfolio',
      author: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
