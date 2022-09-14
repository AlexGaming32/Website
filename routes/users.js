const express = require("express")
const router = express.Router()



router.get('/', (req, res) => {
    res.send('User List')
})





router.route('/:id')
.get((req, res) => {
    let userid = req.params.id
    res.send(`User get with id ${userid}`)
})
.put((req, res) => {
    let userid = req.params.id
    res.send(`User put with id ${userid}`)
})
.delete((req, res) => {
    let userid = req.params.id
    res.send(`User delete with id ${userid}`)
})


router.param('id', (req, res, next, id) => {
    next()
})



module.exports = router