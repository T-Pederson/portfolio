import "./index.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="p-4 sm:py-14 sm:px-8 xl:py-20">
      <Navbar />
      <Heading />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
