import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import MissionSection from "./components/MissionSection.jsx";
import MediaSection from "./components/MediaSection.jsx";
import BuyFFSection from "./components/BuyFFSection.jsx";
import LinksSection from "./components/LinksSection.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <AboutSection />
        <MissionSection />
        <MediaSection />
        <BuyFFSection />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
