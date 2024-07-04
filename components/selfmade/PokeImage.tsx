import React, { useState, useEffect } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

type PokeImageProps = {
  imageUri: string | undefined;
  soundUri: string | undefined;
};

export function PokeImage({ imageUri, soundUri = "https://firebasestorage.googleapis.com/v0/b/funnysoundswish.appspot.com/o/Sounds%2FMySounds%2Fel-primo-made-with-Voicemod-technology.mp3?alt=media&token=3f1a182d-1a41-4e2c-b430-40dd054ed54c"}: PokeImageProps) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound(uri: string) {
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    
    <TouchableOpacity onPress={() => playSound(soundUri)}>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
});
