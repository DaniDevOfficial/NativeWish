export interface PokemonCries {
    latest: string

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
    name: string | null;
    image: string;
    stats: PokemonStatFetch[];
    types: PokemonType[];
    weight: number;
}

export interface PokemonDetails {
    cries: string | null;
    name: string;
    image: string | null;
    stats: PokemonStat[];
    types: string[];
    weight: number;
}