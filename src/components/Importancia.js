import { beneficiosAntes, beneficiosDespues } from "../data/content";

const Importancia = () => {
  return (
    <section id="importancia" className="section importancia">
      <div className="container">
        <div className="section-header">
          <h2>¿Por qué es importante inspeccionar?</h2>
          <p>
            Una inspección profesional te da claridad sobre el estado real de
            la vivienda, antes y después de la compra.
          </p>
        </div>

        <div className="beneficios-grid">
          <div className="beneficios-card">
            <h3>
              <i className="fa-solid fa-key" aria-hidden="true" /> Antes de
              comprar
            </h3>
            <ul>
              {beneficiosAntes.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="beneficios-card">
            <h3>
              <i className="fa-solid fa-house-circle-check" aria-hidden="true" />{" "}
              Después de comprar
            </h3>
            <ul>
              {beneficiosDespues.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importancia;
