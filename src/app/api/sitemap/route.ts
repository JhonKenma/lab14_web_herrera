const BASE_URL = "https://mi-sitio.com"; // Cambiar al dominio real

export async function GET() {
  // Simular rutas dinámicas desde una base de datos
  const dynamicRoutes = ["/blog/articulo-1", "/blog/articulo-2"];
  const staticRoutes = ["/", "/blog", "/contacto"];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
    .map((url) => `  <url><loc>${BASE_URL}${url}</loc></url>`)
    .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
