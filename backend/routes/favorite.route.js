import express from 'express';

const router = express.Router();

router.post("/", createFavorite);

export default router;