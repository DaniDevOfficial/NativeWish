interface PokemonAbility {
    name: string;
}

interface PokemonCries {
    legacy: string;
}

interface PokemonStat {
    baseStat: number;
    name: string;
}

interface PokemonType {
    name: string;
}

interface PokemonDetails {
    abilities: PokemonAbility[];
    cries: PokemonCries;
    name: string;
    image: string;
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
}