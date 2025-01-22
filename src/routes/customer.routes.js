import express from "express";
const router = express.Router();
import {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customer.controller.js";

// Routes for customers
router.get("/", getAllCustomers);
router.post("/", createCustomer);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
