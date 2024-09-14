import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './component/Header';
import WelcomeBanner from './component/WelcomeBanner';
import SpecialOffers from './component/SpecialOffers';
import MealSlider from './component/MealSlider';
import ContactAndAwards from './component/ContactAndAwards';
import OurServices from './component/OurServices';
import NewsAndArticles from './component/NewsAndArticles';
import Footer from './component/Footer';
import Menu from './pages/Menu';
import ReservationForm from './pages/Reservations'; 
import Kitchen from './pages/Kitchen'; 
import About from './pages/About'; 
import Contact  from './pages/Contact Us'; 





function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-r from-gray-900 via-black to-gray-800 min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="mt-8">
                  <WelcomeBanner />
                </div>
                <div className="mt-8">
                  <SpecialOffers />
                </div>
                <div className="mt-8">
                  <MealSlider />
                </div>
                <div className="mt-8">
                  <OurServices />
                </div>
                <div className="mt-8">
                  <NewsAndArticles />
                </div>
                <div className="mt-80">
                  <ContactAndAwards />
                </div>
                <div className="mt-8">
                  <Footer />
                </div>
                
              </>
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<ReservationForm />} /> 
          <Route path="/kitchen" element={<Kitchen />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 




        </Routes>
      </div>
    </Router>
  );
}

export default App;
