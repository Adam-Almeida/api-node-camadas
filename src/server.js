import express from 'express'
import { UserController } from './controllers/user.controller'
const port = 3333

const app = express()

const userController = new UserController;

app.post("/users", userController.handle)

app.listen(port, () => console.log(`Server is running on port ${port}`))