import express from 'express';
import createBooknowApplication from '../controller/bookNow.js';

const route = express.Router();

route.post('/book-now', createBooknowApplication);

export default route;
