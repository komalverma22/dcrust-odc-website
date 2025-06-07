import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import TeamSection from "./pages/TeamSection";
import FaQSection from "./pages/FaQSection";
import Divider from "./components/Divider";
import ActiveContributions from "./pages/ActiveContribution";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Hero />
        
        <Divider />
        <ActiveContributions/>
        <TeamSection />
        <Divider />
        <FaQSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
