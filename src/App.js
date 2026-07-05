import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Importancia from "./components/Importancia";
import Pasos from "./components/Pasos";
import Paquetes from "./components/Paquetes";
import Nosotros from "./components/Nosotros";
import Testimonios from "./components/Testimonios";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Importancia />
        <Pasos />
        <Paquetes />
        <Nosotros />
        <Testimonios />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
