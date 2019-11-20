import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import ryan from '../../assets/ryan.jpg'

export default function Avatar({ size }) {
  return (
    <View>
      <Image
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
        source={ryan}
      />
    </View>
  );
}

const styles = StyleSheet.create({
});

