import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feesdetails from './components/Feesdetails';
import Coaching from './components/Coaching';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* 3D Star Background */}
      <Background3D />

      {/* UI Overlay */}
      <main className="relative z-10 w-full h-full overflow-y-auto pointer-events-none">
        <div className="min-h-screen flex flex-col pointer-events-auto pt-20">
          <Navbar />
          <Hero />
          <Coaching />
          <Feesdetails />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
