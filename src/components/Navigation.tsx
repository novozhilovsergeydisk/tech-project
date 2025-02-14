import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code2, LogIn, UserPlus } from 'lucide-react';
import { AuthForm } from './Auth';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authForm, setAuthForm] = useState<'signin' | 'register' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Создаем Observer для отслеживания секций
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const isDark = entry.target.getAttribute('data-theme') === 'dark';
            setIsDarkSection(isDark);
          }
        });
      },
      {
        threshold: 0.6, // Секция должна быть видна на 60% для срабатывания
        rootMargin: '-80px 0px 0px 0px' // Учитываем высоту навигации
      }
    );

    // Находим все секции с data-theme
    const sections = document.querySelectorAll('[data-theme]');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getTextColor = () => {
    if (!isScrolled) return 'text-gray-900';
    return isDarkSection || isScrolled ? 'text-white' : 'text-gray-900';
  };

  const getLinkColor = () => {
    if (!isScrolled) return 'text-gray-600 hover:text-gray-900';
    return isDarkSection || isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-gray-900';
  };

  const getButtonStyle = () => {
    if (!isScrolled) return 'text-primary border-primary hover:bg-primary/5';
    return isDarkSection || isScrolled
      ? 'text-white border-white hover:bg-white/10'
      : 'text-primary border-primary hover:bg-primary/5';
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 border-b z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/20 backdrop-blur-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Code2 className={`h-8 w-8 ${isScrolled ? 'text-white' : 'text-primary'}`} />
              <span className={`ml-2 text-xl font-bold ${getTextColor()}`}>TechProject</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#services" className={getLinkColor()}>Services</a>
              <a href="#portfolio" className={getLinkColor()}>Portfolio</a>
              <a href="#blog" className={getLinkColor()}>Blog</a>
              <button 
                onClick={() => setAuthForm('signin')}
                className={`flex items-center px-4 py-2 space-x-2 transition-colors duration-200 border rounded-md ${getButtonStyle()}`}
              >
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </button>
              <button 
                onClick={() => setAuthForm('register')}
                className={`flex items-center px-4 py-2 space-x-2 transition-colors duration-200 border rounded-md ${getButtonStyle()}`}
              >
                <UserPlus className="h-5 w-5" />
                <span>Register</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={getLinkColor()}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full border-b bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Portfolio</a>
              <a href="#blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Blog</a>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setAuthForm('signin');
                }}
                className="w-full flex items-center px-3 py-2 space-x-2 border rounded-md text-primary border-primary hover:bg-primary/5"
              >
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setAuthForm('register');
                }}
                className="w-full flex items-center px-3 py-2 space-x-2 border rounded-md text-primary border-primary hover:bg-primary/5"
              >
                <UserPlus className="h-5 w-5" />
                <span>Register</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>

      <AuthForm 
        isOpen={authForm !== null}
        formType={authForm}
        onClose={() => setAuthForm(null)}
      />
    </>
  );
}