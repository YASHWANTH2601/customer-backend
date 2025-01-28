import Product from "../models/productModel.js";
import Quotation from "../model/quotationsModel.js";



export const createQuotation = async (req, res) => {
          try {
                    const {
                              customerId,
                              products
                    } = req.body;

                    let totalPrice = 0;
                    for (const item of products) {
                              const product = await Product.findById(item.productId);
                              if (!product || typeof product.price !== 'number') {
                                        return res.status(404).json({
                                                  error: `Product with ID ${item.productId} not found or has an invalid price`
                                        });
                              }
                              totalPrice += product.price * item.quantity;
                    }

                    const quotation = await Quotation.create({
                              customerId,
                              products,
                              totalPrice,
                    });

                    res.status(201).json(quotation);
          } catch (error) {
                    res.status(500).json({
                              error: error.message
                    });
                    console.log(error)
          }
};


export const getQuotation = async (req, res) => {
          try {
                    const {
                              customerId
                    } = req.params;

                    const quotations = await Quotation.find({
                              customerId
                    }).populate('products.productId');
                    res.json(quotations);
          } catch (error) {
                    res.status(500).json({
                              error: error.message
                    });
          }
};

export const getAllQuotation = async (req, res) => {
          try {
                    const quotations = await Quotation.find({});
                    res.json(quotations);
          } catch (error) {
                    res.status(500).json({
                              error: error.message
                    });
          }
};

export const updateQuotation = async (req, res) => {
          try {
                    const {id} = req.params;
                    const {products} = req.body;
                    const product = await Quotation.findById(id);
                    console.log(product)
                    if (!product) {
                              return res.status(404).json({
                                        error: 'Product not found'
                              });
                    }

                    const updatedProduct = await Quotation.findByIdAndUpdate(id, req.body, {new: true});

                    res.json(updatedProduct);

          } catch(err){
                    res.status(500).json({
                              error: error.message
                    });
          }
}

export const deleteQuotation = async (req, res) => {
          try {
                    const {
                              id
                    } = req.params;
                    const quotation = await Quotation.findByIdAndDelete(id);

                    if (!quotation) {
                              return res.status(404).json({
                                        error: 'Quotation not found'
                              });
                    }

                    res.json({
                              message: 'Quotation deleted successfully'
                    });
          } catch (error) {
                    res.status(500).json({
                              error: error.message
                    });
          }
};