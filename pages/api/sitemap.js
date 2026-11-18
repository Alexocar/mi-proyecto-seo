const BASE_URL = "https://mi-proyecto-seo-3brl.onrender.com";

// Simulación de consulta a una Base de Datos o CMS (ej. Strapi, Contentful, MongoDB)
async function obtenerPostsDesdeDB() {
  return [
    { id: 1, slug: "optimizacion-seo-nextjs" },
    { id: 2, slug: "mejora-core-web-vitals" },
    { id: 3, slug: "indexacion-google-search-console" },
  ];
}

export default async function handler(req, res) {
  // 1. Rutas estáticas principales
  const urlsEstaticas = ["/", "/blog", "/contacto"];

  // 2. Obtener registros dinámicos desde la BD/CMS y convertirlos a rutas
  const posts = await obtenerPostsDesdeDB();
  const urlsDinamicas = posts.map((post) => `/blog/${post.slug}`);

  // 3. Unir todas las rutas
  const todasLasUrls = [...urlsEstaticas, ...urlsDinamicas];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${todasLasUrls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}