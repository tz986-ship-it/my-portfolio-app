// "use client" is mandated because we are tracking form input state and handling form submission events.
"use client";

import { useState } from 'react'; // Hook for component state management
import { CheckCircle } from 'lucide-react'; // Success icon

export default function ContactPage() {
  // State to track form inputs
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // State to handle UI loading/submission status ('idle', 'submitting', 'success')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Helper to handle input changes and update state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Spread existing form data, and dynamically update the specific field using bracket notation
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    // Prevent default browser refresh on form submission
    e.preventDefault();
    
    // Set UI state to submitting to show loading indication
    setStatus('submitting');

    // Simulate API Network Request / Backend process (Mocking Database save)
    // NOTE FOR FRESHERS: In a real app, this is where you send data to an API.
    // React automatically escapes string values rendered in the DOM, offering native XSS protection here.
    setTimeout(() => {
      setStatus('success');
      // Reset form fields after successful submission
      setFormData({ name: '', email: '', message: '' });

      // Automatically reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500); // Simulated 1.5 second delay
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-900">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Have a project in mind or want to discuss architecture? Drop a message below.
      </p>

      {/* Main form container */}
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Conditional Rendering: Show success toast if status is 'success' */}
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center animate-pulse">
            <CheckCircle className="h-6 w-6 mr-3" />
            <span className="font-semibold">Message sent securely! I will get back to you shortly.</span>
          </div>
        )}

        {/* The HTML form element attached to the React handler */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required // HTML5 validation
              value={formData.name} // Bind input to React state (Controlled Component)
              onChange={handleChange} // Update state on typing
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5} // Defines text area height
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black outline-none transition-all resize-y"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'} // Prevent double-clicks while loading
            className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* Conditional text based on state */}
            {status === 'submitting' ? 'Sending Securely...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}