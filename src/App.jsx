import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";

const context = React.createContext();

function App() {
  const [state, setState] = useState(5);

  return (
    <context.Provider value={[state, setState]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
export { context };
