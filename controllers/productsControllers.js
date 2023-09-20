const { ObjectId } = require('mongodb')
const getDb = require('../database/db')

const products_get = async(req, res) => {
  const products = await getDb().products.find().toArray()
  res.send({status: 'OK', data: products})
}

const product_get = async(req, res) => {
  const product = await getDb().products.findOne({_id: new ObjectId(req.params.productId)})
  res.send({status: 'OK', data: product})
}

module.exports = {
  products_get,
  product_get
}