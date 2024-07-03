const { Router } = require('express'); 
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/product/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})

const upload = multer({ storage: storage })
const router = Router(); 

const { addNewProduct,getAllProducts,getProductDetailsById,deleteProductById} = require('../controllers/product');

router.post('/products',upload.single('productImage'), addNewProduct)
router.get('/products', getAllProducts)
router.delete('/products/:id', deleteProductById)
router.get('/products/:id', getProductDetailsById)
  module.exports = router