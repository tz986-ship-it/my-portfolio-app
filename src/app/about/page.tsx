import { CheckCircle } from 'lucide-react'; // Checkmark icon for skills

// Static Server Component for the About Page
export default function AboutPage() {
  // Array of skills for rapid mapping
  const skills = [
    "Next.js & React ecosystem", "TypeScript / JavaScript", "Node.js & Express", 
    "PostgreSQL & MongoDB", "Tailwind CSS & Framer Motion", "Docker & CI/CD Pipelines",
    "Security (XSS/CSRF)", "Cloud Architecture (AWS/Vercel)"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">About Me</h1>
      
      {/* Bio Section */}
      <div className="prose prose-lg text-gray-600 mb-12">
        <p className="mb-4">
          Hello! I am a Senior Software Architect with over a decade of experience in engineering scalable, resilient, and secure web applications. My passion lies in transforming complex business requirements into elegant, robust technical solutions.
        </p>
        <p>
          I strongly advocate for clean code, comprehensive testing, and strict security protocols. Every project I undertake adheres to the highest industry standards, ensuring protection against vulnerabilities while delivering an impeccable user experience.
        </p>
      </div>

      {/* Skills Grid Section */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Core Competencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Map through the skills array to generate list items dynamically */}
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center text-gray-700 font-medium">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-900 text-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">My Mission</h2>
        <p className="text-gray-300 italic text-lg leading-relaxed">
          "To bridge the gap between human creativity and machine efficiency by architecting software that is not only powerful and secure, but intuitively beautiful to use."
        </p>
      </div>
    </div>
  );
}