import { useState, useEffect } from "react";
import { fetchArticles } from "@/services/newsService";
import { NewsArticle } from "@/types/news";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import FeaturedCard from "@/components/FeaturedCard";
import NewsCard from "@/components/NewsCard";
import PullToRefreshIndicator from "@/components/PullToRefreshIndicator";
import { mockCategories } from "@/services/newsService";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const loadArticles = async () => {
    const data = await fetchArticles(activeCategory ?? undefined);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    loadArticles();
  }, [activeCategory]);

  const { isRefreshing, pullDistance, handlers } = usePullToRefresh({
    onRefresh: loadArticles,
  });

  const featured = articles.filter((a) => a.isFeatured);
  const regular = articles.filter((a) => !a.isFeatured);

  return (
    <div
      className="min-h-screen pb-20 overflow-y-auto"
      {...handlers}
    >
      <PullToRefreshIndicator pullDistance={pullDistance} isRefreshing={isRefreshing} />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 py-3">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-foreground">
              News<span className="text-primary">Mx</span> Tv
            </h1>
            <p className="text-[10px] text-muted-foreground font-medium -mt-0.5">
              Noticias confiables de México
            </p>
          </div>
          <div className="w-8 h-8 rounded-full news-gradient flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">N</span>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-4 space-y-5">
        {/* Category chips */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === null
                ? "news-gradient text-primary-foreground news-shadow"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            Todas
          </button>
          {mockCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? "news-gradient text-primary-foreground news-shadow"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured.length > 0 && !activeCategory && (
              <section className="space-y-3">
                <h2 className="text-sm font-bold text-foreground">Destacadas</h2>
                <div className="space-y-3">
                  {featured.map((article, i) => (
                    <div key={article.id} className="animate-slide-up" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "backwards" }}>
                      <FeaturedCard article={article} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Recent news */}
            <section className="space-y-3">
              <h2 className="text-sm font-bold text-foreground">
                {activeCategory ? "Noticias" : "Recientes"}
              </h2>
              <div className="space-y-2.5">
                {(activeCategory ? articles : regular).map((article, i) => (
                  <div key={article.id} className="animate-slide-up" style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}>
                    <NewsCard article={article} />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
