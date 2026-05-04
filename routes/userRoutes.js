import express from 'express';
const router = express.Router();
import { getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

router.get('/profile', protect, getUserProfile);

export default router;
