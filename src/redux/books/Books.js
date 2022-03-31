const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dHSbS01NUEipnLIkAry3/books';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOK: {
      const books = [];
      Object.entries(action.payload).forEach(
        ([key, value]) => books.push({
          id: key,
          title: value[0].title,
          author: value[0].author,
          genre: value[0].category,
        }),
      );
      return books;
    }
    default:
      return state;
  }
};

export const addBook = (payload) => async (dispatch) => {
  await fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      author: payload.author,
      category: payload.genre,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  dispatch({ type: ADD_BOOK, payload });
};

export const removeBook = (id) => async (dispatch) => {
  const response = await fetch(`${api}/${id}`, {
    method: 'DELETE',
  });
  if (response.status === 201) {
    dispatch({ type: REMOVE_BOOK, id });
  }
};

export const getBooks = () => async (dispatch) => {
  const response = await fetch(api, {
    method: 'GET',
  });
  const data = await response.json();
  dispatch({ type: GET_BOOK, payload: data });
};

export default reducer;
