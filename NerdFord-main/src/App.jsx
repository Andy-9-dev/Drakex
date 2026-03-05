import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Academics from './pages/Academics'
import Registration from './pages/Registration'
import About from './pages/About'
import Contact from './pages/Contact'
import CampusLife from './pages/CampusLife'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/campus-life" element={<CampusLife />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
