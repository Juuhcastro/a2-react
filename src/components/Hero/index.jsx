import './styles.css'

function Hero() {
  return (
    <section className="hero">

      <img 
        src="/hero.png"
        alt="Ilustração Viagem"
        className="hero__image"
      />

      <h2 className="hero__title">
        O seu próximo <span>destino</span> pode estar aqui...
      </h2>

      <p className="hero__text">
        Aqui você encontra uma seleção de <strong className="strong-black">pacotes completos</strong> para as suas férias!
      </p>

      <p className="hero__text">
        No <strong className="strong-gray">ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais
        que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com 
        <strong className="strong-black"> preços arrasadores</strong>!
      </p>

      <p className="hero__text">
        Se você ainda não tem um destino definido, confira nossa seção de ofertas.
      </p>

    </section>
  )
}

export default Hero
