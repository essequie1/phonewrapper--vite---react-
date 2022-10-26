import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";
import Customizables from "./components/Customizables";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <Nav />
      <Hero />
      <CallToAction />
      <Customizables />
      <Footer />
    </div>
  );
}

export default App;
