import Layout from "@/components/templates/Layout";
import './modelo.css'

export default function Modelo(){
    return(
        <Layout>
            <h1>Modelo</h1>

            <form>
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="produto" />
            </form>

            <br />
                <button>Cadastrar</button>
                <button>Cancelar</button>

            <br /> <br /> <hr />

            
        </Layout>
    )
}