const express = require('express')
const app = express()

app.set('view engine', 'ejs')



app.get('/', logger, (req, res) => {
    res.render('index', {text: 'schöne'})
})



const userrouter = require('./routes/users')
app.use('/users', userrouter)



function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)