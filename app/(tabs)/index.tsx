import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/pokedex.png')}
          style={styles.reactLogo}
        />
      }>
        <ThemedText type="title">Welcome to PokéWish</ThemedText>
        <ThemedText>
          This is a Pokédex to look at Pokémons and their details.
        </ThemedText>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="title">Step 1</ThemedText>
          <ThemedText>Click on the Pokémons tab to see the Pokémons.</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="title">Step 2</ThemedText>
          <ThemedText>Look at the random Pokémon.</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="title">Step 3</ThemedText>
          <ThemedText>Click on Next or Shake your phone to view the next one.</ThemedText>
        </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
