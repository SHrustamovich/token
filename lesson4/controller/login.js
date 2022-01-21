const {signStudents} = require('../lib/jwt')
const FS = require("../lib/fsDeal")

const students = new FS('../modal/students.json')

module.exports = (req,res) => {
        const {username,password} = req.body
         const allStudents = JSON.parse(students.read())
         const FindStudents = allStudents.find(e =>e.name == username && e.password == password)
         if(!FindStudents) {
            return res.status(401).send({
               message:'Unauthorized'
             })
         }
    
         res.status(200).json({
             token:signStudents({id:FindStudents.id,username:FindStudents.username})
         })
    }
