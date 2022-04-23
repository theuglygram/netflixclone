import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "components/Pages/Home";
import Movies from "components/Pages/Movies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "components/Pages/Login";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
