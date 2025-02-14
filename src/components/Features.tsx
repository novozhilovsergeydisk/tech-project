import React from 'react';
import { Rocket, Users, BarChart } from 'lucide-react';

interface FeaturesProps {
  'data-theme'?: 'light' | 'dark';
}

export function Features(props: FeaturesProps) {
  return (
    <div className="py-12 bg-white" {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to build your digital presence
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary text-white">
                  <Rocket className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Development</h3>
              <p className="mt-2 text-base text-gray-500">
                From concept to launch in record time with our agile development process
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary text-white">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Team</h3>
              <p className="mt-2 text-base text-gray-500">
                Skilled professionals with years of industry experience
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-primary text-white">
                  <BarChart className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Results Driven</h3>
              <p className="mt-2 text-base text-gray-500">
                Focus on delivering measurable business outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}