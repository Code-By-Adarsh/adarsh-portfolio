import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adarsh Mishra | QA Automation Tester & Platform Engineer',
  description:
    'Portfolio of Adarsh Jayprakash Mishra — QA Automation Tester (Selenium, Playwright, TestNG), Web3 QA, and Founder of SkillTa & CodeDropz.',
  keywords: [
    'Adarsh Mishra',
    'Adarsh Jayprakash Mishra',
    'QA Automation Tester',
    'Playwright',
    'Selenium WebDriver',
    'Web3 QA',
    'MetaMask',
    'CodeDropz',
    'SkillTa',
    'Mail-Karo',
    'Postman API',
  ],
  authors: [{ name: 'Adarsh Jayprakash Mishra', url: 'https://github.com/Code-By-Adarsh' }],
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
    url: 'https://github.com/Code-By-Adarsh',
    siteName: 'Adarsh Mishra Portfolio',
    locale: 'en_US',
    type: 'website',
  },
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
      </head>
      <body className="bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
