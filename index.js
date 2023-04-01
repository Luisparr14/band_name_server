const express = require('express')
const logger = require('morgan')
const path = require('path')
const { version } = require('./package.json')
const app = express()

const publicPath = path.resolve(__dirname, 'public')

app.use(express.static(publicPath))

app.use(logger('dev'))

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/version', (req, res) => {
  res.send(version)
})

app.listen(3000, (err) => {
  if (err) return console.log('something bad happened', err)
  console.log('Example app listening on port 3000!')
})
