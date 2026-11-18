import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const InfoExtra = dynamic(() => import("../components/InfoExtra"), {
  loading: () => <p>Cargando información adicional...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio Optimizado con Next.js y SEO</title>
        <meta name="google-site-verification" content="AWVqPgZKtO987wkoN5MstF4ImdH20f_L9YcHY7lh0Tg" />
        <meta
          name="description"
          content="Guía práctica sobre optimización SEO técnico, metadatos dinámicos y rendimiento web en Next.js."
        />
        <meta name="keywords" content="Next.js, SEO, optimización web, rendimiento" />

        {/* Open Graph */}
        <meta property="og:title" content="Inicio | Mi Sitio Optimizado con Next.js" />
        <meta
          property="og:description"
          content="Descubre técnicas avanzadas para mejorar el posicionamiento y velocidad de tu web con Next.js."
        />
        <meta property="og:url" content="https://mi-proyecto-seo-3brl.onrender.com/" />
        <meta property="og:image" content="https://mi-proyecto-seo-3brl.onrender.com/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <nav style={{ padding: "1rem 2rem", borderBottom: "1px solid #ddd", display: "flex", gap: "1.5rem" }}>
        <Link href="/">Inicio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>

      <main style={{ padding: "2rem" }}>
        <h1>Bienvenido a mi página optimizada</h1>
        <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
        <Image
          src="/images/seo-image.png"
          alt="Ejemplo de imagen optimizada con Next.js"
          width={800}
          height={450}
          priority
        />
        <InfoExtra />
      </main>
    </>
  );
}