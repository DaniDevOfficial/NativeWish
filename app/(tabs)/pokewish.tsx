import { StyleSheet, View, TouchableOpacity, Vibration } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchPokemonByNumber } from '@/api/api';
import { PokemonDetails } from '@/types/types';
import { PokemonType } from '@/components/selfmade/PokemonType';
import { ThemedText } from '@/components/ThemedText';
import { PokeImage } from '@/components/selfmade/PokeImage';
import { PokeStat } from '@/components/selfmade/PokeStats';
import { Accelerometer } from 'expo-sensors';

export default function TabTwoScreen() {
  const [PokeData, setPokeData] = useState<PokemonDetails | null>(null);

  async function fetching() {
    Vibration.vibrate(69); // nice  
    const randInt = Math.floor(Math.random() * 898) + 1;
    const pokeDataTMP: PokemonDetails = await fetchPokemonByNumber(randInt);
    console.log(randInt);
    console.log(pokeDataTMP);
    setPokeData(pokeDataTMP);
  }

  useEffect(() => {
    fetching();
    Accelerometer.setUpdateInterval(100); 
    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      if (Math.abs(x) > 1.5 || Math.abs(y) > 1.5 || Math.abs(z) > 1.5) {
        fetching();
      }
    });
  
    return () => subscription && subscription.remove();
  }, []);



  
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        {PokeData?.name}
      </ThemedText>
      <PokeImage imageUri={PokeData?.image} soundUri={PokeData?.cries} />
      <ThemedText type="subtitle" style={styles.subtitle}>
        Weight: {PokeData?.weight} kg
      </ThemedText>
      <View style={styles.typesContainer}>
        {PokeData?.types.map((type, index) => (
          <PokemonType key={index} type={type} />
        ))}
      </View>
      <View style={styles.statsContainer}>
        {PokeData?.stats.map((stat, index) => (
          <PokeStat key={index} name={stat.name} value={stat.statValue} />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={fetching}>
        <ThemedText>Next</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginVertical: 8,
    fontSize: 16,
  },
  typesContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  statsContainer: {
    marginTop: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#76a9ea',
    borderRadius: 8,
  },
});
