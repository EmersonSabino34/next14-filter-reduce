import Layout from "@/components/templates/Layout";
import './modelo.css'

export default function Modelo(){
    return(
        <Layout>
            <h1>Modelo</h1>

            <div className="card">
                <form>
                    <input type="text" placeholder="nome" />
                    <input type="text" placeholder="produto" />
                </form>
                
                <button>Cadastrar</button>
                <button>Cancelar</button>
            </div>

            



        </Layout>
    )
}