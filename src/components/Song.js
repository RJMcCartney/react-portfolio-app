import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';

export default function Song({ title, artist, link }) {
  console.log(title)
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View style={styles.container}>
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.artist}>Artist: {artist}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 0.5,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
    padding: 8,
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: "teal",
    flex: 1
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    color: 'white'
  },
  artist: {
    fontSize: 12,
    fontWeight: "bold",
    color: 'white'
  },

})