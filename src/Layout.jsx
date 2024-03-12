import { Router, Routes, Route } from "react-router-dom"
import Home from 
function Layout() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default Layout