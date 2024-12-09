const customer = require('./../models/customerModel');

// Signup
exports.Signup = async (req, res) => {
  try {
    await customer.create(req.body);

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(404).json({
      status: 'signup fail',
      message: error,
      abc: req.body,
    });
  }
};

// Login
exports.Login = async (req, res) => {
  try {
    const customerLogin = await customer.findOne(req.body);
    
    if (customerLogin) {
      res.status(200).json({
        status: 'success',
        data: customerLogin._id,
      });
    } else {
      res.status(404).json({
        status: 'login fail',
      });
    }
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// Get all camera belong to the customer
// and all information belong to those cameras
exports.getAllCustomerCam = async (req, res) => {
  try {
    const cus = await customer.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: cus.ipcams,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// customer add new camera
exports.addNewCustomerCam = async (req, res) => {
  try {
    await customer.updateOne(
      { _id: req.params.id },
      { $push: { ipcams: req.body } },
    );
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// delete customer cam
exports.deleteCustomerCam = async (req, res) => {
  try {
    await customer.updateOne(
      { _id: req.params.id },
      { $pull: { ipcams: req.body } },
    );
    console.log(req.body);
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};