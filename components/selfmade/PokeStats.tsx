import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type PokeStatProps = {
    name: string;
    value: number;
};
const statColors: { [key: string]: string } = {
    Hp: '#FF5959',
    Attack: '#F5AC78',
    Defense: '#FAE078',
    'Special-attack': '#9DB7F5',
    'Special-defense': '#A7DB8D',
    Speed: '#FA92B2',
};
export function PokeStat({ name, value }: PokeStatProps) {
    const barWidth = (value / 255) * 100;
    const color = statColors[name] || '#76a9ea';

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}: {value}</Text>
            <View style={styles.barContainer}>
                <View style={[styles.bar, { width: `${barWidth}%`, backgroundColor: color }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
    },
    text: {
        fontSize: 16,
        marginBottom: 4,
    },
    barContainer: {
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        overflow: 'hidden',
    },
    bar: {
        height: '100%',
        backgroundColor: '#76a9ea',
        borderRadius: 4,
    },
});
