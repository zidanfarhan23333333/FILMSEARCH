import NavigationBar from "./components/Film/NavigationBar";
import Genres from "./pages/genres";
import Home from "./pages/home";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <NavigationBar />
                <Home />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <NavigationBar />
                <Home />
              </>
            }
          />
          <Route path="/genres" element={
            <>
                <NavigationBar />
                <Genres />
              </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
