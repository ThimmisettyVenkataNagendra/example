import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OfferSection from "../Components/OfferSection";
import About from "../Components/About";
import Services from "../Components/Services";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <OfferSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <div className="text-center my-6">
        <Link to="/registration">
          <button style={{ padding: "10px", background: "green", color: "white", borderRadius: "5px" }}>
            Register Now
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}
