import express from 'express'
const port = 3333

const app = express()

app.get("/users", (req, res) => {
    //chamar controlador que vai salvar o usuário
})

app.listen(port, () => console.log(`Server is running on port ${port}`))