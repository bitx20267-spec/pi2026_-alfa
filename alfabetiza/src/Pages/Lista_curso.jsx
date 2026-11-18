import './Curso.css';
import { Link } from 'react-router-dom';
import Book from '../assets/icons/book_fechado_24dp.svg';
import { aulas } from './conteudos';

function ListaCurso() {
    return (
        <div className="list-page">
            <header className="list-header">
                <Link to="/" className="back-link">Voltar</Link>
                <h1>Curso Letramento Digital</h1>
            </header>
            <main className="list-main">
                <section className="lesson-list" aria-label="Aulas do curso">
                    {aulas.map((aula, index) => (
                        <Link className="lesson-link" to={`/cursos/aula/${index + 1}`} key={aula}>
                            <img src={Book} alt="" />
                            <span>{aula}</span>
                        </Link>
                    ))}
                </section>
            </main>
            <footer className="list-footer">- &copy; Bit-X. Todos os direitos reservados -</footer>
        </div>
    );
}

export default ListaCurso;
