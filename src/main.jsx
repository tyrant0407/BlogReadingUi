import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyContextProvider } from "./context/MyContext.jsx";
import AppRouter from "./components/AppRouter.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <MyContextProvider>
    <App />
  </MyContextProvider>
</BrowserRouter>
);
