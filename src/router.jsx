import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LayoutMain from "./components/Layout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [{ path: "", element: <Home /> }],
  },
]);

export default route;
