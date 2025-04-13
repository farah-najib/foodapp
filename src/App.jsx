import Home from './pages/Home'
import NavBar from './components/Navbar'
import Favorites from './pages/FavoritePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Footer from './components/Footer';

import './App.css'

function App() {
const [searchQuery, setSearchQuery] = useState('')

const handleSearch = (query) => {
    setSearchQuery(query) // Update the search query state
}

  return (
      <>
          <Router>
              <NavBar onSearch={handleSearch} />

              <div className="flex justify-center overflow-scroll bg-accent-content h-160 p-10 p">
                  <Routes>
                      <Route
                          path="/"
                          element={<Home searchQuery={searchQuery} />}
                      />

                      <Route path="/favorites" element={<Favorites />} />
                  </Routes>
              </div>
              <Footer />
          </Router>
      </>
  )
}

export default App
