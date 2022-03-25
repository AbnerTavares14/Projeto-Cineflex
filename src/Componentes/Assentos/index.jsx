import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css"
import BotaoAssentos from "../BotaoAssentos";

export default function Assentos() {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    // const [selecionado, setSelecionado] = useState("disponivel");
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => {
            setAssentos(resposta.data.seats);
            console.log(resposta.data);
        })
    }, [idSessao]);

    console.log(assentos);

    return (
        <>
            <div className="texto"><h1>Selecione o(s) assento(s)</h1></div>
            <div className="assentos">
                {assentos.map(assento => {
                    return(
                        <BotaoAssentos isAvailable={assento.isAvailable} numero={assento.name} id={assento.id} />
                    )
                })
                }
            </div>
            <div className="legenda">
                <div className="legenda-selecionado">
                    <div className="cor-selecionado"></div>
                    <p>Selecionado</p>
                </div>
                <div className="legenda-disponivel">
                    <div className="cor-disponivel"></div>
                    <p>Disponível</p>
                </div>
                <div className="legenda-indisponivel">
                    <div className="cor-indisponivel"></div>
                    <p>Indisponível</p>
                </div>
            </div>

            <section className="dados">
                <h2>Nome do comprador:</h2>
                <input type="textarea" placeholder="Digite seu nome..." />
                <h2>CPF do comprador:</h2>
                <input type="textarea" placeholder="Digite seu CPF..." />
            </section>


            <footer>
                <Link to={`/sucesso`}>
                    <button><p>Reservar assento(s)</p></button>
                </Link>
            </footer>
        </>
    )
}

