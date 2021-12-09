import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Auth } from './src/app'

export default function App() {
  return (
    <View style={styles.container}>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
