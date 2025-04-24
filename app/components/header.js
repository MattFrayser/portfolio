import React, { useEffect, useState } from 'react';
import ThemeToggle from './themeToggle';
import Contact from './contact';

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [showDropHeader, setShowDropHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleContact = () => {
    setShowContact(true);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll behavior for drop-down header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show drop header when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowDropHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setShowDropHeader(false);
      }
      
      setLastScrollY(currentScrollY);

      // Handle section visibility for active link highlighting
      const sections = ['top', 'projects', 'experience'];
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Your original header - stays in place */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between py-4">
          <div className="flex items-center space-x-6">
            <a onClick={() => scrollToSection("top")} className="kill-link-style group relative">
              <span className="inline-block rounded-md animate__animated animate__fadeInDown border-4 select-none p-2 text-2xl xl:text-3xl font-extrabold z-10 relative">
                MF
              </span>
            </a>
            
            <div className="flex space-x-6">
              <a onClick={() => scrollToSection("projects")} className="relative group animate__animated animate__fadeInDown delay1 text-2xl xl:text-3xl cursor-pointer font-extrabold px-2 py-1 overflow-hidden">
                <span className="relative z-10">Projects</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200 transition-all duration-300 ease-out origin-bottom transform scale-y-[.5] group-hover:scale-y-[3]"></span>
              </a>
              
              <a onClick={() => scrollToSection("experience")} className="relative group animate__animated animate__fadeInDown kill-link-style delay2 text-2xl xl:text-3xl cursor-pointer font-extrabold px-2 py-1 overflow-hidden">
                <span className="relative z-10">Experience</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200 transition-all duration-300 ease-out origin-bottom transform scale-y-[.5] group-hover:scale-y-[3]"></span>
              </a>
              
              <div onClick={handleContact} className="relative group animate__animated animate__fadeInDown kill-link-style delay3 text-2xl xl:text-3xl cursor-pointer font-extrabold px-2 py-1 overflow-hidden">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-200 transition-all duration-300 ease-out origin-bottom transform scale-y-[.5] group-hover:scale-y-[3]"></span>
              </div>
            </div>
          </div>

          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-center py-4">
          <a href="#top" className="kill-link-style">
            <span className="inline-block animate__animated animate__fadeInDown border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl font-extrabold">
              MF
            </span>
          </a>
        </nav>
      </div>

      {/* header that drops down on scroll */}
      <div className={`headerdrop fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${showDropHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex items-center justify-between py-4">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection("top")} 
                className="group relative"
              >
                <span className="inline-block rounded-md border-4 border-gray-900 select-none p-2 text-2xl xl:text-3xl font-extrabold z-10 relative">
                  MF
                </span>
              </button>
              
              <div className="flex space-x-6">
                <button 
                  onClick={() => scrollToSection("projects")} 
                  className="relative group text-2xl xl:text-3xl cursor-pointer font-extrabold px-2 py-1 overflow-hidden text-gray-900"
                >
                  <span className="relative z-10">Projects</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-300 transition-all duration-300 ease-out origin-bottom transform scale-y-[.5] group-hover:scale-y-[3]"></span>
                </button>
                
                <button 
                  onClick={() => scrollToSection("experience")} 
                  className="relative group text-2xl xl:text-3xl cursor-pointer font-extrabold px-2 py-1 overflow-hidden text-gray-900"
                >
                  <span className="relative z-10">Experience</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-300 transition-all duration-300 ease-out origin-bottom transform scale-y-[.5] group-hover:scale-y-[3]"></span>
                </button>
                
                <button 
                  onClick={handleContact} 
                  className="relative group text-2xl xl:text-3xl cursor-pointer font-extrabold px-2 py-1 overflow-hidden text-gray-900"
                >
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-300 transition-all duration-300 ease-out origin-bottom transform scale-y-[.5] group-hover:scale-y-[3]"></span>
                </button>
              </div>
            </div>

            <ThemeToggle />
          </nav>
        </div>
      </div>

      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </>
  );
}