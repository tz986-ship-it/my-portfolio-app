// Define strict TypeScript interface for a Project
// This ensures our application knows exactly what data to expect
export interface Project {
  id: string; // Unique identifier (simulates Primary Key)
  title: string; // The name of the project
  shortDescription: string; // Brief description for the card view
  longDescription: string; // Detailed description for the dynamic detail page
  image: string; // High-quality Unsplash URL for visuals
  tags: string[]; // Array of technologies used (e.g., React, Node)
  link: string; // Mock GitHub or Live URL
}

// Define strict TypeScript interface for a Review
export interface Review {
  id: string; // Unique identifier
  name: string; // Reviewer's full name
  role: string; // Reviewer's job title
  company: string; // Reviewer's company
  avatar: string; // Unsplash URL for user profile picture
  rating: number; // Integer between 1 and 5 representing stars
  shortFeedback: string; // Quick snippet for the grid card
  detailedFeedback: string; // In-depth testimonial for the detail page
}

// Simulated Database Array for Projects
export const projects: Project[] = [
  {
    id: 'proj-001',
    title: 'FinTech Dashboard',
    shortDescription: 'A real-time financial analytics dashboard.',
    longDescription: 'This comprehensive FinTech dashboard was built to handle massive streams of real-time financial data. It features secure authentication, WebSocket integration for live stock tickers, and advanced data visualization using D3.js. Security protocols include CSRF tokens and encrypted session management to ensure user data remains pristine and secure.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'D3.js'],
    link: 'https://github.com/mockuser/fintech-dash'
  },
  {
    id: 'proj-002',
    title: 'E-Commerce Platform',
    shortDescription: 'Modern shopping experience with secure checkout.',
    longDescription: 'A fully responsive e-commerce solution engineered for high conversion rates. Features include a dynamic shopping cart, integration with Stripe for PCI-compliant payments, and an optimized image delivery pipeline. The backend structure was designed to handle traffic spikes during Black Friday sales seamlessly.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    link: 'https://github.com/mockuser/ecommerce-app'
  },
  {
    id: 'proj-003',
    title: 'AI Content Generator',
    shortDescription: 'Leveraging LLMs to automate marketing copy.',
    longDescription: 'This application acts as a bridge between marketing teams and cutting-edge Large Language Models. By utilizing OpenAI APIs, users can generate SEO-optimized blog posts in seconds. The platform includes a rich-text editor, prompt engineering tools, and strict rate-limiting to prevent API abuse.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    tags: ['OpenAI API', 'Next.js', 'Python', 'FastAPI'],
    link: 'https://github.com/mockuser/ai-content-gen'
  }
];

// Simulated Database Array for Reviews/Testimonials
export const reviews: Review[] = [
  {
    id: 'rev-001',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'TechFlow Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    shortFeedback: 'An absolute game-changer for our infrastructure.',
    detailedFeedback: 'Working with this developer was an absolute pleasure. They architected our entire cloud infrastructure from the ground up, ensuring a 99.99% uptime. Their attention to detail regarding security requirements like XSS and CSRF protection gave our board absolute peace of mind.'
  },
  {
    id: 'rev-002',
    name: 'Marcus Chen',
    role: 'Product Manager',
    company: 'Innovate Digital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    shortFeedback: 'Delivered ahead of schedule with flawless code.',
    detailedFeedback: 'Not only did they deliver the final product two weeks ahead of schedule, but the code quality was unparalleled. The use of TypeScript and strict linting rules meant that hand-off to our internal team was frictionless. Highly recommended for any complex web application.'
  },
  {
    id: 'rev-003',
    name: 'Elena Rodriguez',
    role: 'Founder & CEO',
    company: 'Startup Hub',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 4,
    shortFeedback: 'Fantastic UX/UI design capabilities.',
    detailedFeedback: 'The minimalist aesthetic combined with complex backend logic perfectly perfectly perfectly encapsulated our brand vision. The responsive design looks beautiful on mobile and tablet. Only docking one star because we wished we hired them sooner!'
  }
];