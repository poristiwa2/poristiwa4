import { getArticlesByCategory, getCategoryBySlug } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import AdSlot from '../components/AdSlot';

interface CategoryPageProps {
  slug: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export default function CategoryPage({ slug, onNavigate }: CategoryPageProps) {
  const category = getCategoryBySlug(slug);
  const categoryArticles = getArticlesByCategory(slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-400 mb-4">Kategori tidak ditemukan</h1>
        <button onClick={() => onNavigate('home')} className="text-brand font-semibold hover:underline">
          ← Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
      {/* Category Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-2 mb-1">
          <button onClick={() => onNavigate('home')} className="text-sm text-gray-400 hover:text-brand">Beranda</button>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-medium" style={{ color: category.color }}>{category.name}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-navy flex items-center gap-3">
          <span className="w-1.5 h-8 rounded-full" style={{ backgroundColor: category.color }} />
          {category.name}
        </h1>
        <p className="text-gray-500 mt-1 text-sm md:text-base">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Articles */}
        <div className="lg:col-span-2">
          {categoryArticles.length > 0 ? (
            <>
              {/* Featured article */}
              <div className="mb-6">
                <ArticleCard article={categoryArticles[0]} variant="hero" onNavigate={onNavigate} />
              </div>

              {/* Article list */}
              <div className="space-y-0">
                {categoryArticles.slice(1).map((a, i) => (
                  <div key={a.id}>
                    <ArticleCard article={a} variant="horizontal" onNavigate={onNavigate} />
                    {i === 2 && <AdSlot zone="6851037" type="inpage" className="my-4" />}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Belum ada berita dalam kategori ini</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <AdSlot zone="6850989" type="banner" />
          <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <h3 className="text-lg font-extrabold text-navy mb-4">Berita Terkait</h3>
            {categoryArticles.slice(0, 5).map(a => (
              <ArticleCard key={a.id} article={a} variant="compact" onNavigate={onNavigate} />
            ))}
          </div>
          <div className="sticky top-20">
            <AdSlot zone="6851061" type="banner" />
          </div>
        </aside>
      </div>
    </div>
  );
}
