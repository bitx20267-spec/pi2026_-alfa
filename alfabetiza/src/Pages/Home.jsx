import './App.css';
import { useState } from 'react';
import Avatar from '../assets/icons/account_circle_24dp.svg';
import Help from '../assets/icons/help_24dp.svg';
import { Link } from 'react-router-dom';
import { DEMO_PROFILE_KEY, getDemoProfile } from './demoAuth';

function Home() {
    const [usuario, setUsuario] = useState(() => getDemoProfile());

    function sair() {
        try {
            localStorage.removeItem(DEMO_PROFILE_KEY);
            sessionStorage.removeItem(DEMO_PROFILE_KEY);
            setUsuario(null);
        } catch {
            alert('Não foi possível encerrar o perfil neste navegador.');
        }
    }

    return (
        <div className="home-page">
            <header className="home-header">
                <section className="home-account">
                    {usuario ? (
                        <div className="avatar">
                            <img className="person" src={Avatar} alt="" />
                            <span className="home-user-name">Olá, {usuario.name}</span>
                            <span className="home-user-email">{usuario.email}</span>
                            <button className="home-logout" type="button" onClick={sair}>Sair</button>
                        </div>
                    ) : (
                        <div className="avatar">
                            <img className="person" src={Avatar} alt="" />
                            <Link to="/login">Fazer Login</Link>
                        </div>
                    )}

                    <div className="help">
                        <img src={Help} alt="" />
                        <span>Ajuda</span>
                    </div>
                </section>
                <nav aria-label="Navegação principal">
                    <ul className="home-menu">
                        <li><Link to="/bem-vindo">Boas vindas</Link></li>
                        <li>Dúvidas e recomendações</li>
                        <li><Link to="/sobre">Quem somos</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="home-main">
                <section>
                    <p className="home-title">Escolha por onde começar</p>
                    <div className="home-options">
                        <Link to="/cursos"><span className="opcoes">Curso Letramento Digital</span></Link>
                        <Link to="/tutoriais"><span className="opcoes">TUTORIAIS</span></Link>
                       <Link to="/simuladores"><span className="opcoes">SIMULADORES</span></Link>
                        <span className="opcoes unavailable" aria-disabled="true">MINHAS ATIVIDADES</span>
                    </div>
                    <div className="home-actions">
                        <button type="button" disabled>&#10084; Favoritos</button>
                        <button type="button" disabled>Configuração</button>
                    </div>
                </section>

                <section className="recent-activities">
                    <h2>Atividades recentes</h2>
                </section>
            </main>
        </div>
    );
}

export default Home;
