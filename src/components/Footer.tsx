export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 px-36 py-8 flex flex-col gap-6">
      <div className="flex justify-between items-center text-xs text-zinc-700">
        <p>&copy; {currentYear} João da Construção. Todos os direitos reservados.</p>
        <p className="text-orange-600">O melhor da construção para construir os seus sonhos.</p>
      </div>
    </footer>
  );
}
