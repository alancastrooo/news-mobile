import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "@/services/newsService";
import { Category } from "@/types/news";
import { ChevronRight, Loader2 } from "lucide-react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 py-3">
        <div className="max-w-lg mx-auto">
          <h1 className="text-lg font-extrabold text-foreground">Categorías</h1>
          <p className="text-[10px] text-muted-foreground font-medium">
            Explora noticias por tema
          </p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-4">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/?categoria=${cat.id}`)}
                className="flex flex-col items-start p-4 rounded-xl bg-card card-shadow transition-all active:scale-[0.97] animate-slide-up"
                style={{ animationDelay: `${i * 60}ms`, animationFillMode: "backwards" }}
              >
                <span className="text-2xl mb-2">{cat.icon}</span>
                <span className="text-sm font-bold text-card-foreground">{cat.name}</span>
                <span className="text-[11px] text-muted-foreground mt-0.5">
                  {cat.count} noticias
                </span>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
