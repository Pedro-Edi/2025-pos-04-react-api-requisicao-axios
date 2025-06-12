"use client";

import { useState } from "react";
import { TarefaInterface } from "@/data";

interface ModalTarefaProps {
	adicionar: (tarefa: TarefaInterface) => void;
	fechar: () => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ adicionar, fechar }) => {
	const [titulo, setTitulo] = useState("");

	function handleAdicionar() {
		if (!titulo.trim()) return;

		const novaTarefa: TarefaInterface = {
			id: Date.now(), // Garante ID único
			title: titulo,
			completed: false,
		};

		adicionar(novaTarefa);
		setTitulo("");
		fechar();
	}

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-4 rounded-lg w-80 shadow-lg">
				<h2 className="text-xl font-bold mb-4">Nova Tarefa</h2>
				<input
					type="text"
					value={titulo}
					onChange={(e) => setTitulo(e.target.value)}
					placeholder="Digite o título da tarefa"
					className="w-full px-3 py-2 border rounded mb-4"
				/>
				<div className="flex justify-end gap-2">
					<button onClick={fechar} className="text-gray-600 px-3 py-1">
						Cancelar
					</button>
					<button
						onClick={handleAdicionar}
						className="bg-blue-600 text-white px-4 py-1 rounded"
					>
						Adicionar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalTarefa;
