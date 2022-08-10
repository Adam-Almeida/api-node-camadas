import express from 'express'
import { UserController } from './controllers/user.controller.js'
const port = 3333

const app = express()
app.use(express.json())

const userController = new UserController;

app.post("/users", userController.handle)

app.listen(port, () => console.log(`Server is running on port ${port}`))