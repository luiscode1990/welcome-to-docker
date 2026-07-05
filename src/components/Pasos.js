import { pasos } from "../data/content";

const Pasos = () => {
  return (
    <section id="pasos" className="section pasos">
      <div className="container">
        <div className="section-header">
          <h2>3 pasos para agendar</h2>
          <p>Un proceso simple y transparente de principio a fin.</p>
        </div>

        <div className="pasos-grid">
          {pasos.map((paso, index) => (
            <article key={paso.title} className="paso-card">
              <span className="paso-numero">{index + 1}</span>
              <div className="paso-icon">
                <i className={`fa-solid ${paso.icon}`} aria-hidden="true" />
              </div>
              <h3>{paso.title}</h3>
              <p>{paso.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pasos;
