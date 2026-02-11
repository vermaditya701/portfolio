import { AnimatedBackground } from './components/AnimatedBackground';
import { NavigationDock } from './components/NavigationDock';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Certifications } from './sections/Certifications';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <AnimatedBackground />
        <NavigationDock />

        <div className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
