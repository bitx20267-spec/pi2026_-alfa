import { Link } from 'react-router-dom';
import './Style2.css';

function Cadastro() {
    return (
        <main className="cadastro-page">
            <section className="cadastro-card" aria-labelledby="cadastro-title">
                <header className="cadastro-header">
                    <h1 className="logo">Alfabetiza+</h1>
                    <h2 className="cadastro-title" id="cadastro-title">Crie sua conta</h2>
                    <p className="cadastro-description">
                        Preencha seus dados para começar o curso de Letramento Digital.
                    </p>
                </header>

                <form className="cadastro-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome completo</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="cadastro-details">
                        <div className="form-group">
                            <label htmlFor="idade">Idade</label>
                            <input
                                type="number"
                                id="idade"
                                name="idade"
                                placeholder="Digite sua idade"
                                min="1"
                                max="120"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cidade">Cidade</label>
                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                placeholder="Digite sua cidade"
                                autoComplete="address-level2"
                                required
                            />
                        </div>
                        <div className="form-group cadastro-state">
                            <label htmlFor="estado">Estado</label>
                            <select className="estado" name="estado" id="estado" defaultValue="" required>
                                <option value="" disabled>Selecione aqui</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Crie uma senha"
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirmar senha</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Digite a senha novamente"
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <button type="submit" className="cadastro-button">Criar conta</button>
                </form>

                <footer className="cadastro-footer">
                    <p>
                        Já possui uma conta? <Link to="/login" className="login-link">Entrar</Link>
                    </p>
                </footer>
            </section>
        </main>
    );
}

export default Cadastro;
