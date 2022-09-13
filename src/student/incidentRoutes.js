const router = require('express').Router()
const controller = require('./controller')
const { body, validationResult } = require('express-validator')

router.post(
  '/',
  body('client_id').not().isEmpty().trim().escape().isInt(),
  body('incident_desc').isString().not().isEmpty().trim().escape(),
  body('city').isString().not().isEmpty().trim().escape(),
  body('country').isString().not().isEmpty().trim().escape(),

  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    controller.addIncident(req, res)
  }
)

router.get('/', controller.getIncidents)

module.exports = router
