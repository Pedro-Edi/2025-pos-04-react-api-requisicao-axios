"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao App de Tarefas</h1>
      <p className="mb-6">Use o menu acima ou clique abaixo para gerenciar suas tarefas.</p>

      <Link
        href="/tarefas"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ver Tarefas
      </Link>
    </div>
  );
}
