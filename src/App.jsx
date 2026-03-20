import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
