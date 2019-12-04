import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import Music from './Music'
import About from './About'
import { screens } from '../data/NavigationData'


class Navigator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			screenIndex: 1
		}
		this.changeScreen = this.changeScreen.bind(this)
		this.focusAboutPage = this.focusAboutPage.bind(this)
	}
	changeScreen(index) {
		this.setState({
			screenIndex: index
		})
	}
	focusAboutPage() {
		this.setState({
			screenIndex: 0
		})
	}

	selectScreen(){
		const {selection} = this.state	
		if(selection === 0)
		{
			return <About />
		}
		if(selection === 1)	
		{
			return <Music/>
		}
		if(selection ===2)
		{
			//return <CV>			
		}
		if(selection ===3)
		{
			//return contact
		}
		
	}


	render() {
		const {screenIndex} = this.state
		return (
			<View style={styles.container}>
				<Header 
					focusAboutPage={this.focusAboutPage} 
					titles = {screens[screenIndex]}
				/>
				{this.selectScreen()}
				<Footer
					screens={screens}
					changeScreen={this.changeScreen}
					screenIndex={this.state.screenIndex} />
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
