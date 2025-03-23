import { useDispatch, useSelector } from "react-redux";
import { selectCandidate, changeMode } from "../../redux/books/actions";
import deleteBook from "../../redux/books/thunk/deleteBook";
import Rating from "../../components/Rating";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.books);
  const { id, name, author, thumbnail, price, featured, rating } = book;

  const editHandler = () => {
    dispatch(selectCandidate(book));
    dispatch(changeMode("update"));
  };

  const deleteHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-card p-4 bg-white shadow rounded-md flex">
      <img
        className="h-[240px] w-[170px] object-cover"
        src={thumbnail}
        alt={name}
      />
      <div className="flex-1 pl-4 flex flex-col">
        <div className="flex items-center justify-between">
          {featured ? (
            <span className="badge-success text-sm font-medium text-blue-500">Featured</span>
          ) : (
            <span></span>
          )}
          <div className="flex space-x-2">
            <button onClick={editHandler} className="edit">
              {/* Edit SVG */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
                />
              </svg>
            </button>
            <button onClick={deleteHandler} disabled={mode === "update"} className="delete">
              {/* Delete SVG */}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h4 className="bookName text-lg font-bold">{name}</h4>
          <p className="author text-gray-600">{author}</p>
          <Rating rating={rating} />
          <p className="price text-blue-500 font-semibold">BDT {price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
