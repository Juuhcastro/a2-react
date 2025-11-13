import { BrowserRouter, Routes, Route } from 'react-router-dom'

// COMPONENTES
import Header from './components/Header'
import Footer from './components/Footer'

// PÁGINAS
import Home from './pages/Home'
import Destinos from './pages/Destinos'
import Ofertas from './pages/Ofertas'
import Contato from './pages/Contato'

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <main>
          <Routes>

            {/* PÁGINA INICIAL */}
            <Route path="/" element={<Home />} />

            {/* PÁGINAS DO RODAPÉ */}
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/contato" element={<Contato />} />

          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  )
}

export default App
