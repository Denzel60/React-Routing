import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />}>
            {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
            {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
          </Route>
          <Route path="/dashboard/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
