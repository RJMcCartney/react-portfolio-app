import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking  } from 'react-native';

export default function Song({title, artist, link}) {
    console.log(title)
    return (
    <TouchableOpacity onPress = { () => Linking.openURL(link)  }>
        <View style = {styles.container}>
            <Text>Title: {title}</Text>
            <Text>Artist: {artist}</Text>
        </View>
     </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
      container: {
          display: 'flex',
      },
      text: {
          textAlign: 'center',
      }

  })