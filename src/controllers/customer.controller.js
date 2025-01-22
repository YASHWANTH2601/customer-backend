import Customer from "../models/customerModel.js";

// Get all customers
async function getAllCustomers(req, res, next) {
  try {
    const customers = await Customer.find();
    return res.status(200).json(customers);
  } catch (err) {
    next(err); // Pass error to middleware
  }
}
// Create a new customer
async function createCustomer(req, res, next) {
  try {
    const customer = await Customer.create(req.body);
    return res
      .status(201)
      .json({ customer, message: "Customer created successfully" });
  } catch (err) {
    next(err);
  }
}

// Get a customer by ID
async function getCustomerById(req, res, next) {
  try {
    // Find customer by ID
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    return res.status(200).json(customer);
  } catch (err) {
    next(err);
  }
}

// Update a customer
async function updateCustomer(req, res, next) {
  try {
    // Find customer by ID and update
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    return res.status(200).json(customer);
  } catch (err) {
    next(err);
  }
}

// Delete a customer
async function deleteCustomer(req, res, next) {
  try {
    // Find customer by ID and delete
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    return res.status(204).json({ message: "Customer deleted successfully" });
  } catch (err) {
    next(err);
  }
}

// Export controller functions
export {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
