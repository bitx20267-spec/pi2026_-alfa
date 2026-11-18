import { Link } from 'react-router-dom';
import './SobreBemVindo.css';

function Sobre() {
    return (
        <div className="info-page">
            <header className="info-header">
                <Link className="info-back-link" to="/">Voltar ao início</Link>
                <Link className="info-brand" to="/">Alfabetiza+</Link>
            </header>

            <main className="info-content" aria-labelledby="sobre-title">
                <h1 id="sobre-title">Sobre o projeto</h1>
                <p>
                    O Alfabetiza+ é um projeto de inclusão digital criado para ajudar pessoas
                    com pouca familiaridade com a tecnologia a usar recursos digitais com mais
                    autonomia e confiança.
                </p>
                <p>
                    Por meio de conteúdos claros, tutoriais passo a passo e atividades, o
                    projeto orienta o uso de celulares, aplicativos, sites e serviços online
                    presentes no dia a dia.
                </p>
                <p>
                    Nosso objetivo é tornar a aprendizagem digital mais acessível, simples e
                    acolhedora para todas as pessoas.
                </p>
            </main>
        </div>
    );
}

export default Sobre;
