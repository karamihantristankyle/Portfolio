import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProfileSummaryCard from './components/ProfileSummaryCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <ProfileSummaryCard />
          </div>
        </section>
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
