import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import All from "./components/pages/All";
import ContactUs from "./components/pages/ContactUs";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view-all" element={<All />} />
        <Route path="/contact-us" element={ <ContactUs /> } />
      </Routes>
    </div>
  );
}

export default App;
