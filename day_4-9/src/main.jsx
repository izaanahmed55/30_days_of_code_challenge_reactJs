import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./components/context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider>
            {/* <Router> */}
                <App />
            {/* </Router> */}
        </AppProvider>
    </React.StrictMode>
);
