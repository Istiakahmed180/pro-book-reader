import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Book from "../components/Book";
import BookDetails from "../components/BookDetails";
import Books from "../components/Books";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
]);
