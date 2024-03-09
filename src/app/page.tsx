"use client";

import api from "@/services/api"; // Certifique-se de que o caminho está correto
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  type Pokemon = {
    id: number;
    name: string;
    image: string;
  };

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await api.get("/pokemon");
        setPokemon(response.data); // Atualiza o estado com os dados recebidos
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadPokemons();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      
      
      {pokemon.map((poke) => (
        <div
          key={poke.id}
          className="flex flex-col items-center bg-zinc-400 rounded-lg overflow-hidden border-4 border-blue-400 shadow-lg
          hover:bg-yellow-400 hover:opacity-9"
        >
          <Image
            src={poke.image}
            alt={poke.name}
            width={200} 
            height={200} 
            className="object-cover" // Garante que a imagem cubra de forma adequada
          />
          <h3 className="text-white text-xl p-2">{poke.name}</h3>{" "}
         
        </div>
      ))}
    </div>
  );
}
