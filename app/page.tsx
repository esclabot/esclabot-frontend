export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6">Bienvenido a ESCLABOT</h1>
        <p className="text-xl mb-4">Conoce el negocio. Conversa. Vende. Ejecuta.</p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Empezar
        </button>
      </div>
    </main>
  )
}
