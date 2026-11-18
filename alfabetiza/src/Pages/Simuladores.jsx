import { Link } from 'react-router-dom';
import Help from '../assets/icons/help_24dp.svg';
import './simuladores.css';

function Simuladores() {
    return (
        <div className="simuladores-page">
            <header className="simuladores-header">
                <nav className="simuladores-nav" aria-label="Navegação dos simuladores">
                    <Link className="simuladores-voltar" to="/">Voltar</Link>
                    <h1>SIMULADORES</h1>
                    <img src={Help} alt="Ajuda" />
                </nav>
            </header>

            <main className="simuladores-main">
                <section className="simuladores-cards" aria-label="Escolha um simulador">
                    <a className="simuladores-card" href="/simuladores/simulador_banco2.html">
                        Operação bancária
                    </a>
                    <a className="simuladores-card" href="/simuladores/compra_online.html">
                        Compra na internet
                    </a>
                </section>

                <section className="simuladores-instrucoes" aria-labelledby="simuladores-instrucoes-titulo">
                    <h2 id="simuladores-instrucoes-titulo">Instruções</h2>
                    <ul>
                        <li>
                            Estes simuladores são apenas para aprendizado. Eles funcionam em um ambiente isolado,
                            sem conexão com bancos ou lojas virtuais.
                        </li>
                        <li>Mesmo assim, evite usar seus dados pessoais durante as simulações.</li>
                        <li>Aproveite para praticar sem medo de errar.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Simuladores;
