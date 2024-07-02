import { ElementType } from "react";

interface TituloProps {
    principal: string;
    secundario?: string;
    icone: ElementType
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex gap-3 ">
            <props.icone size={55} stroke={3} />

            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">{props.principal}</h1>
                <h2 className="text-md text-zinc-400">{props.secundario}</h2>
            </div>

        </div>
    );
}