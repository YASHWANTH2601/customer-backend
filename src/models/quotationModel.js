import mongoose from 'mongoose';

const QuotationSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  totalPrice: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const  Quotation = mongoose.model('Quotation', QuotationSchema);
export default Quotation;
