import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Pre-emptively importing Contact

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
