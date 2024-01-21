
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Shopping} from "./component/shopping.tsx";
import {Start} from "./component/start.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/shopping" element={<Shopping />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
