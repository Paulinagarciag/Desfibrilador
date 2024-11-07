import React from 'react';
import './TitleSection.css';
import defibrillatorIcon from '../../assets/desfibrilador.png'; // Asegúrate de que la ruta sea correcta

const TitleSection = () => {
  return (
    <div className="title-section">
      <div className="title-content">
        <img src={defibrillatorIcon} alt="Defibrillator Icon" className="title-icon" />
        <div>
          <h3 className="subtitle">Capacitación en el uso</h3>
          <h2 className="main-title">DESFIBRILADOR</h2>
          <h2 className="secondary-title">Mindray BeneHeart D3</h2>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;

