import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PortfolioDetails from "./pages/PortfolioDetails";
import ServiceDetails from "./pages/ServiceDetails";
import BlogDetails from "./pages/BlogDetails";
import BackToTop from "./components/BackToTop";
import WhatsAppChat from "./components/WhatsAppChat";
import About from "./pages/About";
import Team from "./Pages/Team";
import TeamDetails from "./Pages/TeamDetails";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
      <WhatsAppChat />
      <BackToTop />
    </Router>
  );
};

export default App;
