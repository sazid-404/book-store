import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchBooks from "../../redux/books/thunk/fetchBooks"
import Empty from "../../components/Empty";
import Book from "./Book";

const BookList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const { status, search } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const filterByStatus = (book) => (status === "all" ? true : book.featured);
  const filterBySearch = (book) => book.name.toLowerCase().includes(search.toLowerCase());
  const filteredBooks = books.filter(filterByStatus).filter(filterBySearch);

  if (!filteredBooks.length) return <Empty>No Book Found 👻</Empty>;

  return (
    <div className="bookContainer grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
