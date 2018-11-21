import React from 'react'
import Head from 'next/head'
import '../css/index.css'

import Common from './common'

export default ()=> 
// <div>welcome to next.js
 // <div>
 // 	<img src='../static/16mV.png' />
 // </div>
// </div>
<div>
 	<Head>
      <title>首页</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Head>
      <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
    </Head>
    <p>Hello world!</p>
</div>

// export default class extends React.Component {
// 	static async getInitialProps({req}) {
// 		const userAgent = req?req.headers['user-agent']:navigator.userAgent
// 		return { userAgent }
// 	}

// 	render(){
// 		return(
// 			<div>
// 				next.js {this.props.userAgent}
// 			</div>
// 		)
// 	}
// }

