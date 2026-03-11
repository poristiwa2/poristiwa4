import { useState, useEffect } from 'react';
import { categories, getBreakingNews, getTodayDate } from '../data/mockData';

interface HeaderProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const breakingNews = getBreakingNews();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('search', { q: searchQuery.trim() });
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navTo = (page: string, params?: Record<string, string>) => {
    onNavigate(page, params);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
          <span>{getTodayDate()}</span>
          <div className="flex items-center gap-4">
            <button onClick={() => navTo('tentang')} className="hover:text-red-400 transition">Tentang</button>
            <button onClick={() => navTo('redaksi')} className="hover:text-red-400 transition">Redaksi</button>
            <button onClick={() => navTo('kontak')} className="hover:text-red-400 transition">Kontak</button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-shadow duration-300 bg-white ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 -ml-2 text-gray-700"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Logo */}
            <button onClick={() => navTo('home')} className="flex items-center gap-1.5">
              <div className="w-8 h-8 md:w-9 md:h-9 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg md:text-xl font-serif">P</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-xl font-black tracking-tight text-navy">
                  PORI<span className="text-brand">STIWA</span>
                </span>
                <span className="text-[8px] md:text-[9px] text-gray-400 tracking-[0.2em] uppercase hidden sm:block">Portal Berita Terkini</span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {categories.slice(0, 8).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => navTo('category', { slug: cat.slug })}
                  className={`cat-underline px-2.5 py-1.5 text-sm font-medium transition rounded-md hover:bg-gray-50 ${
                    currentPage === `category-${cat.slug}` ? 'text-brand' : 'text-gray-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
              <div className="relative group">
                <button className="px-2.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md flex items-center gap-1">
                  Lainnya
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {categories.slice(8).map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => navTo('category', { slug: cat.slug })}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Search */}
            <div className="flex items-center gap-2">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Cari berita..."
                    className="w-40 md:w-56 px-3 py-1.5 text-sm border border-gray-200 rounded-l-lg focus:outline-none focus:border-brand"
                    autoFocus
                  />
                  <button type="submit" className="px-3 py-1.5 bg-brand text-white rounded-r-lg text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button type="button" onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="ml-1 p-1.5 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </form>
              ) : (
                <button onClick={() => setSearchOpen(true)} className="p-2 text-gray-600 hover:text-brand transition" aria-label="Cari">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Breaking news ticker */}
        {breakingNews.length > 0 && (
          <div className="bg-brand text-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex items-center">
              <div className="bg-brand-dark px-3 py-1.5 text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Breaking
              </div>
              <div className="overflow-hidden flex-1">
                <div className="ticker-animate flex whitespace-nowrap py-1.5">
                  {[...breakingNews, ...breakingNews].map((article, i) => (
                    <button
                      key={`${article.id}-${i}`}
                      onClick={() => navTo('article', { slug: article.slug })}
                      className="text-xs font-medium mx-8 hover:underline cursor-pointer"
                    >
                      {article.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <button onClick={() => navTo('home')} className="flex items-center gap-1.5">
                  <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-lg font-serif">P</span>
                  </div>
                  <span className="text-lg font-black tracking-tight text-navy">PORI<span className="text-brand">STIWA</span></span>
                </button>
                <button onClick={() => setMenuOpen(false)} className="p-1 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="py-2">
              <button onClick={() => navTo('home')} className="block w-full text-left px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 border-b border-gray-50">
                🏠 Beranda
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => navTo('category', { slug: cat.slug })}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand border-b border-gray-50"
                >
                  <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: cat.color }} />
                  {cat.name}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-100 space-y-2">
              <button onClick={() => navTo('tentang')} className="block text-sm text-gray-500 hover:text-brand">Tentang Kami</button>
              <button onClick={() => navTo('redaksi')} className="block text-sm text-gray-500 hover:text-brand">Redaksi</button>
              <button onClick={() => navTo('kontak')} className="block text-sm text-gray-500 hover:text-brand">Kontak</button>
              <button onClick={() => navTo('privasi')} className="block text-sm text-gray-500 hover:text-brand">Kebijakan Privasi</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
