import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./pages/NavBar/NavBar"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
