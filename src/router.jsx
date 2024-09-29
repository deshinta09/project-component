import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./pages/Home";
import LayoutMain from "./components/Layout";
import Login from "./pages/Login";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        // return redirect('/')
      }
      return null;
    },
  },
]);

export default route;
