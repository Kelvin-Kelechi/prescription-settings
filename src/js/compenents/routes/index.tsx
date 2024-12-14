import { RouteObject, createBrowserRouter } from "react-router-dom";
import IndexPage from "..";
import homeRoutes from "../../pages/Home/routes";
 

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <IndexPage />,
    children: [...homeRoutes],
  },
];

export const router = createBrowserRouter(appRoutes);
