import { IconArrowBackUp, IconCircleNumber3Filled, IconExchangeOff, IconVideoMinus } from "@tabler/icons-react";
import { ElementType } from "react";
import Link from "next/link";

interface ItemMenuProps{
    icone: ElementType
    label: string
    url: string
}

function ItemMenu( props: ItemMenuProps ){
    return(
        <Link href={props.url} className="flex gap-3 px-3 py-3 hover:bg-zinc-900 text-2xl" >
            <props.icone className="text-zinc-200" size={25} />
            <span className="text-zinc-200">{props.label}</span>
        </Link>
    )
}

export default function Menu(){
    return(
        <aside className="w-72 bg-blue-700 h-screen">
            <nav className="flex flex-col gap-2 py-2 px-3">
                <ItemMenu icone={IconVideoMinus}  label="Aulas"         url="/aula" />
                <ItemMenu icone={IconCircleNumber3Filled}  label="Modelos"       url="/modelo" />
                <ItemMenu icone={IconArrowBackUp} label="Treinamentos"  url="/treinamento" />
                <ItemMenu icone={IconExchangeOff} label="Sair"          url="/" />
            </nav>
        </aside>
    )
}