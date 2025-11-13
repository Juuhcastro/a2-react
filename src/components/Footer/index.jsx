import { Link } from 'react-router-dom'
import onda from '../../assets/Wave.png'

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Link to="/destinos">Destinos</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <img src={onda} className="footer-wave" alt="onda" />

    </footer>
  )
}

export default Footer

