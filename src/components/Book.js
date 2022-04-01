import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const Book = ({
  title,
  author,
  genre,
  id,
}) => {
  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container" id={id}>
      <div>
        <div className="book-info">
          <p className="book-genre">{genre}</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
        </div>
        <button type="button" className="remove-btn">Comments </button>
        |
        <button type="button" onClick={remove} className="remove-btn"> Remove</button>
        |
        <button type="button" className="remove-btn">Edit </button>
      </div>
      <div className="progression-div">
        <div className="circle" />
        <div className="progression-percentage">
          <p className="num">64%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="progression-details">
        <p className="first">Current Chapter</p>
        <p className="second">Chapter 17</p>
        <button className="btn" type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
