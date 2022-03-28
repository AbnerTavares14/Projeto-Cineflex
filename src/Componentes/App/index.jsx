import Header from "./../Header"
import Filmes from "../Filmes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sessoes from "../Sessoes"
import Assentos from "../Assentos"
import Sucesso from "../Sucesso"


export default function App() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<Assentos />} />
                <Route path="/sucesso" element={<Sucesso/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}