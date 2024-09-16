import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./pages/NavBar/NavBar"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Cadastro from "./pages/Cadastro/Cadastro"
import Pontos from "./pages/Pontos/Pontos"
import Resgates from "./pages/Resgates/Resgates"
import ChatBot from "./pages/ChatBot/ChatBot"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Pontos" element={<Pontos />} />
        <Route path="/Resgates" element={<Resgates />} />
        <Route path="/ChatBot" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
