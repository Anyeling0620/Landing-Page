import { SpeedInsights } from '@vercel/speed-insights/react';
import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAcion";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";


function App () {
  return (
    <Layout title='Deepsleep'>
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
      <SpeedInsights />
    </Layout>
  );
}

export default App;