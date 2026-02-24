# 📱 NewsMx TV – Mobile App

Aplicación móvil de prueba para **NewsMx TV**, desarrollada como proyecto académico de residencias.

Construida con tecnologías modernas para aplicaciones híbridas multiplataforma.

---

---

## 📂 Repositorio

🔗 https://github.com/alancastrooo/news-mobile

---

# 🚀 Instalación y ejecución

Sigue estos pasos para correr el proyecto en un emulador Android.

---

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/alancastrooo/news-mobile.git
cd news-mobile
```

---

## 2️⃣ Instalar dependencias

```bash
npm install
```

---

## 3️⃣ Generar el build web

```bash
npm run build
```

---

## 4️⃣ Agregar la plataforma Android (solo la primera vez)

```bash
npx cap add android
```

---

## 5️⃣ Sincronizar cambios

```bash
npx cap sync
```

---

## 6️⃣ Ejecutar en emulador Android

Asegúrate de tener abierto un emulador desde Android Studio.

Luego ejecuta:

```bash
npx cap run android
```

---

# ⚙️ Requisitos previos

Antes de ejecutar el proyecto debes tener instalado:

- Node.js (v18 o superior)
- npm
- Android Studio
- Android SDK
- Un emulador Android configurado y activo

---

# 📦 Generar APK

Para abrir el proyecto en Android Studio:

```bash
npx cap open android
```

Dentro de Android Studio:

Build → Build APK

---

# 📌 Configuración importante

El archivo `capacitor.config.ts` debe contener:

```ts
appId: 'com.alancastro.newsmobile'
appName: 'NewsMxTv'
webDir: 'dist'
```

---

Proyecto de Residencias Profesionales