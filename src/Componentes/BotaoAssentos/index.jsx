import { useState } from "react"

export default function BotaoAssentos(props) {
    const [selecionado, setSelecionado] = useState("disponivel");
    const { isAvailable, numero, id, selecionados, desselecionados } = props;

    if (isAvailable === true) {
        if (selecionado === "selecionado") {
            return (
                <button key={numero} className={selecionado} onClick={() => { 
                    setSelecionado("disponivel");
                    desselecionados(id, numero);
                }} > <p>{numero}</p></button>
            )
        } else {
            
            return (
                <button key={numero} onClick={() => {
                    selecionados(id, numero);
                    setSelecionado("selecionado")
            }}  className={selecionado}><p>{numero}</p></button>
            )
        }
    } else {
        return (
            <button onClick={() => alert("Este assento não está disponível!")}  key={numero} className="indisponivel"><p>{numero}</p></button>
        )
    }
}