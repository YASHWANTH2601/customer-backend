import express from 'express'
import { createQuotation, deleteQuotation, getAllQuotation, getQuotation, updateQuotation } from '../controllers/quotation.controller';
const router = express.Router();

router.post('/',createQuotation);
router.get('/:customerId/quotations',getQuotation);
router.get('/all', getAllQuotation);
router.put('/:id',updateQuotation);
router.delete('/:id',deleteQuotation);


export default router;