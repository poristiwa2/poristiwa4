import { categories, timeAgo, type Article } from '../data/mockData';

interface ArticleCardProps {
  article: Article;
  variant?: 'hero' | 'standard' | 'compact' | 'horizontal';
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export default function ArticleCard({ article, variant = 'standard', onNavigate }: ArticleCardProps) {
  const cat = categories.find(c => c.id === article.category);

  if (variant === 'hero') {
    return (
      <article
        className="group cursor-pointer relative rounded-xl overflow-hidden"
        onClick={() => onNavigate('article', { slug: article.slug })}
      >
        <div className={`${article.gradient} aspect-[16/9] md:aspect-[21/9]`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
            {cat && (
              <span
                className="inline-block px-2.5 py-1 text-xs font-bold text-white rounded-md mb-3"
                style={{ backgroundColor: cat.color }}
              >
                {cat.name}
              </span>
            )}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2 md:mb-3 group-hover:text-red-300 transition line-clamp-3 font-serif">
              {article.title}
            </h2>
            <p className="text-sm md:text-base text-gray-200 line-clamp-2 mb-3 hidden sm:block">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="font-medium">{article.source}</span>
              <span>•</span>
              <span>{timeAgo(article.publishedAt)}</span>
              <span>•</span>
              <span>{article.readTime} mnt baca</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article
        className="group cursor-pointer flex gap-3 py-3 border-b border-gray-100 last:border-0"
        onClick={() => onNavigate('article', { slug: article.slug })}
      >
        <div className={`${article.gradient} w-20 h-20 rounded-lg shrink-0`} />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-brand transition line-clamp-2 leading-snug">
            {article.title}
          </h4>
          <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-400">
            <span>{article.source}</span>
            <span>•</span>
            <span>{timeAgo(article.publishedAt)}</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <article
        className="group cursor-pointer flex gap-4 py-4 border-b border-gray-100 last:border-0"
        onClick={() => onNavigate('article', { slug: article.slug })}
      >
        <div className={`${article.gradient} w-32 h-24 md:w-40 md:h-28 rounded-lg shrink-0`} />
        <div className="flex-1 min-w-0">
          {cat && (
            <span className="text-xs font-bold uppercase tracking-wider mb-1 block" style={{ color: cat.color }}>
              {cat.name}
            </span>
          )}
          <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-brand transition line-clamp-2 leading-snug">
            {article.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2 hidden md:block">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
            <span className="font-medium">{article.source}</span>
            <span>•</span>
            <span>{timeAgo(article.publishedAt)}</span>
          </div>
        </div>
      </article>
    );
  }

  // Standard card
  return (
    <article
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
      onClick={() => onNavigate('article', { slug: article.slug })}
    >
      <div className={`${article.gradient} aspect-[16/10] relative`}>
        {article.breaking && (
          <div className="absolute top-3 left-3 bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Breaking
          </div>
        )}
      </div>
      <div className="p-4">
        {cat && (
          <span className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: cat.color }}>
            {cat.name}
          </span>
        )}
        <h3 className="text-base font-bold text-gray-900 group-hover:text-brand transition line-clamp-2 leading-snug mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-500">{article.source}</span>
            <span>•</span>
            <span>{timeAgo(article.publishedAt)}</span>
          </div>
          <span>{article.readTime} mnt</span>
        </div>
      </div>
    </article>
  );
}
