import { Router } from 'express';
import Book from '../model/bookSchema';

import postBook from './postBook';
import updateBook from './updateBook';
import deleteBook from './deleteBook';
import getAllBooks from './getAllBooks';

export default () => {
  const api = Router();

  api.use(postBook);
  api.use(updateBook);
  api.use(deleteBook);
  api.use(getAllBooks);

  return api;
};
