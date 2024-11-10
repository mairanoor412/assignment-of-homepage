import Header from "./components/header/header"
import HeroSection from "./components/hero-section/hero-section";
import Footer from "./components/footer/footer"
import AboutPage from "./components/about/about";
import ContactPage from "./components/contact/contact"



 const HomePage = () => {
  return (
    <div> 
      <Header></Header>

     <HeroSection></HeroSection>

     <AboutPage></AboutPage>

     <ContactPage></ContactPage>
     
     <Footer></Footer>
    </div>
  )
}

export default HomePage;
