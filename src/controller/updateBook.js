import { Router } from 'express';
import Book from '../model/bookSchema';

const api = Router();

// update a book
api.post('/:id', (req, res)=> {
  Book.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) return res.send(err);
    res.json({message: 'book updated'});
  });
});

export default api;
