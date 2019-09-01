import React from 'react'
import './lock.css'
import LockService from '../../services/lockService'

export default class Lock extends React.PureComponent {

	state = {}

	componentDidMount() {
		LockService.onLockChange(opened => {
			this.setState({ opened })
		})
	}

	render() {
		return (
			<div className={ `lock ${ this.state.opened ? 'opened' : '' }` }>
				<div className="wrapper">
					<img 
						className="figure"
						src={ require('../../static/images/lock-opened.png') }
					/>
					<img 
						className="closer"
						src={ require('../../static/images/lock-closer-fr.png') }
					/>
				</div>
				<img 
					className="qr"
					src={ require('../../static/images/lock-qr.svg') }
				/>
			</div>
		)
	}
}