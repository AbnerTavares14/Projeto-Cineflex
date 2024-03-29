import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css"
import BotaoAssentos from "../BotaoAssentos";

export default function Assentos() {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    let [nome, setNome] = useState("");
    let [cpf, setCPF] = useState("");
    const [selecionados, setSelecionados] = useState([]);
    const [sessao, setSessao] = useState([]);
    const [filme, setFilme] = useState([]);
    const [hora, setHora] = useState("");
    const [array, setArray] = useState([]);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((resposta) => {
            setAssentos(resposta.data.seats);
            setSessao(resposta.data.day);
            setFilme(resposta.data.movie);
            setHora(resposta.data.name);
            console.log(resposta.data);
        })
    }, [idSessao]);

    function selecionaAssento(id, numero) {
        setArray([...array, numero]);
        setSelecionados([...selecionados, id]);
    }

    function desselecionaAssento(id, numero) {
        const newArray = array.filter( arr => arr !== numero);
        const newSelecionados = selecionados.filter( selecionado => selecionado !== id);
        setArray([...newArray]);
        setSelecionados([...newSelecionados]);
    }

    let navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/sucesso", {
            state: { ids: array, nome: nome, cpf: cpf, hora: hora, data: sessao.date, filme: filme.title }
        });
    }

    return (
        <>
            <div className="texto"><h1>Selecione o(s) assento(s)</h1></div>
            <div className="assentos">
                {assentos.map(assento => {
                    return (
                        <BotaoAssentos key={assento.name} desselecionados={(id, numero) => desselecionaAssento(id, numero)} selecionados={(id, numero) => selecionaAssento(id, numero)} isAvailable={assento.isAvailable} id={assento.id} numero={assento.name} />
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
                <input type="text" value={nome} onChange={(e) => {
                    setNome(e.target.value)
                }
                } placeholder="Digite seu nome..." />
                <h2>CPF do comprador:</h2>
                <input type="text" value={cpf} onChange={(e) => setCPF(e.target.value)} placeholder="Digite seu CPF..." />
            </section>


            <footer>
                <button onClick={() => {
                    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", { ids: selecionados, name: nome, cpf: cpf });
                    promise.then((resposta) => {
                        console.log(resposta);

                        handleRedirect();
                    })
                    promise.catch((err) => {
                        console.log(err);
                    })
                }
                }><p>Reservar assento(s)</p></button>
            </footer>

            <div className="rodape-assentos">
                <div className="poster-filme">
                    <img src={filme.posterURL} alt="" />
                </div>
                <div className="texto-filme">
                    <p>{filme.title}</p>
                    <p>{sessao.weekday} - {hora}</p>
                </div>
            </div>
        </>
    )
}

