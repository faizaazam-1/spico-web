import NewHome from "./NewHome";
import AboutPage from "./AboutPage";
import TeamNew from "./Team";
import TechStack from "./TechStack";
import BlogSection from "./BlogSection";

import CoreValuesSection from "./OurValues";
import ContactPage from "./contactInfo";
import Newsletter from "./NewLetter";
import footerNavigation from "./footerNavigation";
import Footer from "./Footer";

function App() {
  return (
    <>
      <NewHome />
      <AboutPage />
      <TeamNew />
      <TechStack />
      <BlogSection />
      <CoreValuesSection />
      <ContactPage />
      <Newsletter />
      <Footer navigation={footerNavigation} />
    </>
  );
}

export default App;
