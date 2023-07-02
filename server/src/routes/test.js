const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).send('Hello there')
})

router.post('/', (req, res) => {
  const { name, age } = req.body
  res.status(200).json({
    message: `Hello ${name}, you are ${age} years old.`
  })
})

module.exports = router
