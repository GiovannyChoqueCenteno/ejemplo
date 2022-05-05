
const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors())
app.use(express.json())
app.use('/post' , require('./routes/post.route'))

app.listen(4000, () => {
    console.log("Escuchando puerto 3000")
})