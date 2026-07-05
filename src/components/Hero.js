const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-eyebrow">Inspección residencial profesional</p>
        <h1>Tu hogar merece certeza antes de comprar</h1>
        <p className="hero-subtitle">
          Evaluamos más de 100 puntos en instalaciones, acabados y carpintería
          para que tomes la mejor decisión con tranquilidad.
        </p>
        <a href="#contacto" className="btn btn-primary btn-lg">
          Agendar inspección
        </a>
      </div>
    </section>
  );
};

export default Hero;
