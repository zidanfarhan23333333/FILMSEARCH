import NavigationBar from "./components/Film/NavigationBar";
import Genres from "./pages/genres";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
