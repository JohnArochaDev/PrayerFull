import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import PrayerPage from './PrayerPage/PrayerPage.jsx'

export default function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<PrayerPage />} />
          <Route path='/prayer-request' element={<PrayerPage />} />
          <Route path='/prayer-feed' element={<PrayerPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}