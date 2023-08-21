import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import ServicesSection from './components/ServicesSection';
import Gallery from './components/Gallery';
import React from 'react';

function useOnScreen(options) {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options)

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [ref, options])

  return [ref, visible];
}

function App() {
  const [ref, visible] = useOnScreen({ rootMargin: '-300px' })


  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ServicesSection ref={ref} visible={visible} />
      <Gallery />
    </div>
  );
}

export default App;
