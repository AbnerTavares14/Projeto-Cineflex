import Header from "./../Header"
import Filmes from "../Filmes"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Filmes />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}