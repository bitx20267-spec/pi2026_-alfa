import './Curso.css';
import { Link } from 'react-router-dom';
import Book from '../assets/icons/book_fechado_24dp.svg';
import { tutoriais } from './conteudos';

function ListaTutoriais() {
    return (
        <div className="list-page">
            <header className="list-header tutorial-header">
                <Link to="/" className="back-link">Voltar</Link>
                <div>
                    <h1>Tutoriais</h1>
                    <p>Situações do dia a dia</p>
                </div>
            </header>
            <main className="list-main">
                <section className="lesson-list" aria-label="Tutoriais">
                    {tutoriais.map((tutorial, index) => (
                        <Link className="lesson-link" to={`/tutoriais/${index + 1}`} key={`${tutorial}-${index}`}>
                            <img src={Book} alt="" />
                            <span>{tutorial}</span>
                        </Link>
                    ))}
                </section>
            </main>
            <footer className="list-footer">- &copy; Bit-X. Todos os direitos reservados -</footer>
        </div>
    );
}

export default ListaTutoriais;
