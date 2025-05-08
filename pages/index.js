import Head from 'next/head';
import Link from 'next/link';
import products from '../data/products.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <Head>
        <title>Beleza & Bem-Estar</title>
      </Head>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Transforme sua beleza e bem-estar!</h1>
        <p className="text-lg mb-6">Produtos selecionados para saúde, estética e qualidade de vida.</p>
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec7b3429b54b"
          alt="Beleza e bem-estar"
          className="rounded-2xl shadow-xl mx-auto mb-8 max-h-[400px] object-cover"
        />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-2xl shadow">
              <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="font-bold text-green-600">{product.price}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="block mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Comprar</a>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/admin" className="text-sm text-blue-500 underline">Área do administrador</Link>
        </div>
      </div>
    </div>
  );
}
