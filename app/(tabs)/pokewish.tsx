import { StyleSheet, View } from 'react-native';

import { useEffect, useState } from 'react';
import { fetchPokemonByNumber } from '@/api/api';
import { PokemonDetails } from '@/types/types';
import { PokemonType } from '@/components/selfmade/PokemonType';
import { ThemedText } from '@/components/ThemedText';

export default function TabTwoScreen() {
  const [PokeData, setPokeData] = useState<PokemonDetails | null>(null);
  useEffect(() => {
    async function fetching() {
      const randInt = Math.floor(Math.random() * 898) + 1;
      const pokeDataTMP: PokemonDetails = await fetchPokemonByNumber(randInt)
      console.log(randInt)
      console.log(pokeDataTMP)
      setPokeData(pokeDataTMP)
    }
    fetching()

  }, [])
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PokemonType type="bug" />
        <PokemonType type="dark" />
        <PokemonType type="dragon" />
        <PokemonType type="electric" />
        <PokemonType type="fairy" />
        <PokemonType type="fighting" />
        <PokemonType type="fire" />
        <PokemonType type="flying" />
        <PokemonType type="ghost" />
        <PokemonType type="grass" />
        <PokemonType type="ground" />
        <PokemonType type="ice" />
        <PokemonType type="normal" />
        <PokemonType type="poison" />
        <PokemonType type="psychic" />
        <PokemonType type="rock" />
        <PokemonType type="steel" />
        <PokemonType type="water" />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
