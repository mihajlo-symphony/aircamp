import express from 'express';
import { campController } from '../controllers';

const router = express.Router();

// TODO: replace with actual routes
router.get('/headers', campController.returnHeaders);
router.get('/hello', campController.sayHello);

export default router;