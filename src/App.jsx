import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Depoimentos from "./components/pages/Depoimentos";
import Login from "./components/pages/Login";
import Planos from "./components/pages/Planos";
import Sobre from "./components/pages/Sobre";
import Cadastro from "./components/pages/Cadastro";

import "./style/main.css";
import "./style/header.css";
import "./style/footer.css";
import "./style/home.css";
import "./style/contato.css";
import "./style/login.css";
import "./style/sobre.css";
import "./style/cadastro.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
