const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
}, { versionKey: false })

const Author = mongoose.model('Author', authorSchema)

module.exports = Author
