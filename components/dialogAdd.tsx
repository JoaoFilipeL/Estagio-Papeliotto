

export default function DialogAdd({isOpen, setIsOpen: DialogAddOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Adicionar Produto</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Nome do Produto" className="w-full border border-gray-300 rounded-md p-2" />
                    <input type="number" placeholder="Código do Produto" className="w-full border border-gray-300 rounded-md p-2" />
                    <input type="text" placeholder="Categoria" className="w-full border border-gray-300 rounded-md p-2" />
                    <input type="number" placeholder="Preço" className="w-full border border-gray-300 rounded-md p-2" />
                    <input type="number" placeholder="Preço de Custo" className="w-full border border-gray-300 rounded-md p-2" />
                    <input type="number" placeholder="Quantidade" className="w-full border border-gray-300 rounded-md p-2" />
                    <textarea placeholder="Descrição do Produto" className="w-full border border-gray-300 rounded-md p-2"></textarea>
                </form>
                <div className="flex justify-end mt-4">
                    <button onClick={() => DialogAddOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Cancelar</button>
                    <button onClick={() => DialogAddOpen(false)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Adicionar</button>
                </div>
            </div>
        </div>
    )
}