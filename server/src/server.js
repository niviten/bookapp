const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const port = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const testRouter = require(path.join(__dirname, 'routes', 'test.js'))
app.use('/test', testRouter)

async function connectToDB() {
  await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database connected'))
    .catch((err) => console.error(err))
}
connectToDB()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
