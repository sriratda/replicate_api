import express from "express";

import {
    getImage
} from '../controllers/replicateController.js';

const router = express.Router();

router.post('/getimg', getImage);

export default router;