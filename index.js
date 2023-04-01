const express = require('express')
const logger = require('morgan')
const path = require('path')
const { version } = require('./package.json')
const app = express()

// Create nodejs http server
const server = require('http').createServer(app)

// Create socket.io server
const io = require('socket.io')(server)

io.on('connection', (client) => {
  console.log(`Client ${client.id} connected...`)

  client.on('message', (payload) => {
    console.log(`Payload: ${payload}`)
    io.emit('message', 'Hello from server')
  })

  client.on('disconnect', () => {
    console.log('Client disconnected...')
  })
})

app.set('port', process.env.PORT || 3000)

const publicPath = path.resolve(__dirname, 'public')

app.use(express.static(publicPath))

app.use(logger('dev'))

app.get('/health', (_, res) => {
  res.send('OK')
})

app.get('/version', (_, res) => {
  res.send(version)
})

server.listen(app.get('port'), (err) => {
  if (err) return console.log('something bad happened', err)
  console.log(`Example app listening on port ${app.get('port')}`)
})
