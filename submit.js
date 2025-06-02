
// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-8">
      <Head>
        <title>Sozo Mojo Creative Contest</title>
        <meta name="description" content="Unleash your creative genius with Sozo Mojo. Enter our inaugural contest and be part of the artistic renaissance." />
      </Head>

      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">🔥 Sozo Mojo Creative Contest</h1>
        <p className="text-xl text-gray-300">Real art. Real rewards. Zero BS.</p>
      </header>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">💡 What’s This All About?</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We're tired of cookie-cutter contests and boring winners. Sozo Mojo is here to bring soul back to the art world. Enter your original work, inspire the world, and win big.
        </p>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">🎨 Categories</h2>
        <ul className="space-y-4">
          <li>📝 Poetry</li>
          <li>🎶 Music / Beats / Remixes</li>
          <li>🎥 Short Films & Visuals</li>
          <li>🖼️ Original Art / Design / Illustration</li>
        </ul>
      </section>

      <section className="text-center">
        <a
          href="/submit"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Submit Your Entry
        </a>
      </section>
    </div>
  );
}
