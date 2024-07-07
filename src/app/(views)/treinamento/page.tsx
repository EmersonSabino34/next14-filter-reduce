'use client'

import Layout from "@/components/templates/Layout";
import { useState } from "react";


export default function Treinamento(){
    const [nome, setNome] = useState("")
    const [sexo, setSexo] = useState("")

    // produto, categoria console, jogo

    const hadleValidationClient = () => {

        if(!nome || !sexo) {
            alert("Todos os campos sao obrigatorios")
        }else {
            alert("Sucesso !")
        }
    }

    return(
        <Layout>
            <h1 className="mb-3 text-3xl text-center">Treinamento</h1>

           <div className="flex flex-col gap-5">

                <form className="bg-blue-500 rounded-lg">
                    
                    <div className="flex justify-center bg-green-800 p-3 rounded-t-lg">
                        <h3 className="text-white mb-3 font-bold text-2xl">Cadastro Cliente</h3>
                    </div>

                    <div className="flex flex-col gap-3 p-5">
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            className="p-2 rounded-md" 
                            value={nome} onChange={ e => setNome(e.target.value) }
                        />
                        <select className="p-2 rounded-md" value={sexo} onChange={ e => setSexo(e.target.value) } >
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                        </select>

                        <button 
                            className="bg-blue-600 p-2 text-white rounded-md hover:bg-blue-700"
                            onClick={hadleValidationClient}
                        >Cadastrar</button>
                        <button 
                            className="bg-red-600 p-2 text-white rounded-md"
                        >Cancelar</button>
                    </div>

                </form>
    
                <form className="flex flex-col gap-5 bg-zinc-900 rounded-t-lg">

                    <div className="bg-zinc-700 flex justify-center rounded-lg p-3 rounded-t-lg">
                        <h3 className="text-white mb-3 font-bold text-2xl">Cadastro Produto</h3>
                    </div>

                    <div className="flex flex-col gap-3 p-5">
                        <input 
                            type="text" 
                            placeholder="Produto"
                            className="p-2 rounded-md"
                        />
                        <select className="p-2 rounded-md">
                            <option value="Console">Console</option>
                            <option value="Jogos">Jogos</option>
                        </select>
                        <button
                            className="bg-blue-600 p-2 text-white rounded-md"
                        >Cadastrar</button>
                        <button
                            className="bg-red-600 p-2 text-white rounded-md"
                        >Cancelar</button>
                    </div>
                </form>

                
           </div>
        </Layout>
    )
}