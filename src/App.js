import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes>
        <Route path="*" element={"404 not found"} />
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
