export interface PokemonCries {
        legacy: string

}

export interface PokemonStatFetch {
    base_stat: number;
    stat: {
        name: string
    }
}
export interface PokemonStat {
    statValue: number;
    name: string
}
export interface PokemonType {
    type: {
        name: string
    }
}

interface Sprites {
    front_default: string
}
export interface PokemonFetchData {
    cries: PokemonCries;
    sprites: Sprites
    name: string;
    image: string;
    stats: PokemonStatFetch[];
    types: PokemonType[];
    weight: number;
}

export interface PokemonDetails {
    cries: string;
    name: string;
    image: string;
    stats: PokemonStat[];
    types: string[];
    weight: number;
}