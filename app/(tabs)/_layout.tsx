import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="pokemon-go" size={24} color="black" />),
        }}
      />
      <Tabs.Screen
        name="pokewish"
        options={{
          title: 'PokéWish',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="catching-pokemon" size={24} color="black" />),
        }}
      />
    </Tabs>
  );
}
