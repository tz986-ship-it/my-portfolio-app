// "use client" is REQUIRED here because we are using React State (useState) for the mobile menu.
// Server components cannot handle client-side interactivity like button clicks.
"use client";

import Link from 'next/link'; // Next.js optimized routing component
import { useState } from 'react'; // React Hook for managing state
import { Menu, X } from 'lucide-react'; // High-quality SVG icons

export default function Navbar() {
  // State to track if the mobile navigation menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to toggle the state of the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // Sticky navbar sticks to the top of the viewport when scrolling. Z-50 keeps it above other content.
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            {/* Link prevents full page reload, utilizing Next.js client-side routing */}
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              Architect.dev
            </Link>
          </div>

          {/* Desktop Navigation Links (Hidden on small screens, shown on md and larger) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors duration-200 font-medium">Contact</Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded-md p-1"
              aria-label="Toggle menu" // Accessibility label for screen readers
            >
              {/* Conditional rendering: Show X if open, Hamburger Menu if closed */}
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {/* If isOpen is true, render this div block */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {/* When a link is clicked, we call toggleMenu to close the mobile menu automatically */}
            <Link href="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">Home</Link>
            <Link href="/about" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">About</Link>
            <Link href="/contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}