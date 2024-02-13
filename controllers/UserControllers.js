import UserModel from "../models/userModel.js";



export const GetAllUsersController = async (req, res) => {
    const users = await UserModel.find({}, { __v: 0, password: 0 })
    if (!users) {
        res.json({
            status: "fail",
            data: "no users found"
        })
    }
    res.json({
        status: "success",
        data: users
    })
}
export const PostNewUserController = async (req, res) => {
    const { userName, email, password } = req.body
    const usedEmail = await UserModel.findOne({ email: email })
    if (!usedEmail) {
        const newUser = await UserModel.create({
            userName,
            email,
            password
        })
        res.json({
            status: "success",
            data: newUser
        })
    }
    else {
        res.json({
            status: "fail",
            data: "email already used"
        })
    }
}

export const UpdateUserController = async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById(id)

    const userName = req.body.userName != "" ? req.body.userName : user.userName
    const email = req.body.email != "" ? req.body.email : user.email
    const password = req.body.password != "" ? req.body.password : user.password

    if (!user) {
        res.json({
            status: "fail",
            data: 'no user found'
        })
    }
    const newUser = await UserModel.findByIdAndUpdate(id,{
        userName,
        email,
        password
    })
    res.json({
        status: "success",
        data: newUser
    })
}


export const DeleteUserController = async (req, res) => {
    const id = req.params.id
    const deleted = await UserModel.findByIdAndDelete(id)
    if (!deleted) {
        res.json({ status: "fail", data: null })
    }

    res.json({
        status: "succes",
        data: deleted
    })

}