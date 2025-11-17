export default function Footer() {
  return (
    <footer id="sobre" className="py-10 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center text-sm text-gray-600">
        <p>
          Projeto de fã feito para fins educacionais e de entretenimento. Não afiliado, patrocinado ou endossado por quaisquer detentores de marcas ou direitos autorais.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Duck Adventures</p>
      </div>
    </footer>
  )
}
