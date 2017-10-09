import { Router } from 'express';
import Book from '../model/bookSchema';

const api = Router();

// delete a book
api.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, err => {
    if (err) return res.send(err);
    res.json({message : 'book successfully removed'});
  });
});

export default api;
