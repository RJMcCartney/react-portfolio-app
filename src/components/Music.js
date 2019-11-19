import React, { Component } from 'react';
import { StyleSheet, View, FlatList, TextInput   } from 'react-native';
import { music } from '../data/MusicData'
import Song from './Song'

class Music extends Component{
    render()    {
      
        return (            
            // <TextInput/>
            <FlatList data = {music} numColumns = "2" renderItem={({item}) =>
            <View style = {styles.container}>
                <Song style = {styles.songs} title={item.title} artist = {item.artist} link = {item.link}/>              
            </View>
            }            
          />
        )
    }
}

//text input to filter songs
//pass all songs to flatlist
//styling

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',   
     },
    songs: {
        borderRadius: 1,
        borderWidth: 1,
        padding: 10

    }
})

export default Music
  

