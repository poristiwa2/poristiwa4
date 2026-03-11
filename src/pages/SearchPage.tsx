import { searchArticles } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';

interface SearchPageProps {
  query: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export default function SearchPage({ query, onNavigate }: SearchPageProps) {
  const results = searchArticles(query);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10">
      <nav className="flex items-center gap-2 mb-6 text-sm">
        <button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-brand">Beranda</button>
        <span className="text-gray-300">/</span>
        <span className="text-gray-600 font-medium">Pencarian</span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-extrabold text-navy mb-2 font-serif">
        Hasil Pencarian
      </h1>
      <p className="text-gray-500 mb-6">
        {results.length} hasil ditemukan untuk "<span className="font-semibold text-navy">{query}</span>"
      </p>

      {results.length > 0 ? (
        <div className="space-y-0">
          {results.map(a => (
            <ArticleCard key={a.id} article={a} variant="horizontal" onNavigate={onNavigate} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-400 mb-2">Tidak ada hasil</h3>
          <p className="text-sm text-gray-400">Coba kata kunci lain atau jelajahi kategori berita kami.</p>
        </div>
      )}
    </div>
  );
}
