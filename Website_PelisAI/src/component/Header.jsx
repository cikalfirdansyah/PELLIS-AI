const Header = () => {
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Detect", href: "/Detect" },
    { name: "About", href: "/About" },
  ];
  return (
    <section className="container mx-auto px-4">
      <div className="flex justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 items-center">
        <div className="flex items-center logo">
          <img src="\PelisAi.svg" alt="" />
        </div>

        <div className="hidden md:flex px-4 gap-10 cursor-pointer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <div key={link.name} className="mx-6">
                <p className="text-md font-semibold">{link.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
