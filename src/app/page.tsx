import Link from 'next/link'; // Client-side transition link
import { ArrowRight, Star } from 'lucide-react'; // Icons
import { projects, reviews } from '@/data/mockData'; // Import our simulated database data

// Server Component (Default for Next.js App Router)
// This page fetches data server-side and sends pure HTML to the client for instant loading
export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* ================= HERO SECTION ================= */}
      {/* Container with padding, centered text, and spacing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        {/* Main heading with responsive sizing and bold weight */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Building Digital <span className="text-blue-600">Masterpieces</span>.
        </h1>
        {/* Subheading describing the mission */}
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
          I'm a Senior Software Architect specializing in high-performance, secure, and scalable web applications using modern web technologies.
        </p>
        
        {/* Call To Action (CTA) Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/projects" className="flex items-center px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium">
            View Work <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="/contact" className="px-8 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-medium">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          
          {/* Responsive CSS Grid: 1 column on mobile, 3 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map over the projects mock data array */}
            {projects.map((project) => (
              // Each mapped item must have a unique 'key' for React DOM reconciliation
              <div key={project.id} className="group flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                {/* Project Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                {/* Project Details Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.shortDescription}</p>
                  
                  {/* Tags mapping */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link to Dynamic Route utilizing the project's ID */}
                  <Link href={`/projects/${project.id}`} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map over the reviews mock data array */}
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Visual Stars Rating (Mapping an array of length based on the rating number) */}
                <div className="flex text-yellow-400 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                {/* Short Feedback snippet */}
                <p className="text-gray-800 text-lg font-medium italic mb-6">"{review.shortFeedback}"</p>
                
                {/* Reviewer Meta Information */}
                <div className="flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={review.avatar} alt={review.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}, {review.company}</p>
                  </div>
                </div>

                {/* Link to Dynamic Route utilizing the review's ID */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link href={`/reviews/${review.id}`} className="text-sm text-blue-600 font-semibold hover:underline">
                    Read Full Review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}