import React from 'react'
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
			<div>
				{ this.state.opened ? 'opened' : 'closed' }
			</div>
		)
	}
}