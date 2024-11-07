import '../styles/FuncionamientoStyles.css';
import React, { useEffect } from 'react';

const Funcionamiento = () => {
  useEffect(() => {
    document.title = 'Funcionamiento';
  }, []);

  return (
      <><div className="educaplay-container">
      <h2>A continuación, explora el diagrama de flujo del funcionamiento del modo Manual y DEA del equipo</h2>
      <iframe
        allow="fullscreen; autoplay;"
        allowFullScreen
        width="795"
        height="690"
        frameBorder="0"
        src="https://es.educaplay.com/recursos-educativos/21196839-modo_manual_y_dea_desfibrilador_mindray_beneheart_d3.html"
      ></iframe>
    </div><div className="educaplay-container">
        <h2>A continuación, explora el diagrama de flujo del funcionamiento del modo Marcapasos y Monitor del equipo</h2>
        <iframe
          allow="fullscreen; autoplay;"
          allowFullScreen
          width="795"
          height="690"
          frameBorder="0"
          src="https://es.educaplay.com/recursos-educativos/21197604-modo_marcapasos_y_monitor_desfibrilador_mindray_beneheart_d3.html"
        ></iframe>
      </div></>
      
  );
};

export default Funcionamiento;
