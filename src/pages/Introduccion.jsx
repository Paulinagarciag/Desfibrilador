import '../styles/IntroduccionStyles.css';
import { useEffect } from 'react';

const Introducción = () => {
    useEffect(() => {
        document.title = 'Introducción';
    }, []);

    return (
        <div className="home">
            {/* Sección de introducción */}
            <div className="intro-section">
                <p>
                BeneHeart D3 es un desfibrilador compacto, duradero y ligero que integra monitorización, desfibrilación manual, DEA y marcapasos. Se trata de un desfibrilador-monitor bifásico y profesional apropiado para su uso en hospitales y clínicas de todo el mundo.
                </p>
            </div>

            {/* Sección de Características */}
            <div className="features-section">
                <h2 className="features-heading">Características Principales</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3 className="feature-title">Diseño compacto 4 en 1 </h3>
                        <p className="feature-description">
                         Integra: monitorización, desfibrilación manual, DEA y marcapasos.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Pantalla grande y nítida</h3>
                        <p className="feature-description">
                        3 formas de onda que garantiza una óptima y fácil visualización de ECG y SPO2.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Confiabilidad en cualquier momento</h3>
                        <p className="feature-description">
                        BeneHeart D3, que realiza autopruebas y carga informes de pruebas automáticamente cada día y semana a la estación central, es un recurso de confianza en para salvar vidas en cualquier momento. La batería confiable que admite 200 descargas a 360J y 6 horas de monitoreo continuo también garantiza su disponibilidad.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Fácil de usar</h3>
                        <p className="feature-description">
                        Siguiendo pasos intuitivos 1-2-3 (1.Seleccionar energía; 2.cargar; 3.descargar), la desfibrilación manual simple mantiene la atención del médico en su paciente y le ahorra tiempo 
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Gran capacidad de alimentación con batería</h3>
                        <p className="feature-description">
                        permite la monitorización continua y de larga duración y descargas durante el transporte sin una fuente de alimentación externa.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Reanimación rapida</h3>
                        <p className="feature-description">
                        · Encendido en 2 segundos
                        · Carga hasta 200J en 3 segundos
                        · Recuperación del ECG en solo 2.5 segundos
                            Max dosis energia 360 J

                        </p>
                    </div>
        </div>
        </div>
            {/* Sección para la actividad de Educaplay */}
            <div className="EducaplayActivity">
                <h2 className="educaplay-heading"> A continuación, explora el mapa interactivo donde podrás ver las partes generales del equipo.</h2>
                <iframe
                    src="https://es.educaplay.com/recursos-educativos/20506111-introduccion_partes_desfibrilador.html"
                    width="100%"
                    height="600"
                    style={{ border: 'none' }}
                    title="Actividad de Capacitación"
                    allow="fullscreen; autoplay;"
                    allowFullScreen
                />
            </div>
            <div className="EducaplayActivity">
                <h2 className="educaplay-heading"> A continuación, explora el mapa interactivo donde podrás ver el Área 1 del equipo.</h2>
                <iframe
                    src="https://es.educaplay.com/recursos-educativos/21174274-area_1_partes_desfibrilador_mindray_benehearth_d3.html"
                    width="100%"
                    height="600"
                    style={{ border: 'none' }}
                    title="Actividad de Capacitación"
                    allow="fullscreen; autoplay;"
                    allowFullScreen
                />
            </div>
            <div className="EducaplayActivity">
                <h2 className="educaplay-heading"> A continuación, explora el mapa interactivo donde podrás ver el Área 2 del equipo.</h2>
                <iframe
                    src="https://es.educaplay.com/recursos-educativos/21178193-area_3.html"
                    width="100%"
                    height="600"
                    style={{ border: 'none' }}
                    title="Actividad de Capacitación"
                    allow="fullscreen; autoplay;"
                    allowFullScreen
                />
            </div>
            <div className="EducaplayActivity">
                <h2 className="educaplay-heading"> A continuación, explora el mapa interactivo donde podrás ver las partes de las palas del equipo.</h2>
                <iframe
                    src="https://es.educaplay.com/recursos-educativos/21188597-palas_desfibrilador_mindray_beneheart_d3.html"
                    width="100%"
                    height="600"
                    style={{ border: 'none' }}
                    title="Actividad de Capacitación"
                    allow="fullscreen; autoplay;"
                    allowFullScreen
                />
            </div>
        </div>

    );
}

export default Introducción;
