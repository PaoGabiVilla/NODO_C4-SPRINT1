import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#", icons: <i class="bi bi-house-door-fill"></i> },
    { name: "Nosotros", href: "#", icons: <i class="bi bi-people-fill"></i>},
    { name: "Actividades", href: "#", icons: <i class="bi bi-building-fill"></i> },
    { name: "Contacto", href: "#", icons: <i class="bi bi-envelope-at-fill"></i> },
  ];

  return (
    <nav className="bg-[#F8F4EC] w-full px-6 py-2">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <img className="w-12 h-auto" src="/Img/Logo.png" alt="Logo" />

        {/* Menú escritorio */}
        <ul className="hidden md:flex space-x-10 text-[#265772] font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                {link.icons}
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-[#265772]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden text-[#265772] font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block px-2 py-1 hover:bg-[#E3DFD5] rounded"
              >
                {link.icons}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
