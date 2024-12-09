const express = require('express');
const customerController = require('./../controllers/customerController');

const router = express.Router();

router.route('/signup').post(customerController.Signup);
router.route('/login').post(customerController.Login);

router
  .route('/:id/cam')
  .get(customerController.getAllCustomerCam)
  .post(customerController.addNewCustomerCam)
  .delete(customerController.deleteCustomerCam);

module.exports = router;
