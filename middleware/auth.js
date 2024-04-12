const customApiError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const authorizationMiddleware = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    throw new customApiError('Authorization header not provided', 401)
  }
  const token = authorizationHeader.split(' ')[1]
  try {
    const verifyToken = jwt.verify(token, process.env.Secret_Key)
    const { id, username } = verifyToken
    req.user = { id, username }
    next()
  } catch (error) {
    throw new customApiError('Not authorized to access this route', 401)
  }
}
module.exports = authorizationMiddleware
