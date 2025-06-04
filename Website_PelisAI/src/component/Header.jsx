import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Detect", href: "/Detect" },
    { name: "About", href: "/About" },
  ];
  return (
    <section className="container mx-auto px-4">
      <div className="flex justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 items-center">
        <div className="flex items-center logo">
          <img src="\PelisAi.svg" alt="" className="w-[100px]" />
        </div>

        <div className="hidden md:flex px-4 cursor-pointer">
          {navLinks.map((link) => (
              <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `mx-6 text-md font-semibold ${isActive ? 'text-blue-800 border-b-2 border-blue-800 pb-1' 
                : 'text-gray-700 hover:text-[#6c4282]'}`}>
              <p>{link.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
