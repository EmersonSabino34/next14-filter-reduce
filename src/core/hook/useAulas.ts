import Aula from "@/core/model/Aula"
import { useEffect, useState } from "react"
import listaDeAulas from "../data/listaDeAulas"

export default function useAulas(){
    const [aulas, setAulas] = useState<Aula[]>(listaDeAulas)
    const [duracaoTotal, setDuracaoTotal] = useState<number>(0)

    function filtrarAulas(status?: string | null){
        
        const aulasFiltradas: Aula[] = listaDeAulas.filter( 
            (aula) => aula.status === status || !status 
        )
        setAulas(aulasFiltradas)
        
    }

    useEffect(() => {
        calcularDuracaoTotal(aulas)
    }, [aulas])

    function calcularDuracaoTotal(aulas: Aula[]){
        const duracaoTotal = aulas.reduce((acc, aula) => acc + aula.duracao, 0)
        setDuracaoTotal(duracaoTotal)
    }

    return{
        aulas,
        duracaoTotal,
        filtrarAulas
    }
}