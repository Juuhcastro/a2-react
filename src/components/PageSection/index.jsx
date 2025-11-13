import './styles.css'

function PageSection({ title, description, children }) {
  return (
    <section className="page-section">
      <h2>{title}</h2>
      {description && <p className="page-section__description">{description}</p>}
      {children}
    </section>
  )
}

export default PageSection
