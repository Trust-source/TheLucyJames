

type NavbarProps = {
  menu: boolean;
  setMenu: (menu: boolean) => void;
};

function Navbar({ menu, setMenu }: NavbarProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-green-700 shadow-md border-b border-yellow-600 z-50 h-[50px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-2 h-[50px] z-50 ">

        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-2xl font-bold text-teal-800"></span>
        </div>


        <ul className="hidden md:flex space-x-6 font-semibold ">
          {['home', 'about', 'experience','blog', 'contact'].map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-200 px-4 py-1 rounded-full hover:bg-teal-900 hover:text-white transition duration-300 ease-in-out cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>

     
        <div
          className="md:hidden text-gray-200 font-bold text-lg cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
