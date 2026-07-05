import { testimonios } from "../data/content";

const Testimonios = () => {
  return (
    <section id="testimonios" className="section testimonios">
      <div className="container">
        <div className="section-header">
          <h2>Testimonios</h2>
          <p>Lo que dicen quienes ya confiaron en nosotros.</p>
        </div>

        <div className="testimonios-grid">
          {testimonios.map((t) => (
            <article key={t.nombre} className="testimonio-card">
              <div className="testimonio-quote">
                <i className="fa-solid fa-quote-left" aria-hidden="true" />
              </div>
              <p className="testimonio-texto">"{t.texto}"</p>
              <p className="testimonio-nombre">— {t.nombre}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
