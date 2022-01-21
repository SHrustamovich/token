const FS = require("../lib/fsDeal")

const cours = new  FS('../modal/cours.json')
const task = new FS('../modal/task.json')
const {verifyStudents} = require('../lib/jwt')

// module.exports =(req,res) => {

//     const { aut } = req.headers
//     const student = verifyStudents(aut)
//     console.log(student);
//     const allcours = JSON.parse(cours.read())
//      res.status(200).json(allcours)
// }
module.exports = (req, res) => {
    try {
        const { aut } = req.headers

        const { id } = verifyStudents(aut)

        const allStudents = JSON.parse(cours.read())
        const allTask = JSON.parse(task.read())

        const studentInfo = allStudents.filter(e => e.studentsId == id)
        const taskInfo = allTask.filter(e=>e.coursId ==studentInfo[0].id)
        res.status(200).json({studentInfo:studentInfo,taskInfo:taskInfo}) 
    } catch(e) {
        res.status(500).send({
            message: "Tugadi"
        })
    }
}