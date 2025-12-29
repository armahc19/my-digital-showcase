import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alex Johnson | Creative Developer & Designer</title>
        <meta
          name="description"
          content="I'm Alex Johnson, a creative developer crafting beautiful, user-centric digital experiences. View my portfolio and let's build something amazing together."
        />
        <meta name="keywords" content="web developer, portfolio, React, TypeScript, frontend developer, creative developer" />
        <link rel="canonical" href="https://alexjohnson.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
