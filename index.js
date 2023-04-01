const express = require('express')
const logger = require('morgan')
const path = require('path')
const { version } = require('./package.json')
const app = express()

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

app.listen(app.get('port'), (err) => {
  if (err) return console.log('something bad happened', err)
  console.log(`Example app listening on port ${app.get('port')}`)
})
