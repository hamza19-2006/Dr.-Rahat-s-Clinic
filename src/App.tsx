import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-clinic-bg selection:bg-clinic-teal/20 selection:text-clinic-teal">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
