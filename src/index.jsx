import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./store";
import "./output.css";
import MainRoutes from "./Routes/Mainroutes";

const root = document.getElementById("root");

const rootInstance = createRoot(root);

rootInstance.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </Provider>
);
