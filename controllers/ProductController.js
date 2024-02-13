import ProductModel from "../models/productModel.js"

export const GetAllProductsController = async (req, res) => {
    const products = await ProductModel.find()
    if (!products) {
        res.json({
            status: "fail",
            data: null
        })
    }
    res.json({
        status: "success",
        data: products
    })
}

export const PostProductController = async (req, res) => {
    const product = new ProductModel(req.body)
    const newproduct = await product.save()
    if (!newproduct) {
        res.json({
            status: "fail",
            data: "error"
        })
    }
    res.json({
        status: "success",
        data: newproduct
    })


}
export const UpdateProductController = async (req, res) => {
    try {
        const id = req.params.id
        const prod = await ProductModel.findByIdAndUpdate(id, req.body, { new: true })
        if (!prod) {
            res.status(404).json({
                status: "fail",
                data: "somthing went wrong"
            })
        }

        res.json({
            status: 'succes',
            data: prod
        })
    }
    catch(e){
        res.status(404).json({
            status: 'error',
            data: null,
        })
    }
}

export const DeleteProductController = async (req, res) => {
    const id = req.params.id
    const deleted = await ProductModel.findByIdAndDelete(id, { projection: { _id: false, price: false } })
    if (!deleted) {
        res.json({ status: "fail", data: null })
    }

    res.json({
        status: "succes",
        data: deleted
    })

}
export const getSingleProductController = async (req, res) => {
    const id = req.params.id
    const product = await ProductModel.findById(id)

    if (!product) {
        res.json({ status: 'fail', data: 'product not found' })
    }
    res.json({ status: 'succes', data: product })

}