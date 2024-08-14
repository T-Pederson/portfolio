import "./Index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="p-4 sm:py-14 sm:px-8 xl:py-20">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
