import { ElementType } from "react"

export interface EstatisticaProps{
    valor: any
    text: string
    iconeCor: string
    icone: ElementType
}
export default function Estatistica(props: EstatisticaProps){
    return(
        <div className="flex p-5 rounded-xl items-center justify-between bg-blue-600">
            <props.icone size={70} stroke={1} className={props.iconeCor ?? 'text-green-600'} />
            <div className="flex flex-col text-white font-bold items-end">
                <span className="text-2xl">{props.valor}</span>
                <span className="text-md">{props.text}</span>
            </div>
        </div>
    )
}