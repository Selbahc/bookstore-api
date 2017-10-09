import { Router } from 'express';
import Book from '../model/bookSchema';

const api = Router();

// get all books
api.get('/', (req, res) => {
  Book.find({}, (err, books) => {
    if (err) return res.send(err);
    res.json(books);
  });
});

export default api;
