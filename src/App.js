import Navigation from "./components/navigation/Navigation.js";
import Header from "./components/Header.js";
import Skills from "./components/skills/Skills.js";
import Work from "./components/work/Work.js";
import ContactDesktop from "./components/contact/ContactDesktop.js";
import ContactMobile from "./components/contact/ContactMobile.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Header></Header>
      <div className="lg:mx-20 mx-10">
        <Skills></Skills>
        {/* <Work></Work> */}
        {/* <Testimonials></Testimonials> */}
        <ContactDesktop className="hidden md:flex"></ContactDesktop>
        <ContactMobile className="flex md:hidden"></ContactMobile>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
