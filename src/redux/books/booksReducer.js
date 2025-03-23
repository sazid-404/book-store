import {
    BOOKS_LOADED,
    BOOK_CREATED,
    BOOK_UPDATED,
    BOOK_DELETED,
    CHANGE_MODE,
    SELECT_CANDIDATE,
  } from "./actionsTypes";
  import initialState from "./initialState";
  
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case BOOKS_LOADED: {
        return { ...state, books: action.payload };
      }
      case BOOK_CREATED: {
        return { ...state, books: [...state.books, action.payload] };
      }
      case BOOK_UPDATED: {
        const updatedBook = action.payload;
        return { 
          ...state, 
          books: state.books.map((book) =>
            book.id === updatedBook.id ? updatedBook : book
          ) 
        };
      }
      case BOOK_DELETED: {
        return { ...state, books: state.books.filter((book) => book.id !== action.payload) };
      }
      case CHANGE_MODE: {
        return { ...state, mode: action.payload };
      }
      case SELECT_CANDIDATE: {
        return { ...state, candidate: action.payload };
      }
      default:
        return state;
    }
  };
  
  export default booksReducer;
  