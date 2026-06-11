// Import NextRequest and NextResponse from Next.js server library
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function to intercept requests and inject security headers
// This is critical for preventing XSS and Clickjacking attacks
export function middleware(request: NextRequest) {
  // Clone the request headers so we can modify them securely
  const requestHeaders = new Headers(request.headers);
  // Create a new response object and pass the cloned headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // 1. Content Security Policy (CSP): Mitigates Cross-Site Scripting (XSS)
  // We allow scripts from 'self' and images from Unsplash
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.unsplash.com https://plus.unsplash.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;
  
  // Replace newlines with spaces for a valid header string
  response.headers.set('Content-Security-Policy', cspHeader.replace(/\s{2,}/g, ' ').trim());
  // Prevent MIME type sniffing (Security best practice)
  response.headers.set('X-Content-Type-Options', 'nosniff');
  // Prevent Clickjacking (blocks site from being loaded in an iframe)
  response.headers.set('X-Frame-Options', 'DENY');
  // Enable legacy XSS filter in older browsers
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Return the securely modified response
  return response;
}