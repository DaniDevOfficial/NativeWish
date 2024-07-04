import { PokemonDetails, PokemonFetchData } from "@/types/types";


export async function fetchPokemonByNumber(id: number){
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        try {
            const response = await fetch(url);
            const data: PokemonFetchData = await response.json();
            return formatData(data);
        } catch {
            throw new Error('Failed to fetch data with id: ' + id);
        }
}

function formatData(data: PokemonFetchData){
    const formattedData = {
        name: data.name,
        image: data.sprites.front_default,
        weight: data.weight,
        stats: data.stats.map(stat => ({
            name: stat.stat.name,
            statValue: stat.base_stat
        })),
        types: data.types.map(type => type.type.name),
        cries: data.cries.legacy
    }
    return formattedData;
}