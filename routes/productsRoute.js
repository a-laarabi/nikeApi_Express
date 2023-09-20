const {Router} = require('express')
const {products_get, product_get} = require('../controllers/productsControllers')

const router = Router()

router.get('/', products_get)
router.get('/:productId', product_get)

module.exports = router