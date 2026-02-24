import { NewsArticle, Category } from "@/types/news";

export const mockCategories: Category[] = [
  { id: "politica", name: "Política", icon: "🏛️", count: 24 },
  { id: "economia", name: "Economía", icon: "📈", count: 18 },
  { id: "deportes", name: "Deportes", icon: "⚽", count: 31 },
  { id: "tecnologia", name: "Tecnología", icon: "💻", count: 12 },
  { id: "cultura", name: "Cultura", icon: "🎭", count: 15 },
  { id: "seguridad", name: "Seguridad", icon: "🔒", count: 20 },
  { id: "salud", name: "Salud", icon: "🏥", count: 9 },
  { id: "entretenimiento", name: "Entretenimiento", icon: "🎬", count: 22 },
];

export const mockArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Reforma energética avanza en el Congreso con amplio apoyo legislativo",
    summary: "La iniciativa busca modernizar el sector eléctrico nacional con inversiones en energías renovables y nueva infraestructura.",
    content: "La Cámara de Diputados aprobó en lo general la reforma energética que busca transformar el panorama eléctrico del país. Con 342 votos a favor, la iniciativa contempla inversiones millonarias en parques solares y eólicos, así como la modernización de la red de transmisión eléctrica nacional.\n\nEl presidente de la Comisión de Energía destacó que esta reforma posicionará a México como líder regional en energías limpias. \"Estamos sentando las bases para un futuro sustentable\", declaró durante la sesión plenaria.\n\nLos puntos más relevantes incluyen:\n\n• Inversión de $50,000 millones en infraestructura renovable\n• Creación de 200,000 empleos directos en el sector\n• Reducción del 40% en emisiones de carbono para 2030\n• Modernización de la red eléctrica nacional\n\nAnalistas consideran que la reforma tendrá un impacto positivo en la atracción de inversión extranjera y en la competitividad industrial del país.",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    category: "politica",
    author: "María González",
    publishedAt: "2026-02-24T10:30:00Z",
    readTime: 5,
    isFeatured: true,
  },
  {
    id: "2",
    title: "Selección Mexicana clasifica al Mundial con victoria histórica",
    summary: "Con un marcador de 3-1, el Tri aseguró su lugar en la próxima Copa del Mundo tras una actuación memorable.",
    content: "La Selección Mexicana de fútbol logró su clasificación al Mundial con una contundente victoria. Los goles fueron obra de jugadores que brillaron en una noche mágica en el Estadio Azteca ante más de 85,000 aficionados.\n\nEl director técnico señaló que el equipo mostró madurez y determinación. La afición celebró en las calles hasta altas horas de la madrugada.",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    category: "deportes",
    author: "Carlos Méndez",
    publishedAt: "2026-02-24T08:15:00Z",
    readTime: 4,
    isFeatured: true,
  },
  {
    id: "3",
    title: "Peso mexicano se fortalece frente al dólar en jornada positiva",
    summary: "La moneda nacional alcanzó su mejor nivel en meses impulsada por datos económicos favorables.",
    content: "El peso mexicano cerró la jornada con una apreciación significativa frente al dólar estadounidense, alcanzando niveles no vistos en los últimos seis meses. Los analistas atribuyen este comportamiento a los sólidos datos de empleo y manufactura publicados recientemente.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    category: "economia",
    author: "Ana Ruiz",
    publishedAt: "2026-02-23T16:45:00Z",
    readTime: 3,
  },
  {
    id: "4",
    title: "Nueva plataforma de inteligencia artificial desarrollada en México",
    summary: "Startup mexicana lanza herramienta de IA que revoluciona la atención médica con diagnósticos más precisos.",
    content: "Una startup con sede en Guadalajara presentó una plataforma de inteligencia artificial diseñada para asistir a médicos en el diagnóstico de enfermedades. La herramienta utiliza aprendizaje profundo para analizar imágenes médicas con una precisión superior al 95%.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "tecnologia",
    author: "Roberto Luna",
    publishedAt: "2026-02-23T14:20:00Z",
    readTime: 6,
  },
  {
    id: "5",
    title: "Festival de cine mexicano rompe récord de asistencia",
    summary: "Más de 500,000 personas asistieron al evento cultural más importante del año en la Ciudad de México.",
    content: "El Festival Internacional de Cine de la Ciudad de México cerró su edición más exitosa con cifras récord de asistencia. Las proyecciones al aire libre en el Zócalo capitalino fueron el punto más destacado del evento.",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    category: "cultura",
    author: "Laura Díaz",
    publishedAt: "2026-02-23T11:00:00Z",
    readTime: 4,
  },
  {
    id: "6",
    title: "Operativo de seguridad reduce índices delictivos en zona metropolitana",
    summary: "Las autoridades reportan una disminución del 30% en incidentes gracias al nuevo programa de vigilancia.",
    content: "El gobierno estatal presentó los resultados del operativo de seguridad implementado hace tres meses en la zona metropolitana. Los datos muestran una reducción significativa en diversos tipos de delitos.",
    imageUrl: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=800&q=80",
    category: "seguridad",
    author: "Pedro Vargas",
    publishedAt: "2026-02-22T09:30:00Z",
    readTime: 3,
  },
  {
    id: "7",
    title: "Nuevo tratamiento contra diabetes muestra resultados prometedores",
    summary: "Investigadores del IPN desarrollan terapia innovadora que podría beneficiar a millones de pacientes.",
    content: "Un equipo de investigadores del Instituto Politécnico Nacional presentó los resultados de un ensayo clínico de fase 2 para un nuevo tratamiento contra la diabetes tipo 2. La terapia mostró una reducción del 45% en los niveles de glucosa en sangre.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "salud",
    author: "Dra. Carmen Flores",
    publishedAt: "2026-02-22T07:15:00Z",
    readTime: 5,
  },
  {
    id: "8",
    title: "Serie mexicana de Netflix conquista audiencias internacionales",
    summary: "La producción nacional se posiciona en el top 10 global de la plataforma de streaming.",
    content: "Una nueva serie producida en México ha logrado posicionarse entre las más vistas a nivel mundial en Netflix. La producción cuenta con un elenco de actores reconocidos y aborda temas de actualidad social.",
    imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    category: "entretenimiento",
    author: "Sofía Martínez",
    publishedAt: "2026-02-21T18:00:00Z",
    readTime: 3,
  },
];

// API-ready service functions
export async function fetchArticles(category?: string): Promise<NewsArticle[]> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${API_BASE_URL}/articles?category=${category}`);
  // return response.json();
  
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  if (category) {
    return mockArticles.filter((a) => a.category === category);
  }
  return mockArticles;
}

export async function fetchArticleById(id: string): Promise<NewsArticle | undefined> {
  // TODO: Replace with actual API call
  // const response = await fetch(`${API_BASE_URL}/articles/${id}`);
  // return response.json();
  
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockArticles.find((a) => a.id === id);
}

export async function fetchCategories(): Promise<Category[]> {
  // TODO: Replace with actual API call
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockCategories;
}
