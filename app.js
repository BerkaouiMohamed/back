import express from "express"
import mongoose, { Schema, model } from "mongoose"
import "dotenv/config"

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

const URI = process.env.DB_URI || "mongodb://localhost:27017/ecommerce"
const Product = new model('product', ProductSchema)
mongoose.connect(URI).then(() => {
    console.log("connected to db");
     
}).catch((e) => console.log(e))
const app = express()
app.use(express.json())



app.get('/api/products', (req, res) => {
    Product.find().then((data) => res.json(data))
})


app.post('/api/products', (req, res) => {
    const product = new Product(req.body)
    product.save().then((product) => {
        res.json({ product })
    })

})
// [options.new=false]
app.put('/api/products/:id', async (req, res) => {
    try {
        const id = req.params.id
        const prod = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (!prod) {
            res.status(404).json({ msg: "element not found" })
        }
        res.json(prod)
    }
    catch (e) {
        res.status(404).json({ msg: "invalid id" })
    }
})
app.delete('/api/products/:id', async (req, res) => {
    const id = req.params.id
    const deleted= await Product.findByIdAndDelete(id,{projection:{_id:false,price:false}})
   res.json({msg:deleted})


})


const port = process.env.PORT|| 3000

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})