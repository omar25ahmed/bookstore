import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      title: 'Hello World',
      author: 'Omar',
      genre: 'Action',
      id: 1,
    },
    {
      title: 'Hello World2',
      author: 'Omar2',
      genre: 'Action',
      id: 2,
    },
    {
      title: 'Hello World3',
      author: 'Omar3',
      genre: 'Action',
      id: 3,
    },
  ];
  return <Book books={books} />;
};

export default BookList;
