import { Router } from 'express';
import Book from '../model/bookSchema';

const api = Router();

// add a book
api.post('/add', (req, res) => {
  let newBook = new Book(req.body);
  newBook.save(err => {
    if (err) return res.send(err);
    res.json({message : "book saved !"});
  });
});

export default api;
