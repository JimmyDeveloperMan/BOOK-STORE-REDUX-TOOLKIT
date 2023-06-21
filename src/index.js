import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./routes/Index";
import ProductDitails from "./routes/ProductDitails";
import ErrorPage from "./routes/ErrorPage";

const RootLayout = lazy(() => import("./routes/RootLayout"));
const Cart = lazy(() => import("./routes/Cart"));
const productsParamsHandler = ({ params }) => {
  if (isNaN(params.id) )
    throw new Response("Bad Request", {
      statusText: "Please enter a valid Link.",
      status: 400,
    });
    return params;
};
const loadingMessage = <center>loading Please Wait...</center>;
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "products/cart",
        element: <Cart />,
      },
      {
        path: "products/:id/details",
        element: <ProductDitails />,
        // loader:productsParamsHandler
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback={loadingMessage}>
      <RouterProvider router={routes} />
    </Suspense>
  </Provider>
  // {/* </React.StrictMode> */}
);

reportWebVitals();
