'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const navigation = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/works',
    label: 'Works',
  },
  {
    href: '/process',
    label: 'Process',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Botão para abrir o menu */}
      {!isMenuOpen && (
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Abrir menu"
          className="fixed right-3 bottom-3 z-50 rounded-xl bg-mauve-950 p-3 text-2xl text-white transition hover:scale-105 lg:hidden"
        >
          <HiOutlineMenu />
        </button>
      )}

      {/* Fundo escuro */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 lg:hidden ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-full max-w-sm p-3 text-white transition-transform duration-500 ease-in-out lg:relative lg:max-w-none lg:translate-x-0 lg:p-0 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative flex h-full flex-col overflow-y-auto rounded-2xl bg-mauve-950 px-6 py-8 sm:px-11 sm:py-12 lg:min-h-0 lg:rounded-none lg:px-11 lg:py-14">
          {/* Botão fechar */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Fechar menu"
            className="absolute top-4 right-4 rounded-xl p-3 text-2xl text-white transition hover:rotate-90 hover:bg-white/10 lg:hidden"
          >
            <HiOutlineX />
          </button>

          <header>
            <Link
              className="group inline-block font-serif text-3xl leading-9 font-extrabold tracking-tight"
              href="/"
              onClick={closeMenu}
            >
              <span className="transition-opacity duration-300 group-hover:opacity-70">
                Isabela M.
                <br />
                Ribeiro
              </span>
            </Link>
          </header>

          <nav aria-label="Navegação principal" className="mt-10 lg:mt-24">
            <ul className="flex flex-col gap-6">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      onClick={closeMenu}
                      href={item.href}
                      className={`group flex items-center gap-3 text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'translate-x-2 text-white'
                          : 'text-white/50 hover:translate-x-2 hover:text-white'
                      }`}
                    >
                      <span
                        className={`h-px bg-current transition-all duration-300 ${
                          isActive ? 'w-6' : 'w-0 group-hover:w-6'
                        }`}
                      />

                      <span>
                        <span className="mr-2 text-[10px] opacity-40">
                          0{index + 1}
                        </span>

                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <footer className="mt-auto">
            <div className="border-t border-white/10 pt-6">
              <p className="font-sans text-xs text-white/50">
                Front-end Developer
              </p>

              <p className="mt-1 text-xs text-white/30">
                © {new Date().getFullYear()}
              </p>
            </div>
          </footer>
        </div>
      </aside>
    </>
  );
}
