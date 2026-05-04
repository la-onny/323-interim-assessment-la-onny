import express from 'express';
const router = express.Router();
import {
  getCryptos,
  getGainers,
  getNewCryptos,
  addCrypto,
} from '../controllers/cryptoController.js';

router.get('/', getCryptos);
router.get('/gainers', getGainers);
router.get('/new', getNewCryptos);
router.post('/', addCrypto);

export default router;
