import { useLocation, Link } from "react-router-dom";
import "./style.css";

export default function Sucesso() {
    const navigate = useLocation();
    console.log(navigate);
    const { data, ids, cpf, nome, hora, filme } = navigate.state;
    return (
        <>
            <div className="sucesso">
                <h1>Pedido feito com sucesso!</h1>
            </div>

            <div className="texto-sucesso">
                <h1>Filme e sessão</h1>
                <p>{filme}</p>
                <p>{data} {hora}</p>
            </div>

            <div className="texto-sucesso">
                <h1>Ingressos</h1>
                {ids.map((id) =>
                    <p key={id}>Assento {id}</p>
                )}
            </div>

            <div className="texto-sucesso">
                <h1>Comprador</h1>
                <p>Nome: {nome}</p>
                <p>CPF: {cpf}</p>
            </div>

            <div className="botao">
                <Link to="/">
                    <button><p>Voltar pra Home</p></button>
                </Link>
            </div>
        </>
    )
}