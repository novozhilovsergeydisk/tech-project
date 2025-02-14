import React from 'react';

interface ContactFormProps {
  'data-theme'?: 'light' | 'dark';
}

export function ContactForm(props: ContactFormProps) {
  return (
    <div id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8" {...props}>
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Start Your Project</h2>
        <p className="mt-4 text-lg text-gray-500 text-center">
          Ready to transform your digital presence? Let's discuss your project.
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Project Details
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Tell us about your project"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}