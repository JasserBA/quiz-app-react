import React, { useEffect, useState } from "react";
import Choose from "./pages/Choose";
import Navbar from "./layouts/Navbar";
import { Routes, Route } from "react-router-dom";
import Start from "./layouts/Start";
import { Football, Gaming, Mathematic } from "./sections/Main";
import { ClipLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  window.onload = function () {
    console.log("loading finshed");
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="load">
          <ClipLoader size={50} color="var(--cyan)" loading={loading} />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="choose" element={<Choose />} />
              <Route path="choose/football" element={<Football />} />
              <Route path="choose/gaming" element={<Gaming />} />
              <Route path="choose/mathematic" element={<Mathematic />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
