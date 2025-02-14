import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface PortfolioProps {
  'data-theme'?: 'light' | 'dark';
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Healthcare Management System",
    description: "Modern patient management system with appointment scheduling and electronic health records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management platform with virtual tours and advanced search capabilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Portfolio(props: PortfolioProps) {
  return (
    <div id="portfolio" className="py-16 bg-gray-50" {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Work</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                        title="View Live Site"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                        title="View Source Code"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}