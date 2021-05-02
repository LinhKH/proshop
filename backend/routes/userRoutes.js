
import express from 'express';
const router = express.Router();
import { authUser, getUsers, getUserProfile, updateUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile)

export default router