import { useState } from "react";

type Item = {
  id: number;          
  nome: string;
  codigo: number;
  categoria: string;
  preco: number;
  precodescusto: number;
  quantidade: number;
  descricao: string;
};

export const [lista, setlista] = useState<Item[]>([]);  


export function adicionarProduto(item: Item) {
  setlista([...lista, item]);  
}


export function buscarProduto(id: number) {
  return lista.find((item) => item.id === id);
}


export function atualizarProduto(id: number, item: Item) {
  setlista(
    lista.map((prod) =>
      prod.id === id ? { ...prod, ...item } : prod 
    )
  );
}


export function removerProduto(id: number) {
  setlista(lista.filter((item) => item.id !== id));  
}
