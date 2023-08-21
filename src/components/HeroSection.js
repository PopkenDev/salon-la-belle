export default function HeroSection() {
  return (
    <section className="bg-black/40 relative">
      <div className="hero-background">
      </div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center h-full w-full absolute top-0 left-[50%] -translate-x-[50%] z-30">
        <p className="EBGaramond text-white uppercase text-lg mb-8 flex items-center gap-x-2"><span className="h-[1px] w-36 bg-white"></span>Welkom bij</p>
        <h1 className="greatVibes text-white text-clamp drop-shadow-lg mb-8">Salon La Belle</h1>
        <a href="#!" className="flex items-center gap-x-1 bg-primary text-secondary text-sm px-4 py-2 max-w-fit hover:text-gray-100 transition-colors duration-300 ease-in-out">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Zm7 6q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18Z"></path></svg>
          </span>
          Afspraak maken
        </a>
      </div>
    </section>
  )
}