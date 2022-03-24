import express, { Application, Express, Router } from 'express';
import { postMessage } from '../controllers/message.controller';

const router: Router = express.Router();

router.post('/message', postMessage);

module.exports = router;
