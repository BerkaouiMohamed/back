import express from 'express'
import { DeleteUserController, GetAllUsersController, PostNewUserController, UpdateUserController } from '../controllers/UserControllers.js'



const UserRouter=express.Router()

UserRouter.get('/',GetAllUsersController)

UserRouter.post('/',PostNewUserController)
UserRouter.put('/:id',UpdateUserController)

UserRouter.delete('/:id',DeleteUserController)
export default UserRouter