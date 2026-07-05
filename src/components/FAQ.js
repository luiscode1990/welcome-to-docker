import { useState } from "react";
import { faqItems } from "../data/content";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <h2>Preguntas frecuentes</h2>
          <p>
            Resolvemos las dudas más comunes sobre nuestro servicio de
            inspección residencial.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <article
              key={item.pregunta}
              className={`faq-item${openIndex === index ? " open" : ""}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                {item.pregunta}
                <i
                  className={`fa-solid fa-chevron-${openIndex === index ? "up" : "down"}`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.respuesta}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
