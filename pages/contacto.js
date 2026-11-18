import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto y Soporte | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Ponte en contacto con nuestro equipo para asesorías en desarrollo web con Next.js y auditorías SEO."
        />
        <meta property="og:title" content="Contacto y Soporte | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="¿Tienes dudas sobre optimización web? Escríbenos y mejora el rendimiento de tu proyecto."
        />
        <meta property="og:url" content="https://mi-proyecto-seo-3brl.onrender.com/contacto" />
        <meta property="og:image" content="https://mi-proyecto-seo-3brl.onrender.com/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <nav style={{ padding: "1rem 2rem", borderBottom: "1px solid #ddd", display: "flex", gap: "1.5rem" }}>
        <Link href="/">Inicio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>

      <main style={{ padding: "2rem" }}>
        <h1>Contáctanos</h1>
        <p>Envíanos tus consultas sobre implementación SEO en aplicaciones Next.js.</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem", maxWidth: "400px", marginTop: "1rem" }}
        >
          <input type="text" placeholder="Tu nombre" required style={{ padding: "0.5rem" }} />
          <input type="email" placeholder="Tu correo electrónico" required style={{ padding: "0.5rem" }} />
          <textarea placeholder="Escribe tu mensaje..." rows={4} required style={{ padding: "0.5rem" }} />
          <button type="submit" style={{ padding: "0.6rem", cursor: "pointer" }}>
            Enviar mensaje
          </button>
        </form>
      </main>
    </>
  );
}