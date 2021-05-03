
import express from 'express';
const router = express.Router();
import { addOrderItems } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route('/').post(protect,addOrderItems)


export default router