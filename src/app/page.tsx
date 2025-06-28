import Head from "next/head";
import ClientHome from "./ClientHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio SEO</title>
        <meta name="description" content="Página principal con optimización SEO en Next.js." />
        <meta property="og:title" content="Inicio | Mi Sitio SEO" />
        <meta property="og:description" content="Página principal optimizada para buscadores." />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>
      <ClientHome />
    </>
  );
}
