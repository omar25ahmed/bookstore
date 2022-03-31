import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/Books';

const Categories = [
  'Sci-fi',
  'Comedy',
  'Romance',
  'Fantasy',
  'Thriller',
  'Action',
];

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const id = Math.floor(Math.random() * 999999);

  const submitBookHandler = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      genre,
      id: `i-${id}`,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={submitBookHandler}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Book Title" required />
        <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author} placeholder="Author" required />
        <select name="Category" onChange={(e) => setGenre(e.target.value)} required>
          <option value="">Choose Category</option>
          {Categories.map((Category) => (<option key={Category}>{Category}</option>))}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
