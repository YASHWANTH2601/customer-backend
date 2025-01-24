import express from "express";
import {
          getAllProduct,
          createProduct,
          deleteProduct,
          updateProduct,
          searchProduct,
          getProductById
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/", searchProduct);

export default router;