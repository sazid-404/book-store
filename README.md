# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Book Store App
A simple book management application built with Vite, React, Redux, Redux Thunk, and JSON Server. This app allows you to add, view, update, and delete books. It also provides filtering (All/Featured) and search functionality.

Features

Add New Book: Fill in the form to add a new book to the store.

Book List: Display books fetched from a local JSON Server.

Filtering: Toggle between "All" and "Featured" books.

Search: Filter books by name using the search bar.

Edit Book: Click the edit icon to load book details into the form, switch to update mode, and update the book.

Delete Book: Remove a book from the database with a single click.

book-store/
├── public/
│ └── index.html # HTML file with a <div id="root"></div>
├── db.json # JSON Server data file (simulate REST API)
├── package.json
├── vite.config.js # Vite configuration (if needed)
└── src/
├── assets/
│ └── react.svg # Logo image (SVG)
├── app/
│ └── store.js # Redux store configuration using Redux Toolkit
├── features/
│ ├── books/
│ │ ├── booksSlice.js # Books slice: actions, reducers, async thunks
│ │ └── BookItem.jsx # Component for individual book items
│ └── filters/
│ └── filtersSlice.js # Filters slice for search and status filtering
├── components/
│ ├── Navbar.jsx # Navigation bar with search input
│ ├── Empty.jsx # Component to show when no books are found
│ └── Rating.jsx # Component to display star ratings
├── pages/
│ └── Home.jsx # Home page that includes BookList and BookForm
├── App.jsx # Main application component
└── main.jsx # Entry point for the app

Installation
Clone the Repository:

bash
Copy
git clone <repository-url>
cd book-store
Install Dependencies:

bash
Copy
npm install
Install JSON Server (if not already installed):

bash
Copy
npm install -D json-server

Running the App
Start JSON Server
Run the following command in one terminal to start the JSON Server (which serves data from db.json):

bash
Copy
npm run server
This will start the JSON Server at http://localhost:9000.

How It Works
Redux State Management
Books Slice:

State: Contains an array of books, the current form mode (create or update), and the selected book (for editing).

Async Thunks:

fetchBooks: Fetches the list of books from the JSON Server.

addBook: Adds a new book.

updateBook: Updates an existing book.

deleteBook: Deletes a book.

Reducers: Handle actions to load, add, update, or delete books, as well as toggling the form mode and selecting a book for editing.

Filters Slice:

State: Contains the search query and filter status (all or featured).

Reducers: Update the search text and filter status based on user input.

React Components
Navbar:
Displays the logo and a search input. The search input dispatches actions to update the filter state in Redux.

Home Page:
Splits the view into two parts:

Left Side (Book List): Displays a list of books that can be filtered by status and search query.

Right Side (Book Form): A form for adding new books or updating existing ones. When editing, the form loads the selected book's details.

BookList & BookItem:

BookList: Filters and displays books based on the current filter status and search query.

BookItem: Displays individual book details along with Edit and Delete options.

BookForm:
A form to add or update a book. It automatically switches between "Add" and "Update" modes based on the selected book.

Empty & Rating:

Empty: Displays a message when no books match the current filters.

Rating: Displays star icons corresponding to a book's rating.

Running the App Flow
Adding a Book:
Fill out the form and submit. The new book is sent to the JSON Server via an async thunk, then added to the Redux state.

Viewing & Filtering:
Books are fetched from the server on load. Use the filter buttons or search bar to narrow down the list.

Editing a Book:
Click the Edit button on a book to load its details into the form. The form mode changes to update, and after submitting, the book is updated in both the JSON Server and Redux state.

Deleting a Book:
Click the Delete button on a book to remove it from the JSON Server and update the Redux state.

Additional Notes
Redux DevTools:
The store is configured with Redux DevTools support. Install the browser extension to debug state changes.

Styling:
Tailwind CSS is used for styling. Modify or extend the CSS classes as needed.

Vite:
Vite is used for its fast development server and optimized builds.

License
This project is licensed under the MIT License.
