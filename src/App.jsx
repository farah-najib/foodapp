
import Home from './pages/Home'
import NavBar from './components/Navbar'
import { useState } from 'react'

import './App.css'

function App() {
const [searchQuery, setSearchQuery] = useState('')

const handleSearch = (query) => {
    setSearchQuery(query) // Update the search query state
}

  return (
      <>
          <NavBar onSearch={handleSearch} />
          <Home searchQuery={searchQuery} />
      </>
  )
}

export default App
