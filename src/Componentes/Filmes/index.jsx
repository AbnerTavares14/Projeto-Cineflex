import axios from "axios";
import { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom"

export default function Filmes() {
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promessa.then((resposta) => {
            // let {id, title, posterURL:imagem, overview:descricao, releaseDate} = resposta.data;
            setFilmes(resposta.data);
        })
    }, []);

    return (
        <>
            <div className="texto">
                <h1>Selecionar o filme</h1>
            </div>
            <main>
                <div className="filmes">
                    {filmes.map(filme =>
                        <Link key={filme.id} to={`/sessoes/${filme.id}`} >
                            <div className="filme">
                                <img src={filme.posterURL} alt="" />
                            </div>
                        </Link>
                    )}
                </div>
            </main>
        </>
    )
}