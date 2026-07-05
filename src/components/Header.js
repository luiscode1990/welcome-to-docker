import { useState } from "react";
import { navLinks } from "../data/content";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#inicio" className="logo" onClick={closeMenu}>
          <span className="logo-icon">
            <i className="fa-solid fa-house-chimney" aria-hidden="true" />
          </span>
          <span className="logo-text">Certeza Hogar</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
        </button>

        <nav
          className={`nav${menuOpen ? " nav-open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-mobile-cta">
              <a href="#contacto" className="btn btn-primary btn-sm" onClick={closeMenu}>
                Agendar
              </a>
            </li>
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
