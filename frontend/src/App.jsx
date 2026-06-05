import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import InstitutePage from './pages/InstitutePage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institute-page" element={<InstitutePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
