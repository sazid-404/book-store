import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import createBook from "../../redux/books/thunk/createBook";
import updateBook from "../../redux/books/thunk/updateBook";
import { selectCandidate, changeMode } from "../../redux/books/actions";

const formValues = {
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: false,
};

const BookForm = () => {
  const dispatch = useDispatch();
  const { mode, candidate } = useSelector((state) => state.books);
  const [values, setValues] = useState(formValues);

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (mode === "update") {
      dispatch(updateBook(values));
      dispatch(selectCandidate({}));
      dispatch(changeMode("create"));
    } else {
      dispatch(createBook(values));
    }
    setValues(formValues);
  };

  useEffect(() => {
    if (mode === "update") {
      setValues(candidate);
    }
  }, [mode, candidate]);

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">
        {mode === "update" ? "Update This Book" : "Add New Book"}
      </h4>
      <form className="book-form space-y-4" onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="name">Book Name</label>
          <input
            required
            type="text"
            id="input-Bookname"
            name="name"
            value={values.name}
            onChange={changeHandler}
            className="text-input w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            required
            type="text"
            id="input-Bookauthor"
            name="author"
            value={values.author}
            onChange={changeHandler}
            className="text-input w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="thumbnail">Image URL</label>
          <input
            required
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={values.thumbnail}
            onChange={changeHandler}
            className="text-input w-full border p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price">Price</label>
            <input
              required
              type="number"
              id="input-Bookprice"
              name="price"
              value={values.price}
              onChange={changeHandler}
              className="text-input w-full border p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              required
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={values.rating}
              onChange={changeHandler}
              className="text-input w-full border p-2 rounded"
            />
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="input-Bookfeatured"
            name="featured"
            checked={values.featured}
            onChange={changeHandler}
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>
        <button type="submit" className="submit bg-blue-500 text-white w-full py-2 rounded">
          {mode === "update" ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
