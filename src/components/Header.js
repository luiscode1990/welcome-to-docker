import { navLinks } from "../data/content";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="logo">
          <span className="logo-icon">
            <i className="fa-solid fa-house-chimney" aria-hidden="true" />
          </span>
          <span className="logo-text">Certeza Hogar</span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contacto" className="btn btn-primary btn-sm header-cta">
          Agendar
        </a>
      </div>
    </header>
  );
};

export default Header;
