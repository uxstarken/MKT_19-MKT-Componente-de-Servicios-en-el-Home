import React, { useState, useEffect, useRef } from 'react';
import './Recomendaciones.css';

const Recomendaciones = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    {
      id: 1,
      title: 'Recomendaciones de embalaje',
      desc: 'Aprende a preparar tu encomienda para que llegue segura y en perfecto estado a su destino.',
      btnText: 'Ver recomendaciones'
    },
    {
      id: 2,
      title: 'Carga prohibida',
      desc: 'Revisa qué productos no podemos transportar antes de preparar tu envío.',
      btnText: 'Ver listado'
    },
    {
      id: 3,
      title: 'Condiciones generales de servicio',
      desc: 'Conoce los términos, plazos y responsabilidades que aplican a todos nuestros envíos.',
      btnText: 'Leer condiciones'
    }
  ];

  return (
    <section className="recom-section" ref={sectionRef}>
      {/* Caja verde que contiene las tarjetas y el fondo */}
      <div className="recom-green-box">
        {/* Fondo con las flechas */}
        <div className="recom-bg-image"></div>
        
        {/* Contenido (tarjetas y título) */}
        <div className={`recom-content-container ${isVisible ? 'animate-fade-left' : ''}`}>
          <h2 className="recom-title">Recomendaciones</h2>
          
          <div className="recom-list">
            {items.map((item, idx) => (
              <div 
                key={item.id} 
                className="recom-card"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="recom-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <button className="recom-btn">{item.btnText}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomendaciones;
