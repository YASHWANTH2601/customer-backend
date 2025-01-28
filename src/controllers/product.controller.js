import Product from "../models/productModel.js";

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct
    });
  } catch (error) {
    next(error)
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "All Product data",
      product: products
    });
  } catch (error) {
    next(error);
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({
        message: "Product not found"
      });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true
    });
    if (!updatedProduct) {
      res.status(404).json({
        message: "Product not found"
      });
    } else {
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({
        message: "Product not found"
      });
    } else {
      res.status(200).json({
        message: "Product deleted successfully"
      });
    }
  } catch (error) {
    next(error)
  }
}


export const searchProduct = async (req, res) => {
  try {
    const {
      query
    } = req.query;
    const products = await Product.find({
      $or: [{
          name: {
            $regex: query,
            $options: 'i'
          }
        },
        {
          description: {
            $regex: query,
            $options: 'i'
          }
        },
      ],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}