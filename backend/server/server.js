const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('Testing')
})

module.exports = server