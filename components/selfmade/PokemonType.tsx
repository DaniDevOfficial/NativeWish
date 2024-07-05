import { useState, useEffect } from "react";
import { View, Text } from "react-native";

type TypeColors = {
    [key: string]: string;
};

// ChatGPT for the colors
const TypeColors: TypeColors = {
    Bug: '#A8B820',
    Dark: '#705848',
    Dragon: '#7038F8',
    Electric: '#F8D030',
    Fairy: '#EE99AC',
    Fighting: '#C03028',
    Fire: '#F08030',
    Flying: '#A890F0',
    Ghost: '#705898',
    Grass: '#78C850',
    Ground: '#E0C068',
    Ice: '#98D8D8',
    Normal: '#A8A878',
    Poison: '#A040A0',
    Psychic: '#F85888',
    Rock: '#B8A038',
    Steel: '#B8B8D0',
    Water: '#6890F0'
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
                color: TextColor, // Some styling with ChatGPT cuz i am a web dev
                backgroundColor: color,
                padding: 8,
                margin: 4,
                borderRadius: 12, 
                textAlign: 'center', 
                fontWeight: 'bold', 
                overflow: 'hidden' 
            }}>
                {type}
            </Text>
        </View>
    );
}
