import { useState, useEffect } from "react";
import { View, Text } from "react-native";

type TypeColors = {
    [key: string]: string;
};

const TypeColors: TypeColors = {
    bug: '#A8B820',
    dark: '#705848',
    dragon: '#7038F8',
    electric: '#F8D030',
    fairy: '#EE99AC',
    fighting: '#C03028',
    fire: '#F08030',
    flying: '#A890F0',
    ghost: '#705898',
    grass: '#78C850',
    ground: '#E0C068',
    ice: '#98D8D8',
    normal: '#A8A878',
    poison: '#A040A0',
    psychic: '#F85888',
    rock: '#B8A038',
    steel: '#B8B8D0',
    water: '#6890F0'
};

export function PokemonType({ type }: { type: string }) {
    const [TextColor, setTextColor] = useState('#FFFFFF');

    function getTypeColor(type: string): string {
        return TypeColors[type] || '#A8A878';
    }

    const color = getTypeColor(type);

    return (
        <View>
            <Text style={{
                color: TextColor,
                backgroundColor: color,
                padding: 8,
                margin: 4,
                borderRadius: 12, 
                textAlign: 'center', 
                fontWeight: 'bold', 
                overflow: 'hidden' // Ensure text does not spill over
            }}>
                {type}
            </Text>
        </View>
    );
}
