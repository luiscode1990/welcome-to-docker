import {
  categoriasInspeccion,
  informeDetalle,
  paquetes,
} from "../data/content";

const Paquetes = () => {
  return (
    <section id="paquetes" className="section paquetes">
      <div className="container">
        <div className="section-header">
          <h2>Paquetes e inspección</h2>
          <p>Conoce qué revisamos y elige el paquete ideal para ti.</p>
        </div>

        <div className="categorias-grid">
          {categoriasInspeccion.map((cat) => (
            <article key={cat.title} className="categoria-card">
              <div className="categoria-icon">
                <i className={`fa-solid ${cat.icon}`} aria-hidden="true" />
              </div>
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="informe-box">
          <h3>
            <i className="fa-solid fa-clipboard-list" aria-hidden="true" />{" "}
            Informe detallado
          </h3>
          <ul className="informe-list">
            {informeDetalle.map((item) => (
              <li key={item}>
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="paquetes-grid">
          {paquetes.map((paquete) => (
            <article
              key={paquete.name}
              className={`paquete-card${paquete.destacado ? " destacado" : ""}`}
            >
              {paquete.destacado && (
                <span className="paquete-badge">Más popular</span>
              )}
              <h3>{paquete.name}</h3>
              <p className="paquete-duration">{paquete.duration}</p>
              <p className="paquete-desc">{paquete.description}</p>
              <ul>
                {paquete.features.map((feature) => (
                  <li key={feature}>
                    <i className="fa-solid fa-check" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="btn btn-secondary">
                Cotizar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Paquetes;
