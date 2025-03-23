import { bookUpdated } from "../actions";

const updateBook = (book) => async (dispatch) => {
  const url = `http://localhost:9000/books/${book.id}`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      ...book,
      price: Number(book.price),
      rating: Number(book.rating),
    }),
  });

  if (response.status === 200) {
    const updatedBook = await response.json();
    dispatch(bookUpdated(updatedBook));
  }
};

export default updateBook;
