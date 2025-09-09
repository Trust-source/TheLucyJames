
interface SidebarProps {
  menu: boolean;
  setMenu: (value: boolean) => void;
}

function Sidebar({ menu, setMenu }: SidebarProps) {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMenu(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-55 bg-yellow-50 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        menu ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <ul className="mt-20 px-6 space-y-4">
        <li
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 text-green-700 text-lg hover:bg-teal-700 hover:text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-200"
        >
        Home
        </li>
        <li
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-3 text-green-700 text-lg hover:bg-green-700 hover:text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-200"
        >
        About
        </li>
        <li
          onClick={() => scrollToSection('experience')}
          className="flex items-center gap-3 text-green-700 text-lg hover:bg-green-700 hover:text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-200"
        >
          Experience
        </li>
              <li
          onClick={() => scrollToSection('blog')}
          className="flex items-center gap-3 text-green-700 text-lg hover:bg-green-700 hover:text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-200"
        >
           Blog
        </li>
        <li
          onClick={() => scrollToSection('contact')}
          className="flex items-center gap-3 text-green-700 text-lg hover:bg-green-700 hover:text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-200"
        >
           Contact
        </li>
      
      </ul>
    </div>
  );
}

export default Sidebar;
