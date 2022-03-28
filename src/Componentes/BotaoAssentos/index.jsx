import { useState } from "react"

export default function BotaoAssentos(props) {
    const [selecionado, setSelecionado] = useState("disponivel");
    const { isAvailable, numero, id, selecionados, desselecionados } = props;

    if (isAvailable === true) {
        if (selecionado === "selecionado") {
            return (
                <button key={id} className={selecionado} onClick={() => { 
                    setSelecionado("disponivel");
                    desselecionados(numero);
                }} > <p>{numero}</p></button>
            )
        } else {
            
            return (
                <button onClick={() => {
                    selecionados(numero);
                    setSelecionado("selecionado")
            }}  className={selecionado}><p>{numero}</p></button>
            )
        }
    } else {
        return (
            <button onClick={() => alert("Este assento não está disponível!")}  key={id} className="indisponivel"><p>{numero}</p></button>
        )
    }
}