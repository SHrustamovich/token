const {verifyStudents} = require('../lib/jwt')
module.exports = (req,res,next) => {
    const {aut}  =  req.headers
    if(!aut) {
        return res.status(401).json({
            message:'no token'
        })
    }
    next()
}
