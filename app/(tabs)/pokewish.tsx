import { StyleSheet, View, Image} from 'react-native';

import { useEffect, useState } from 'react';
import { fetchPokemonByNumber } from '@/api/api';
import { PokemonDetails } from '@/types/types';
import { PokemonType } from '@/components/selfmade/PokemonType';
import { ThemedText } from '@/components/ThemedText';
import { PokeImage } from '@/components/selfmade/PokeImage';

export default function TabTwoScreen() {
  const [PokeData, setPokeData] = useState<PokemonDetails | null>(null);
  async function fetching() {
    const randInt = Math.floor(Math.random() * 898) + 1;
    const pokeDataTMP: PokemonDetails = await fetchPokemonByNumber(randInt)
    console.log(randInt)
    console.log(pokeDataTMP)
    setPokeData(pokeDataTMP)
  }
  useEffect(() => {
    fetching()
  }, [])
   
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemedText type="title">{PokeData?.name}</ThemedText>
        <PokeImage imageUri={PokeData?.image} soundUri={PokeData?.cries} />
        {PokeData?.types.map((type, index) => (
          <PokemonType key={index} type={type} />
        ))}
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
  pokeImage: { 
    width: 200, 
    height: 200 
  },
});
