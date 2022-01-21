require('dotenv').config()
const {verify ,sign} = require('jsonwebtoken')
const signStudents = (payload) => sign(payload,process.env.SECRET_KEY)
const verifyStudents = (token) => verify(token,process.env.SECRET_KEY)
 
module.exports = {
    signStudents,
    verifyStudents
}