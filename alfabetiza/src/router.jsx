import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Cadastro from './Pages/Cadastro';
import Home from './Pages/Home';
import Login from './Pages/Login';
import BemVindo from './Pages/BemVindo';
import Sobre from './Pages/Sobre';
import Lista_curso from './Pages/Lista_curso';
import Lista_tutoriais from './Pages/Lista_tutoriais';
import CursoLetramento from './Pages/CursoLetramento';
import Tutoriais from './Pages/Tutoriais';
import Simuladores from './Pages/Simuladores';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/bem-vindo" element={<BemVindo />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cursos" element={<Lista_curso />} />
                <Route path="/cursos/aula/:aulaId" element={<CursoLetramento />} />
                <Route path="/tutoriais" element={<Lista_tutoriais />} />
                <Route path="/tutoriais/:tutorialId" element={<Tutoriais />} />
                <Route path="/Lista_curso" element={<Navigate to="/cursos" replace />} />
                <Route path="/Lista_tutoriais" element={<Navigate to="/tutoriais" replace />} />
                <Route path="/simuladores" element={<Simuladores />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;