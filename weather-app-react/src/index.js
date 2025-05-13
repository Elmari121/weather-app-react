import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
  </div>
  <footer>
    <p style={{ fontSize: "0.9rem", marginTop: "2rem" }}>
      <a href="https://github.com/Elmari121/weather-app-react" target="_blank" rel="noopener noreferrer">
        View Source on GitHub
      </a>
    </p>
  </footer>
</StrictMode>
);