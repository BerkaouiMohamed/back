import express from 'express'
import {
    GetAllProductsController, PostProductController,
    UpdateProductController, DeleteProductController,
    getSingleProductController
} from '../controllers/ProductController.js'


const ProductRouter = express.Router()


ProductRouter.route('/')
.get(GetAllProductsController)
.post(PostProductController)

ProductRouter.route('/:id')
.get(getSingleProductController)
.put(UpdateProductController)
.delete(DeleteProductController)
export default ProductRouter