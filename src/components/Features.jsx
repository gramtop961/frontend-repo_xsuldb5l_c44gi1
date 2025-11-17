import { Star, Sparkles, Camera } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Star className="h-5 w-5" />,
      title: 'Momentos Icônicos',
      desc: 'Reviva cenas clássicas que marcaram gerações com humor e personalidade.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Curiosidades',
      desc: 'Explore fatos divertidos, bastidores e easter eggs do universo dos patos.'
    },
    {
      icon: <Camera className="h-5 w-5" />,
      title: 'Galeria Visual',
      desc: 'Uma seleção de imagens e fan arts cheias de cores e nostalgia.'
    }
  ]

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">O que você vai encontrar</h2>
          <p className="mt-3 text-gray-600">Um cantinho especial feito por fãs para fãs.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition bg-gradient-to-br from-white to-blue-50/40">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600 text-white mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
