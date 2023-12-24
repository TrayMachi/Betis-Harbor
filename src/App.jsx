import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import PerahuPage from "./PerahuPage";
import DetailPage from "./DetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="font-mono">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perahu" element={<PerahuPage />} />
          <Route path="/perahu/:idPerahu" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
