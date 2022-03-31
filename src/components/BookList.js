import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooks } from '../redux/books/Books';

const BookList = () => {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      {
       bookStore.map((book) => (
         <Book
           title={book.title}
           author={book.author}
           genre={book.genre}
           key={book.id}
           id={book.id}
         />
       ))
}
    </div>
  );
};

export default BookList;
