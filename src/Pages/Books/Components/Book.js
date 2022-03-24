import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ books }) => (
  <div>
    {books.map((book) => (
      <div key={book.id}>
        <h1>
          {book.title}
          ,
          {' '}
        </h1>
        <p>
          {book.author}
          ,
          {' '}
        </p>
        <p>
          {book.genre}
          ,
          {' '}
        </p>
        <button type="button"> Remove</button>
      </div>
    ))}
  </div>
);

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default Book;
