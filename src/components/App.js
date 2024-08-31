import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your components here

import { Main } from "./Main";
import { Quize } from "./Quize";
import { Result } from "./Result";

const router = createBrowserRouter([
  { path: "/", element: <Main></Main> },
  {
    path: "quize",
    element: <Quize></Quize>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
