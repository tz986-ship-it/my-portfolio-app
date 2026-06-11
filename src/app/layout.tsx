import './globals.css'; // Import Tailwind CSS definitions globally
import type { Metadata } from 'next'; // Type for SEO metadata
import { Inter } from 'next/font/google'; // Optimized Google Fonts loader
import Navbar from '@/components/Navbar'; // Import our Navigation Bar
import Footer from '@/components/Footer'; // Import our Global Footer

// Configure the Inter font with latin subset for performance
const inter = Inter({ subsets: ['latin'] });

// Export global SEO metadata. This creates <title> and <meta name="description"> tags in the <head>
export const metadata: Metadata = {
  title: 'Architect Portfolio | Next.js App Router',
  description: 'A modern, responsive portfolio built with Next.js, Tailwind, and TypeScript.',
};

// RootLayout is the foundational wrapper for ALL pages in the application.
// 'children' represents the specific page being rendered (e.g., page.tsx or about/page.tsx)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The lang attribute is important for Accessibility (a11y) and SEO
    <html lang="en">
      {/* Apply the Inter font class. flex and min-h-screen force the footer to the bottom of the page */}
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 text-gray-900`}>
        {/* Navbar stays at the top */}
        <Navbar />
        {/* Main dynamically injects the page content and expands to fill space (flex-grow) */}
        <main className="flex-grow">
          {children}
        </main>
        {/* Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}