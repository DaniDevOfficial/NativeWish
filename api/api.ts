import { PokemonDetails, PokemonFetchData } from "@/types/types";


export async function fetchPokemonByNumber(id: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
        const response = await fetch(url);
        const data: PokemonFetchData = await response.json();
        return formatData(data);
    } catch {
        throw new Error('Failed to fetch data with id: ' + id);
    }
}

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatData(data: PokemonFetchData) {

    const formattedData = {
        name: capitalizeFirstLetter(data.name),
        image: data.sprites.front_default,
        weight: data.weight / 10,
        stats: data.stats.map(stat => ({
            name: capitalizeFirstLetter(stat.stat.name),
            statValue: stat.base_stat
        })),
        types: data.types.map(type => capitalizeFirstLetter(type.type.name)),
        cries: data.cries.latest
    };
    return formattedData;
}