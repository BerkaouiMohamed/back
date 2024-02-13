import { Schema, model } from "mongoose"


const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    }


})
const ProductModel = new model('product', ProductSchema)
export default ProductModel