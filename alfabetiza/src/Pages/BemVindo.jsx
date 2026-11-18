import { Link } from 'react-router-dom';
import './SobreBemVindo.css';

function BemVindo() {
    return (
        <div className="info-page">
            <header className="info-header">
                <Link className="info-back-link" to="/">Voltar ao início</Link>
                <Link className="info-brand" to="/">Alfabetiza+</Link>
            </header>

            <main className="info-content" aria-labelledby="welcome-title">
                <h1 id="welcome-title">Seja bem-vindo ao Alfabetiza+</h1>
                <p>
                    A tecnologia faz parte de muitas atividades do dia a dia, mas nem sempre é
                    fácil saber por onde começar. O Alfabetiza+ oferece orientação simples e
                    acessível para aprender no seu ritmo.
                </p>
                <p>
                    Explore o curso de Letramento Digital e os tutoriais para aprender a usar
                    ferramentas e serviços digitais com mais segurança e independência.
                </p>
                <p>
                    Estamos aqui para apoiar sua jornada. Vamos evoluir juntos?
                </p>
                <Link className="info-action-link" to="/cursos">Começar pelo curso</Link>
                <Link className="info-secondary-link" to="/tutoriais">Ver tutoriais</Link>
            </main>
        </div>
    );
}

export default BemVindo;
