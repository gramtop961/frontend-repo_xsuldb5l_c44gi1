export default function Gallery() {
  const items = [
    { id: 1, emoji: '🦆', bg: 'bg-yellow-100' },
    { id: 2, emoji: '🎩', bg: 'bg-blue-100' },
    { id: 3, emoji: '💬', bg: 'bg-sky-100' },
    { id: 4, emoji: '🌟', bg: 'bg-amber-100' },
    { id: 5, emoji: '📺', bg: 'bg-cyan-100' },
    { id: 6, emoji: '🎶', bg: 'bg-indigo-100' },
  ]

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Galeria</h2>
          <p className="mt-3 text-gray-600">Toques divertidos em um mural colorido.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(item => (
            <div key={item.id} className={`aspect-square rounded-2xl ${item.bg} grid place-items-center text-4xl sm:text-5xl shadow-sm`}>
              <span className="select-none">{item.emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
