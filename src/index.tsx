import { createRoot } from "react-dom/client";
import { App } from "./app"

import "./assets/css/index.css"

createRoot(document.getElementById("root") as HTMLElement).render(
    <App/>
)
