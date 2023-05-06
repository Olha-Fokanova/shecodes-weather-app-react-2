import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://dainty-pudding-d474dc.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            Olha Fokanova{" "}
          </a>
          and is open-sourced on{" "}
          <a
            href="https://github.com/Olha-Fokanova/shecodes-weather-app-react-2"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
