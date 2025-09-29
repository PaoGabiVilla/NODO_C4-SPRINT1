const Footer = () => {
  return (
    <footer className="h-16 bg-gray-100 flex items-center justify-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Escuela San José. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
