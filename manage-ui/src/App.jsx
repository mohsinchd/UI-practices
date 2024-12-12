import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import WhatDifferent from "./components/WhatDifferent/WhatDifferent";

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <WhatDifferent />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default App;
