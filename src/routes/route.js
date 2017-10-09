import { Router } from 'express';
import mongoose from 'mongoose';
import config from '../config/config';
import controller from '../controller/main';

const router = Router();

mongoose.connect(config.mongoUrl, () => {console.log('Connected to database')});

router.use('/bookstore', controller());

export default router;
