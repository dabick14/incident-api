const router = require('express').Router()
const controller = require('./controller')

router.get('/', controller.getStudents)
router.get('/:id', controller.getStudentsById)
router.post('/', controller.addStudent)

module.exports = router
