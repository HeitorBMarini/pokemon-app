# Projeto API Pokémon

Este projeto é uma aplicação Next.js que consulta uma API para obter informações sobre Pokémons, incluindo imagem, ID e nome. Utiliza Tailwind CSS para estilização, e resposividade.


## Tecnologias Utilizadas

[![Tecnologies](https://skillicons.dev/icons?i=react,next,tailwind)](https://skillicons.dev)

## Funcionalidades

- **Listagem de Pokémon**: Exibe uma lista de Pokémon com sua imagem, ID e nome.
- **Design Responsivo**: Graças ao Tailwind CSS, a aplicação é completamente responsiva e se adapta bem a diferentes tamanhos de tela.

## Como Executar

Para rodar este projeto localmente, siga os passos abaixo:

Clone este repositório:

[Link do repositório](https://github.com/danieldeandradelopes/pokemon-api-test)



Clone o repositório e use `npm install` para instalar as dependencias necessárias e `npm rundev` para rodar sua aplicação com a api do projeto.


![Pokemon Demo Demo](demo/Pokemon.gif)

<br/>

Esta `api` é usada , com uma lista desses pokemons:

Apenas com método Get

Lista dos pokemons- `/pokemon`

```json=
[
  {
    "id": 1,
    "name": "Pikachu",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "type": "Electric"
  },
  {
    "id": 2,
    "name": "Rotom",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/479.png",
    "type": "Electric"
  },
  {
    "id": 3,
    "name": "Charmander",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "type": "Fire"
  },
  {
    "id": 4,
    "name": "Minun",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png",
    "type": "Electric"
  },
  {
    "id": 5,
    "name": "Venusaur",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    "type": "Poison"
  },
  {
    "id": 6,
    "name": "Geodude",
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    "type": "Fighting"
  }
]
```