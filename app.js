import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import ProductRouter from "./Routes/ProductsRoutes.js"
import connectToDb from "./config/DBconnect.js"
import UserRouter from "./routes/UserRoutes.js"
const app = express()


//connect to db
connectToDb()

//bodyarser
app.use(express.json())
 
 
//Product Routes
app.use("/api/products", ProductRouter)
app.use("/api/users", UserRouter)



app.all('*',(req,res)=>{
    res.json('404 not found')
})

const port = process.env.PORT || 3000
mongoose.connection.once('open',()=>{
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    })
})



