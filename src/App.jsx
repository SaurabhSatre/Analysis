import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Description from './Description';
import './App.css';

function App() {
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
