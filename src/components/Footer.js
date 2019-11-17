import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tab from './Tab'

export default function Footer({screens, changeScreen, screenIndex}) {
   return (
     <View style={styles.container}>
       {
         screens.map((item, key) => {
           return(
             <Tab
              title = {item}
              changeScreen = {changeScreen}
              index = {key}
              key = {key}
              isSelected = {screenIndex === key}
             ></Tab>
           )
         })
       }     
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 2
  },
});
