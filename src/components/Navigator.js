import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import Music from './Music'
import { screens } from '../data/NavigationData'


class Navigator extends Component {
	constructor(props){
		super(props)
		this.state = {
			screenIndex: 2
		}
		this.changeScreen = this.changeScreen.bind(this)
		this.focusAboutPage = this.focusAboutPage.bind(this)
	}
	changeScreen (index)	{
		this.setState({
			screenIndex: index
		})
	}
	focusAboutPage () {
		this.setState({
			screenIndex: 0
		})
	}	
	
	render () {		
		return (
			<View style={styles.container}>
	      <Header focusAboutPage = {this.focusAboutPage}/>
	    <Music/>
		  <Footer 
		  	screens={screens} test={'test'}
			changeScreen = {this.changeScreen}
			screenIndex = {this.state.screenIndex}/>
		  </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'red',
  },
})

export default Navigator
