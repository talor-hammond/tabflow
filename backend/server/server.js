const express = require('express')
const server = express()

server.use('/api/workflows', require('./routes/workflows'))

server.get('/', (req, res) => {
  res.send('Testing')
})

module.exports = server