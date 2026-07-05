import { nosotros } from "../data/content";

const Nosotros = () => {
  return (
    <section id="nosotros" className="section nosotros">
      <div className="container">
        <div className="section-header">
          <h2>Quiénes somos</h2>
          <p>Expertos en inspección residencial con enfoque en tu tranquilidad.</p>
        </div>

        <div className="nosotros-grid">
          <article className="nosotros-card">
            <div className="nosotros-icon">
              <i className="fa-solid fa-bullseye" aria-hidden="true" />
            </div>
            <h3>Misión</h3>
            <p>{nosotros.mision}</p>
          </article>

          <article className="nosotros-card">
            <div className="nosotros-icon">
              <i className="fa-solid fa-eye" aria-hidden="true" />
            </div>
            <h3>Visión</h3>
            <p>{nosotros.vision}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
