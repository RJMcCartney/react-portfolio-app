import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Avatar from './Avatar'

export default function Header({ focusAboutPage, titles }) {
  console.log(titles)
  return (

    <View style={styles.container}>
        <Text style={styles.tabTitle}>{titles}</Text>
        <TouchableOpacity 
        onPress={focusAboutPage}
        style = {styles.avatarStyling}> 
                <Avatar size={20} />
      </TouchableOpacity>
    </View>

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
    textAlign: 'center',
    justifyContent: 'center'
  }

});
