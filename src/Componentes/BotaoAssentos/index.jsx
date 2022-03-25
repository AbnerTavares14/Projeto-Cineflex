import { useState } from "react"

export default function BotaoAssentos(props) {
    const [selecionado, setSelecionado] = useState("disponivel");
    const { isAvailable, numero, id } = props;

    if (isAvailable === true) {
        if (selecionado === "disponivel") {
            return (
                <button onClick={() => setSelecionado("disponivel")} key={id} className={selecionado}> <p>{numero}</p></button>
            )
        } else {
            return (
                <button onClick={() => setSelecionado("selecionado")} key={id} className={selecionado}><p>{numero}</p></button>
            )
        }
    } else {
        return (
            <button key={id} className="indisponivel"><p>{numero}</p></button>
        )
    }
}