import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import Card from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Nav first="Home" second="Articles" third="About" fourth="Contact" />
      <Promo />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
      <Card h2="First cards h2" h3="First Card h3" />
      <Card h2="Second cards h2" h3="Second Card h3" />
      <Card h2="Third cards h2" h3="Third Card h3" />
    </div>
  );
}

export default App;
