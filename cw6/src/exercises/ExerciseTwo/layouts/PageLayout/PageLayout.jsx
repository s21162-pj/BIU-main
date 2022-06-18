import "./PageLayout.css";


export default function PageLayout({ title, exerciseContent, children }) {
  return (
    <section className="e-two-page-layout">
      <h2 className="e-two-page-layout__header">{title}</h2>
      <p className="e-two-page-layout__exercise-content">
        {exerciseContent}&nbsp;
        
      </p>
      {children}
    </section>
  );
}
