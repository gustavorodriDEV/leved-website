import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <main>
        <About />
        <Products />
      </main>
    </>
  );
}

export default App;
