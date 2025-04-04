'use client'

import { Card, CardContent } from "./ui/card"

interface cardProductsProps {
    id: number,
    nome: string,
    codigo: number,
    categoria: string,
    preco: number,
    precodecusto: number,
    quantidade: number,
    descricao: string
}

export default function cardProducts(){
    nome,
    codigo,
    preco,
    quantidade,
    }: cardProductsProps){

return (
    <Card>
        <CardContent>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-zinc-800">{nome}</h3>
                    <p className="text-sm text-zinc-500">{codigo}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="font-medium text-zinc-800">{quantidade}</p>
                    <p className="font-medium text-zinc-800">{quantidade}</p>
                </div>
            </div>
        </CardContent>
    </Card>
)}