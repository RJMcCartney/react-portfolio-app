import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Avatar from './Avatar'

export default function Header({focusAboutPage}) {
  return (
    <TouchableOpacity  onPress = {focusAboutPage}>  
     <View  style={styles.container}>
         
       <Avatar size = {20}/>
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
  headerImage: {
    height: 30,
    width: 30,
    display: "flex",    
    padding: 10
  }  
});
