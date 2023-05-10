import Navbar from "./Components/Navbar";
import Allroutes from "./Pages/Allroutes";

import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
      <ScrollToTop
        style={{
          background: "black",
          borderRadius: "20px",
          width: "40px",
          height: "40px",
        }}
        smooth
        color="white"
        width="39"
      />
      <Navbar />
      <Allroutes />
    </>
  );
}

export default App;
