'use client';

interface Props {
  
}

export default function Navbar({} : Props) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 border-b w-full px-page-margin border-gray-200 bg-white">
      <div className="w-full">
        <div className="flex items-center h-section gap-20">
          {/* Logo */}
          <a href="https://john-r-devoe.github.io/personal-site/" className="font-bold italic text-lg hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-600">
            John DeVoe
          </a>

          {/* Nav Items */}
          <div className="flex items-center gap-8">
            <a 
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-600"
            >
              Home
            </a>
            <a 
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-600"
            >
              Projects
            </a>
            <a 
              href="#experience"
              onClick={(e) => scrollToSection(e, 'experience')}
              className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-600"
            >
              Experience
            </a>
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-600"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}