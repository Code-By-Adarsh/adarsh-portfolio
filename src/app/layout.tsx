import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adarsh Mishra | QA Automation Engineer & Founder at SkillTa',
  description:
    'Portfolio of Adarsh Jayprakash Mishra — QA Automation Tester (Selenium, Playwright, TestNG), Web3 QA, and Founder of SkillTa.',
  keywords: [
    'Adarsh Mishra',
    'Adarsh Jayprakash Mishra',
    'QA Automation Tester',
    'Playwright',
    'Selenium WebDriver',
    'Web3 QA',
    'MetaMask',
    'SkillTa',
    'Mail-Karo',
    'Postman API',
  ],
  authors: [{ name: 'Adarsh Jayprakash Mishra', url: 'https://github.com/Code-By-Adarsh' }],
  openGraph: {
    title: 'Adarsh Mishra | QA Automation Engineer & Indie Builder',
    description:
      'Explore test automation suites, STLC manual testing projects, Web3 QA, and AI SaaS applications by Adarsh Mishra.',
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
      <body className="bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
