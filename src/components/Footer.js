import { navLinks, redesSociales } from "../data/content";

const Footer = () => {
  return (
    <footer id="contacto" className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-text">Certeza Hogar</span>
          <p>Inspección residencial con certeza y profesionalismo.</p>
        </div>

        <div className="footer-nav">
          <h4>Navegación</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Cómo contactarnos</h4>
          <div className="social-links">
            {redesSociales.map((red) => (
              <a
                key={red.name}
                href={red.href}
                className="social-link"
                aria-label={red.name}
                style={{ "--social-color": red.color }}
              >
                <i className={red.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
          <a href="#contacto" className="btn btn-primary">
            Agendar ahora
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Certeza Hogar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
