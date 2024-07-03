'use client'

import { IconClock, IconVideo } from "@tabler/icons-react";
import Layout from "@/components/templates/Layout";

import Duracao from "@/core/utils/Duracao";
import ListaAulas from "@/components/aula/ListaAulas";
import FiltrarStatus from "@/components/aula/FiltrarStatus";
import Estatistica from "@/components/aula/Estatistica";
import Titulo from "@/components/templates/Titulo";
import useAulas from "@/core/hook/useAulas";

export default function Aula(){
    const { aulas, duracaoTotal, filtrarAulas } = useAulas() 
    return(
        <Layout>
            {/* 2 items Titulo e Filtro Status */}
            <div className="flex items-center justify-around">
                <Titulo
                    principal="Acervo de cursos"
                    secundario="Lista de aulas"
                    icone={IconVideo}
                />
                <FiltrarStatus filtroMudou={filtrarAulas} />
            </div>

            {/* 2 items Estatistica e Listas Aulas */}
            <div className="flex flex-col">
                <div className="grid grid-cols-4 gap-3 mt-5">
                    <Estatistica 
                        icone={IconClock} 
                        iconeCor="text-white"
                        valor={Duracao.formatar(duracaoTotal)}
                        text="Duração total" 
                    />
                </div>
                <ListaAulas aulas={aulas} />
            </div>
        </Layout>
    )
}