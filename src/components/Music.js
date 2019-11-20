import React, { Component } from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { music } from '../data/MusicData'
import Song from './Song'

class Music extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="Search..." />
                <FlatList
                    data={music}
                    numColumns="1"
                    renderItem={({ item }) => (
                        <Song style={styles.songs} title={item.title} artist={item.artist} link={item.link} />
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 1
    },
    songs: {
        borderRadius: 1,
        borderWidth: 1,
        padding: 10

    },
    textInput: {
        margin: 10,
        borderRadius: 10,
        borderColor: 'black'
    }
})

export default Music


