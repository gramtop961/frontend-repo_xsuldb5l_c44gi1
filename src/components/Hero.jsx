import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-blue-50 via-white to-yellow-50">
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-32 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-yellow-200/60 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold">Novo • Universo dos patos</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-gray-900">
            Aventuras do Pato mais famoso do mundo
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Mergulhe em um mundo de humor, trapalhadas e muita nostalgia. Explore histórias, curiosidades e momentos icônicos.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold shadow-sm transition">Explorar</a>
            <a href="#galeria" className="inline-flex items-center justify-center rounded-lg bg-white hover:bg-gray-50 text-gray-900 px-5 py-3 font-semibold shadow-sm ring-1 ring-gray-200 transition">Ver Galeria</a>
          </div>
          <div className="mt-6 text-xs text-gray-500">Não afiliado a marcas registradas. Conteúdo de fã.</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-[40%_60%_65%_35%/60%_40%_60%_40%] bg-gradient-to-br from-blue-500 via-blue-400 to-yellow-300 shadow-2xl" />
            <div className="absolute -inset-1 rounded-[40%_60%_65%_35%/60%_40%_60%_40%] bg-gradient-to-br from-blue-500 via-blue-400 to-yellow-300 blur-2xl opacity-30" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-7xl sm:text-8xl select-none">🦆</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
