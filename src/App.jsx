import "./index.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-4 py-8 sm:px-32 sm:py-14 grid gap-32">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
