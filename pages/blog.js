import Head from "next/head";
import Link from "next/link";

const articulos = [
  {
    id: 1,
    slug: "optimizacion-seo-nextjs",
    titulo: "Cómo optimizar el SEO técnico en Next.js",
    resumen: "Aprende a configurar etiquetas Head, sitemaps dinámicos y robots.txt.",
  },
  {
    id: 2,
    slug: "mejora-core-web-vitals",
    titulo: "Mejora tus Core Web Vitals con next/image y next/font",
    resumen: "Reduce el tiempo de carga y evita saltos visuales en tus aplicaciones web.",
  },
  {
    id: 3,
    slug: "indexacion-google-search-console",
    titulo: "Guía de indexación rápida en Google Search Console",
    resumen: "Envía tu sitemap XML y monitorea el estado de rastreo de tus rutas.",
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web y SEO | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Artículos técnicos sobre Next.js, Core Web Vitals, posicionamiento en buscadores y buenas prácticas web."
        />
        <meta property="og:title" content="Blog de Desarrollo Web y SEO | Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Explora nuestras publicaciones más recientes sobre rendimiento y SEO en Next.js."
        />
        <meta property="og:url" content="https://mi-proyecto-seo-3brl.onrender.com/blog" />
        <meta property="og:image" content="https://mi-proyecto-seo-3brl.onrender.com/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <nav style={{ padding: "1rem 2rem", borderBottom: "1px solid #ddd", display: "flex", gap: "1.5rem" }}>
        <Link href="/">Inicio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>

      <main style={{ padding: "2rem" }}>
        <h1>Blog Técnico de SEO y Next.js</h1>
        <p>Publicaciones recientes indexadas dinámicamente en nuestro sitemap:</p>

        <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
          {articulos.map((post) => (
            <article key={post.id} style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h2>{post.titulo}</h2>
              <p>{post.resumen}</p>
              <small>Ruta en sitemap: /blog/{post.slug}</small>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}