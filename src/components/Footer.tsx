// Server Component by default (no "use client"). Highly efficient as it renders on the server.
export default function Footer() {
  // Get the dynamic current year for the copyright string
  const currentYear = new Date().getFullYear();

  return (
    // Background gray, text muted, padding to give breathing room
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright section */}
          <div className="text-gray-500 text-sm">
            &copy; {currentYear} Architect.dev. All rights reserved.
          </div>
          
          {/* Footer Navigation Links */}
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Terms of Service</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}