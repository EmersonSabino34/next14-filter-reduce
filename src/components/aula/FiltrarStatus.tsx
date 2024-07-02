import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { IconChevronDown, IconCircleFilled, IconFilter } from "@tabler/icons-react"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import StatusAula from "./AulaStatus"

export interface FiltrarStatusProps{
    filtroMudou?: ( status: string | null ) => void;
}
  
export default function FiltrarStatus( props: FiltrarStatusProps){
    return(
        <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
            <div className="flex items-center gap-2">
                <IconFilter className="text-zic-400" />
                <span>Filtrar Por</span>
                <IconChevronDown className="text-zic-400" />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onClick={ () => props.filtroMudou?.(null)}>
                <div className="flex items-center gap-2 hover:bg-blue-600  p-2">
                    <IconCircleFilled size={16} className=" text-zinc-600" />
                    <span className="text-zinc-400">nenhum</span>
                </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <StatusAula valor="publicado" semEstilo onClick={props.filtroMudou}/>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <StatusAula valor="rascunho" semEstilo  onClick={props.filtroMudou}/>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <StatusAula valor="desativada" semEstilo onClick={props.filtroMudou}/>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}