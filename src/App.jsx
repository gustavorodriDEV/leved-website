import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Services from './components/Services/Services';
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
    </>
  );
}

export default App;
