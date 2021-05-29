import React from "react";
import Homepage from "./HomePage/homepage";
import Footers from "./Footer/footer";
import Experiences from "./Experiences/experiences";
import Projects from "./Projects/projects";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Experiences />
      <Projects />
      <Footers />
    </div>
  );
}

export default App;
