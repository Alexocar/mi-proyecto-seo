export default function InfoExtra() {
  return (
    <section style={{ marginTop: "1.5rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Sección cargada de forma diferida (Lazy Loading)</h2>
      <p>
        Este componente se carga dinámicamente con <code>next/dynamic</code> para mejorar el tiempo de carga inicial y los Core Web Vitals.
      </p>
    </section>
  );
}