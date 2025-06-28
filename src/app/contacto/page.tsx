import Head from "next/head";

export default function ContactoPage() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio SEO</title>
        <meta name="description" content="Contáctanos para más información sobre nuestros servicios." />
        <meta property="og:title" content="Contacto | Mi Sitio SEO" />
        <meta property="og:description" content="Comunícate con nosotros fácilmente." />
        <meta property="og:image" content="/images/contact.png" />
      </Head>
      <main className="p-4">
        <h1>Contacto</h1>
        <p>Completa el formulario para comunicarte con nosotros.</p>
      </main>
    </>
  );
}
