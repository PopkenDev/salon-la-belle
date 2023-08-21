import { useState } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      name: 'Home',
      path: "/",
    },
    {
      name: 'Behandelingen',
      path: "/behandelingen",
    },
    {
      name: 'Contact',
      path: "/contact",
    },
  ]

  function closeSideMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <Header />
      <nav className="bg-primary flex justify-end md:justify-center px-4">
        <button onClick={() => setIsMenuOpen(true)} className='md:hidden transform scale-x-[-1] text-gray-100 py-2'>
          <svg id='open-mobile-nav' className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M20 7H4m11 5H4m5 5H4"></path></svg>
        </button>
        <ul className="md:flex items-center justify-center hidden">
          {links.map(link => (
            <li key={link.name}><a className="nav-link py-3 px-12 text-gray-100 font-norma inline-block" href="#!">{link.name}</a></li>
          ))}
        </ul>
      </nav>
      {isMenuOpen && <SideMenu close={closeSideMenu} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} links={links} />}
    </>
  )
}