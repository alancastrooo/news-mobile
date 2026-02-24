import { User, Settings, Bell, HelpCircle, LogOut } from "lucide-react";

const menuItems = [
  { icon: Bell, label: "Notificaciones", desc: "Configura tus alertas" },
  { icon: Settings, label: "Configuración", desc: "Personaliza la app" },
  { icon: HelpCircle, label: "Ayuda", desc: "Preguntas frecuentes" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border px-4 py-3">
        <div className="max-w-lg mx-auto">
          <h1 className="text-lg font-extrabold text-foreground">Perfil</h1>
        </div>
      </header>
      <main className="max-w-lg mx-auto px-4 pt-6 space-y-6">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full news-gradient flex items-center justify-center news-shadow">
            <User className="w-9 h-9 text-primary-foreground" />
          </div>
          <div className="text-center">
            <p className="font-bold text-foreground">Lector NewsMx</p>
            <p className="text-xs text-muted-foreground">Inicia sesión para personalizar</p>
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-3 w-full p-3.5 rounded-xl bg-card card-shadow text-left transition-all active:scale-[0.98]"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                <item.icon className="w-4 h-4 text-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-card-foreground">{item.label}</p>
                <p className="text-[11px] text-muted-foreground">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-[10px] text-muted-foreground pt-4">
          NewsMx Tv® v1.0.0
        </p>
      </main>
    </div>
  );
}
