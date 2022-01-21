const express = require('express')
const app =express()
const cors = require('cors')

const verifyMiddlewear = require('./middlewear/verifyMid')

const loginCont = require('./controller/login')
const studentCourses =require('./controller/studentCourses')

app.use(cors())
app.use(express.json())


app.post('/login',loginCont)

app.get('/studentCourses',verifyMiddlewear,studentCourses)
app.listen(8000,console.log('create server!!!'))