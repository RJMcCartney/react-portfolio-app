import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Avatar from './Avatar'

export default function Header({ focusAboutPage }) {
  return (
    <TouchableOpacity onPress={focusAboutPage}>
      <View style={styles.container}>
        <View style={styles.tabTitle}>
          <Text>Tab Title Here</Text>
        </View>

        <View style={styles.avatarStyling}>
          <Avatar size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 40,
    shadowRadius: 2,
    //shadowOffset: {height: 30, width: 30},w
    shadowOpacity: 50,
    borderBottomWidth: 2
  },
  avatarStyling: {
    position: "absolute",
    right: 5,
    margin: 10
  },
  tabTitle: {
    flex: 1,
    alignContent: 'center'
  }

});
