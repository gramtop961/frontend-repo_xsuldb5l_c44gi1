import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold">🦆</span>
          <span className="text-lg font-bold tracking-tight">Duck Adventures</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-blue-600 transition">Recursos</a>
          <a href="#galeria" className="hover:text-blue-600 transition">Galeria</a>
          <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-black/5 active:scale-95 transition" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
