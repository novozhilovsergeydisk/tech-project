import React from 'react';
import { Monitor, Database, Cloud, ChevronRight } from 'lucide-react';

interface ServicesProps {
  'data-theme'?: 'light' | 'dark';
}

export function Services(props: ServicesProps) {
  return (
    <div id="services" className="py-12 bg-gray-50" {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Digital Solutions
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {/* UI/UX Design */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Monitor className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">UI/UX Design</h3>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li>User Research & Analysis</li>
                <li>Wireframing & Prototyping</li>
                <li>Visual Design</li>
                <li>Usability Testing</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-primary-dark">
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Development */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Database className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">Development</h3>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Mobile Apps</li>
                <li>API Integration</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-primary-dark">
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* DevOps */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Cloud className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">DevOps</h3>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li>Cloud Infrastructure</li>
                <li>CI/CD Implementation</li>
                <li>Security & Monitoring</li>
                <li>Performance Optimization</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center text-primary hover:text-primary-dark">
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}