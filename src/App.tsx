import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router";
import PageNotFound from "./pages/PageNotFound";
import LandingPageTemp from "./pages/LandingPageTemp";
import TopBar from "./pages/layout/Topbar";

const Layout = () => (
  <>
    <TopBar />
    <Outlet />
  </>
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPageTemp />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
