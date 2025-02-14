import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogProps {
  'data-theme'?: 'light' | 'dark';
}

const posts: BlogPost[] = [
  {
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt: "Explore the upcoming trends and technologies that will shape the future of web development, from AI integration to advanced user interfaces.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    category: "Technology",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "Learn the best practices for creating scalable, maintainable applications using microservices and cloud-native technologies.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Mar 12, 2025",
    readTime: "10 min read",
    category: "Architecture",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "The Impact of AI on Software Development",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we develop software and what it means for developers.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "Mar 10, 2025",
    readTime: "6 min read",
    category: "AI",
    author: {
      name: "Michael Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
];

export function Blog(props: BlogProps) {
  return (
    <div id="blog" className="py-16 bg-white" {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Blog</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Insights & News
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Stay updated with the latest trends, technologies, and best practices in software development.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-light text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                      <Clock className="h-4 w-4 ml-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  Read more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}