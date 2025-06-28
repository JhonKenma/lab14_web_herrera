import Head from "next/head";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio SEO</title>
        <meta name="description" content="Explora artículos sobre SEO y Next.js." />
        <meta property="og:title" content="Blog de Next.js y SEO" />
        <meta property="og:description" content="Aprende sobre rendimiento web y mejores prácticas SEO." />
        <meta property="og:image" content="/images/blog-preview.png" />
      </Head>
      <main className="p-4">
        <h1>Blog</h1>
        <p>Bienvenido al blog técnico del sitio.</p>
      </main>
    </>
  );
}
