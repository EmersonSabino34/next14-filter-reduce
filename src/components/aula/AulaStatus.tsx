import { IconCircleFilled } from "@tabler/icons-react";

import Aula from "@/core/model/Aula";

export interface StatusAulaProps{
    valor: Aula['status']
    semEstilo?: boolean
    onClick?: ( status: string ) => void
}
export default function StatusAula(props: StatusAulaProps){
    function cor(){
        switch(props.valor){
            case 'publicado':
                return 'text-green-500';
            case 'rascunho':
                return 'text-yellow-500';
            case 'desativada':
                return 'text-red-500';
        }
    }
    return(
        <div className={`
                flex items-center gap-2 hover:bg-gray-800 p-2
                ${props.semEstilo ? '' : 'w-36 py-2 rounded-xl bg-black text-white'}
            `}
            onClick={ () => props.onClick?.(props.valor)} >
            <IconCircleFilled size={15} className={cor()} />
            <span className={cor()}>{props.valor}</span>
        </div>
    )
}