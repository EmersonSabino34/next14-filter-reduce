import Aula from "@/core/model/Aula";
import Duracao from "@/core/utils/Duracao";
import StatusAula from "./AulaStatus";

interface LinhaAulaProps{
    aula: Aula
}

interface ListaAulaProps{
    aulas: Aula[]
}

function LinhaAula(props : LinhaAulaProps){
    return(
        <div className="flex p-3 items-center justify-between rounded-lg bg-blue-700 text-white">
           <div className="flex flex-col">
                <span className="text-2xl font-bold">{props.aula.id} - {props.aula.nome}</span>
                <span className="text-white">{props.aula.curso}</span>
           </div>
           <div className="flex items-center gap-10 text-1xl font-extrabold">
                <StatusAula valor={props.aula.status} />
                <div> {Duracao.formatar(props.aula.duracao)} </div>
           </div>
        </div>
    )
}

export default function ListaAulas(props : ListaAulaProps){
    return(
        <div className="mt-3">
            <div className="flex flex-col gap-3">
                {props.aulas.map(function (aula: Aula) {
                    return <LinhaAula key={aula.id} aula={aula} />
                })}
            </div>
        </div>
    )
}