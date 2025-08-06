import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <main>
        <About />
        <Products />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
