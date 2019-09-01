import io from 'socket.io-client'

const onLockChange = callback => {
	const socket = io('http://localhost:3000/locks?id=0')
	socket.on('switch', callback)
}

export default { onLockChange }