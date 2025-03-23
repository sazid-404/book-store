import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../redux/filters/actions";
import logo from "../assets/react.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.books.mode);

  const changeHandler = (event) => {
    const text = event.target.value.trim();
    dispatch(changeSearch(text));
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={logo} width="50px" className="object-contain" alt="logo" 
        style={{ filter: 'invert(18%) sepia(100%) saturate(7480%) hue-rotate(355deg) brightness(100%) contrast(101%)' }}/>
        <ul className="hidden md:flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">Book Store</li>
          <li className="cursor-pointer">Wishlist</li>
          <li className="cursor-pointer">My Collection</li>
        </ul>
        <form className="flex items-center" onSubmit={searchSubmitHandler}>
          <div className="group relative rounded-md bg-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
            <input
              disabled={mode === "update"}
              type="text"
              placeholder="Filter books..."
              className="search"
              onChange={changeHandler}
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
