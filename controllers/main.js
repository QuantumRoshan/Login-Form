const customApiError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new customApiError('Email pass not provided', 400)
  }
  const id = new Date().getDate()
  const token = jwt.sign({ id, username }, process.env.Secret_Key, {
    expiresIn: '30d',
  })
  res.status(200).json({ msg: `Welcome ${username}`, token })
}

const dashboard = async (req, res) => {
  const number = Math.floor(Math.random() * 100)
  res.json({
    msg: `Hello ${req.user.username}`,
    secret: `Your number is ${number}`,
  })
}

module.exports = { login, dashboard }
//5:30
