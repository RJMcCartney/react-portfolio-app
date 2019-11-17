import React, { Component } from 'react';
import { StyleSheet, View  } from 'react-native';
import { music } from '../data/MusicData'
import Song from './Song'

class Music extends Component{
    render()    {
        const firstSong = music[0]
        return (
            <View style = {styles.container}>
                <Song style = {styles.songs} title={firstSong.title} artist = {firstSong.artist} link = {firstSong.link}/>
              
            </View>            
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
  

