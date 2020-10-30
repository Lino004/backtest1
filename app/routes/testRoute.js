import express from 'express';

import { createTest } from '../controllers/testController';

const router = express.Router();

// test Routes

router.post('/test', createTest);

export default router;
