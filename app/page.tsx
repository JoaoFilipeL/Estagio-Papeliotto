'use client'

import DialogAdd from "@/components/dialogAdd";
import { Button } from "@/components/ui/button"
import { PackagePlus } from "lucide-react";
import { useState } from "react";



export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-row justify-between items-center p-16">
            <h1 className="font-bold text-3xl">Produtos</h1>
            <DialogAdd isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Button onClick={() => setIsOpen(true)} className="bg-white text-black houver:bg-gray-300 transition-all duration-300 cursor-pointer"><PackagePlus/>Adicionar Produto</Button>
        </div>
    )
}
