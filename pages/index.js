import React from 'react'
import '../css/index.css'

// export default ()=> 
// <div>welcome to next.js
//  <div>
//  	<img src='../static/16mV.png' />
//  </div>
// </div>

export default class extends React.Component {
	static async getInitialProps({req}) {
		const userAgent = req?req.headers['user-agent']:navigator.userAgent
		return { userAgent }
	}

	render(){
		return(
			<div>next.js {this.props.userAgent}</div>
		)
	}
}

