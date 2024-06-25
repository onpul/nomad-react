import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Detail from "./routes/Detail";
import "./marvel.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/character/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
export default App;
