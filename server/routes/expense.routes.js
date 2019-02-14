import express from 'express';

const router = express.Router();

router.get('/expenses', (req, res, next) => {});

router.post('/expenses', (req, res, next) => {});

router.delete('/expenses/:id', (req, res, next) => {});

router.put('/expenses/:id', (req, res, next) => {});

module.exports = router;
