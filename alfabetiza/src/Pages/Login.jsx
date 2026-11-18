import { useState } from 'react';
import './Style2.css';
import { Link, useNavigate } from 'react-router-dom';
import { DEMO_EMAIL, DEMO_PASSWORD, DEMO_PROFILE_KEY } from './demoAuth';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');

    function entrar(event) {
        event.preventDefault();

        if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
            setError('E-mail ou senha incorretos. Confira os dados da conta de demonstração.');
            return;
        }

        try {
            const armazenamentoAtual = remember ? localStorage : sessionStorage;
            const outroArmazenamento = remember ? sessionStorage : localStorage;
            armazenamentoAtual.setItem(DEMO_PROFILE_KEY, DEMO_EMAIL);
            outroArmazenamento.removeItem(DEMO_PROFILE_KEY);
        } catch {
            setError('Não foi possível salvar o perfil neste navegador. Verifique as configurações de armazenamento.');
            return;
        }

        navigate('/', { replace: true });
    }

    return (
        <main className="login-page">
            <section className="login-card" aria-labelledby="login-title">
                <header className="login-header">
                    <h1 className="logo">Alfabetiza+</h1>
                    <h2 className="login-title" id="login-title">
                        Bem-vindo ao curso de Letramento Digital
                    </h2>
                    <p className="login-description">
                        Entre com o perfil demonstrativo para acessar a página inicial.
                    </p>
                </header>

                <div className="demo-credentials">
                    <strong>Acesso de demonstração</strong>
                    <span>E-mail: {DEMO_EMAIL}</span>
                    <span>Senha: {DEMO_PASSWORD}</span>
                    <button
                        type="button"
                        className="demo-fill-button"
                        onClick={() => {
                            setEmail(DEMO_EMAIL);
                            setPassword(DEMO_PASSWORD);
                            setError('');
                        }}
                    >
                        Preencher os dados
                    </button>
                </div>

                <form className="login-form" onSubmit={entrar}>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="aluno@demo.com"
                            autoComplete="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                                setError('');
                            }}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Digite sua senha"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                                setError('');
                            }}
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={remember}
                                onChange={(event) => setRemember(event.target.checked)}
                            />
                            <span>Lembrar de mim</span>
                        </label>
                    </div>

                    {error && <p className="login-error" role="alert">{error}</p>}
                    <button type="submit" className="login-button">Entrar</button>
                </form>

                <footer className="login-footer">
                    <p>
                        Ainda não tem uma conta? <Link to="/cadastro" className="register-link">Cadastre-se</Link>
                    </p>
                    <p>Ou se preferir, entre sem cadastro.</p>
                    <Link id="continue-btn" to="/">Continuar</Link>
                </footer>
            </section>
        </main>
    );
}

export default Login;
