import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Thanks from "./Pages/Thanks";
import Sorry from "./Pages/Sorry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/sorry" element={<Sorry />} />
      </Routes>
    </Router>
  );
}

export default App;
