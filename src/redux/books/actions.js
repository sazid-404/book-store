import {
  BOOKS_LOADED,
  BOOK_CREATED,
  BOOK_UPDATED,
  BOOK_DELETED,
  CHANGE_MODE,
  SELECT_CANDIDATE,
} from "./actionsTypes";

export const booksLoaded = (books) => ({
  type: BOOKS_LOADED,
  payload: books,
});

export const bookCreated = (book) => ({
  type: BOOK_CREATED,
  payload: book,
});

export const bookUpdated = (book) => ({
  type: BOOK_UPDATED,
  payload: book,
});

export const bookDeleted = (bookId) => ({
  type: BOOK_DELETED,
  payload: bookId,
});

export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: mode,
});

export const selectCandidate = (book) => ({
  type: SELECT_CANDIDATE,
  payload: book,
});
