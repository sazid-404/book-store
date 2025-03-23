import { booksLoaded } from "../actions";

const fetchBooks = () => async (dispatch) => {
  const url = "http://localhost:9000/books";

  const response = await fetch(url);
  if (response.status === 200) {
    const books = await response.json();
    dispatch(booksLoaded(books));
  }
};

export default fetchBooks;
