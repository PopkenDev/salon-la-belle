import logo from '../images/logo.png';

export default function SideMenu({ links, isMenuOpen, setIsMenuOpen, close }) {
  return (
    <aside onClick={close} className="slideInRight fixed bg-white w-64 z-[99] top-0 right-0 h-screen shadow-lg transition-all duration-300 ease-in-out">
      <nav className='py-6'>
        <button onClick={() => setIsMenuOpen(false)} className='absolute top-2 right-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256L400 145.49z"></path></svg>
        </button>
        <figure>
          <img className='w-52 mx-auto' src={logo} alt="Logo Salon la Belle" />
        </figure>
        <ul className='py-2 text-sm text-secondary'>
          {links.map(link => (
            <li key={link.name}><a href="#!" className="py-3 px-8 border-t w-full inline-block" >{link.name}</a></li>
          ))}
          <li><a href="#!" className="py-3 px-8 border-t w-full inline-block ">Afspraak maken</a></li>
          <li className='flex items-center gap-x-2 py-3 px-8 border-t'>
            <a href="#!" className="bg-primary p-1 text-gray-100">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" fill="currentColor" /></svg>
            </a>
            <a href="#!" className="bg-primary p-1 text-gray-100">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" /></svg>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}