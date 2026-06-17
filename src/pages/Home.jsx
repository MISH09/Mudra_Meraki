import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import CoursesSection from "../components/CoursesSection"; 
import Achievements from "../components/Achievements"; 
import Testimonials from "../components/Testimonials"; 
import GallerySection from "../components/GallerySection"; 
import ContactSection from "../components/ContactSection"; 
import Footer from "../components/Footer"; 
function Home() 
{ 
  return (
     <> 
      <Navbar />
      <Hero /> 
      <Stats /> 
      <WhyChooseUs />
      <CoursesSection /> 
      <Achievements /> 
      <Testimonials /> 
      <GallerySection /> 
      <ContactSection /> 
      <Footer /> 
      </> 
      );
     } 
     
     export default Home;