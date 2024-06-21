import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GettingStarted from "./components/GettingStarted";
import Contests from "./components/Contests";
import { BrowserRouter as Router } from 'react-router-dom';
import MarketPlace from "./components/MarketPlace";
import Game from "./components/Game";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Founder from "./components/Founder";



const App = () => {
  return (
    <Router>

      <div className="pt-[4.75rem] bg-n-8 lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <GettingStarted/>
        <Contests/>
        <MarketPlace/>
        <Game/>
        <FAQ/>
        <Founder/>
        <Footer/>

        
      </div>

      <ButtonGradient />
    </Router>
  );
};

export default App;
