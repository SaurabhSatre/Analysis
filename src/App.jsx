import { BrowserRouter as Router, Routes, Route , useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Description from './Description';
import './App.css';

function App() {

  const PageViewTracker = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Make sure the gtag function is available
      if (typeof window.gtag === 'function') {
        // Send a page_view event to Google Analytics
        window.gtag('config', 'G-929HYGSCZL', {
          page_path: location.pathname + location.search,
        });
      }
    }, [location]); // This effect runs every time the route changes
  
    return null; // This component doesn't render anything visible
  };
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
