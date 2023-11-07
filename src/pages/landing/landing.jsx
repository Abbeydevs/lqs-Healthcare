import Blog from "../../components/blog/blog";
import Feature from "../../components/feature/feature";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Navigation from "../../components/nav/nav";
import Services from "../../components/services/services";
import Testimonials from "../../components/testimonials/testimonials";

const Landing = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Feature />
      <Services />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

export default Landing;
