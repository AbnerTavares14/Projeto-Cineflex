import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, Link} from "react-router-dom"
import "./style.css"

export default function Sessoes(){
    const [sessoes, setSessoes] = useState([]);
    const [filme,setFilme] = useState([]);
    const {idFilme} = useParams();
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((resposta) => {
            setFilme(resposta.data);
            setSessoes(resposta.data.days);
        });
    }, [idFilme]);

    // console.log(idFilme);
    // console.log(sessoes);

    return (
        <>
            <div className="texto">
                <h1>Selecione o horário</h1>
            </div>
            <div className="horarios">
                {sessoes.map(sessao => 
                    <div key={sessao.id} className="sessao">
                        <div className="dias-horarios">
                            <p>{sessao.weekday} - {sessao.date}</p>
                        </div>
                        <div className="sessao-horario">
                        {sessao.showtimes.map(horario => 
                            <Link to={`/assentos/${horario.id}`}>
                                <button key={horario.id}><p>{horario.name}</p></button>
                            </Link>
                        )}
                        </div>
                    </div>
                )}
            </div>
            <div className="rodape">
                <div className="poster">
                    <img src={filme.posterURL} alt="" />
                </div>
                <p>{filme.title}</p>
            </div>
        </>
    )

}