'use client'

import Layout from "@/components/templates/Layout";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react";


export default function Treinamento(){
    const [nome, setNome] = useState("")

    const validar1 = () => {

        if(!nome) {
            alert("Digite o nome")
        }else {
            alert("Sucesso !")
        }
        
    }

    return(
        <Layout>
            <h1>Treinamento</h1>

            <div className="flex gap-3">
                <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Framework</Label>
                        <Select>
                            <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
                </Card>

                 {/*  Modificado */}
                <Card className="w-[250px]">
                <CardHeader>
                    <CardTitle>Cadastro Cliente</CardTitle>
                    <CardDescription>Cadastro pessoa fisica</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Nome Completo</Label>

                        <Input 
                            id="name" 
                            placeholder="Nome Completo" 
                            value={nome} 
                            onChange={ e => setNome(e.target.value) }
                        /> <span> {nome} </span>

                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Sexo</Label>

                        {/*  Trabalho de casa  
                            <select value={sexo} onChange={ (e: any) => setSexo(e.target.value) }>
                                <option value="">f</option>
                                <option value="">m</option>
                            </select>
                        */}

                        <Select>
                            <SelectTrigger>
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="Feminino">Feminino</SelectItem>
                                <SelectItem value="Masculino">Masculino</SelectItem>
                            </SelectContent>
                        </Select>

                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancelar</Button>
                    <Button onClick={validar1} > Salvar</Button>
                </CardFooter>
                </Card>

                {/*  Trabalho de casa  */}
                <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Framework</Label>
                        <Select>
                            <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
                </Card>

            </div>
        </Layout>
    )
}