import express from 'express';

import search from './search';
import create from './create';
import review from './review';
import update from './update';

const router = express.Router();

router.get('/', search);
router.post('/', create);
router.get('/:id', review);
router.put('/:id', update);

export default router;


