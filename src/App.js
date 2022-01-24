import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import All from "./components/pages/All";
import Layout from "./components/layout/Layout";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <div>
      <Layout />
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
