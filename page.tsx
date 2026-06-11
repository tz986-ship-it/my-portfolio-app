import { reviews } from '@/data/mockData'; // Import our mock database
import Link from 'next/link';
import { ArrowLeft, Star, Quote } from 'lucide-react';

// Dynamic params type definition
interface PageProps {
  params: {
    id: string;
  };
}

export default function ReviewDetail({ params }: PageProps) {
  // Query Simulation: Find review by ID
  const review = reviews.find(r => r.id === params.id);

  // Fallback if ID is invalid
  if (!review) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Review Not Found</h1>
        <p className="text-gray-600 mb-8">This testimonial could not be located.</p>
        <Link href="/" className="text-blue-600 hover:underline flex items-center font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[80vh]">
      {/* Navigation */}
      <Link href="/" className="inline-flex items-center text-gray-500 hover:text-black mb-12 transition-colors font-medium">
        <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
      </Link>

      {/* Primary Card Layout for the Review */}
      <div className="bg-white rounded-3xl p-8 md:p-16 border border-gray-100 shadow-2xl relative overflow-hidden">
        {/* Decorative background quote icon (Large and faint) */}
        <Quote className="absolute top-8 right-8 h-32 w-32 text-gray-50 opacity-50 transform rotate-180 pointer-events-none" />
        
        {/* Reviewer Information Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 relative z-10">
          {/* Avatar Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={review.avatar} 
            alt={review.name} 
            className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{review.name}</h1>
            <p className="text-xl text-gray-500 mb-4 font-medium">{review.role} at <span className="text-black">{review.company}</span></p>
            
            {/* Visual Stars Rating Array Map */}
            <div className="flex justify-center md:justify-start text-yellow-400">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Feedback Content */}
        <div className="relative z-10 border-t border-gray-100 pt-10">
          <p className="text-2xl text-gray-800 leading-relaxed italic font-serif">
            "{review.detailedFeedback}"
          </p>
        </div>
      </div>
    </div>
  );
}