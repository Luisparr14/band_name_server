const socket = (io) => {
  io.on('connection', (client) => {
    console.log(`Client ${client.id} connected...`)
  
    client.on('message', (payload) => {
      console.log(`Payload: ${payload}`)
      io.emit('message', 'Hello from server')
    })

    client.on('emit-message', (payload) => {
      client.broadcast.emit('new-message', payload)
    })
  
    client.on('disconnect', () => {
      console.log('Client disconnected...')
    })
  })
}

module.exports = socket