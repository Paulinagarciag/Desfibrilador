import '../styles/MaterialCStyles.css';
import React, { useEffect } from 'react';

const MaterialC = () => {
  useEffect(() => {
    document.title = 'Material Complementario';
  }, []);

  return (
    <div className='container'>
      <h1>Material Complementario</h1>

      <div className="pdf-container">
        <h2>Ficha Técnica</h2>
        <a
          href="../../public/Desfibrilador-Mindray-Beneheart-D3.pdf" // Ruta al PDF en la carpeta assets
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../public/icons8-documentation-67.png" // Ruta de la imagen en la carpeta assets
            alt="Ficha Técnica"
            style={{ width: '200px', margin: '20px' }} // Ajusta el tamaño según sea necesario
          />
        </a>
        <p>Ver Ficha Técnica</p>
      </div>

      <div className="pdf-container">
        <h2>Página Oficial</h2>
        <a
          href="https://www.mindray.com/co/products/defibrillation-system/beneheart-d3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../public/icons8-diseños-de-grupo-24.png" // Ruta de la imagen en la carpeta assets
            alt="Página Oficial"
            style={{ width: '200px', margin: '20px' }} // Ajusta el tamaño según sea necesario
          />
        </a>
        <p>Visitar Página Oficial</p>
      </div>

      <div className="video-container">
        <h2>Videos</h2>

        <div className="video">
          <h3>Desfibrilador Mindray Beneheart D3</h3>
          <video width="560" height="315" controls>
            <source src="../../public/desfibriladorvideo.mp4" type="video/mp4" /> {/* Ruta al video local */}
          </video>
        </div>

        <div className="video">
          <h3> Autocomprobación Desfibrilador Mindray Beneheart D3</h3>
          <video width="560" height="315" controls>
            <source src="../../public/Autocomprobacion.mp4" type="video/mp4" /> {/* Ruta al segundo video local */}
          </video>
        </div>
      </div>
    </div>
  );
};

export default MaterialC;
