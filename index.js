const express = require('express');
const productsRouter = require('./routes/productsRoute')

const app = express()
const PORT = 3000

app.use('/products', productsRouter)

app.listen(PORT, () => {
  console.log('App listen to: ', PORT)
})