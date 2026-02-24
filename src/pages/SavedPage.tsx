import { Bookmark } from "lucide-react";

export default function SavedPage() {
  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 py-3">
        <div className="max-w-lg mx-auto">
          <h1 className="text-lg font-extrabold text-foreground">Guardados</h1>
          <p className="text-[10px] text-muted-foreground font-medium">Tus noticias favoritas</p>
        </div>
      </header>
      <main className="max-w-lg mx-auto px-4 flex flex-col items-center justify-center py-20 gap-3">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
          <Bookmark className="w-7 h-7 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Aún no tienes noticias guardadas.<br />
          Toca el ícono de marcador en cualquier noticia.
        </p>
      </main>
    </div>
  );
}
