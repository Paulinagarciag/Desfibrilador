import '../styles/CuestionarioStyles.css';
import { useEffect } from 'react';

const Cuestionario = () => {
    useEffect(() => {
        document.title = 'Cuestionario';
    }, []);
    
    return (
        <div className='Container1'>
            <h1>Cuestionario sobre el desfibrilador Mindray Benehearth D3</h1>
            <iframe 
                allow="fullscreen; autoplay;" 
                allowFullScreen 
                width="795" 
                height="690" 
                frameBorder="0" 
                src="https://es.educaplay.com/recursos-educativos/21198209-desafio_de_desfibrilacion_mindray_beneheart_d3.html"
            ></iframe>
        </div>
    );
};

export default Cuestionario;
