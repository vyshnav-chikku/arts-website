import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Banner from "./pages/Banner";
import Offstage from "./pages/Offstage";
import ONSTAGE from "./pages/Onstage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/news" exact element={<News />} />
        <Route path="/banner" exact element={<Banner />} />
        <Route path="/offstage" exact element={<Offstage />} />
        <Route path="/onstage" exact element={<ONSTAGE />} />
      </Routes>
    </>
  );
}

export default App;
