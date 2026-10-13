# 🛒 Catálogo Digital · Pedidos por WhatsApp

Proyecto demo con **3 catálogos listos** (taquería, tienda y barbería) más
landing de showcase. Sin frameworks, sin build, sin dependencias.

Cada demo incluye catálogo, carrito, checkout y botón que abre WhatsApp con
el pedido **formateado y listo para enviar**.

---

## ⚡ Cómo probarlo

Abre `index.html` en tu navegador (doble click) y listo. También puedes
abrir cada demo por separado:

- `taqueria.html` → Taquería El Corazón
- `tienda.html` → Abarrotes Doña Mary
- `barberia.html` → Barbería El Navajazo

> 💡 Los números de WhatsApp de los demos son ficticios.
> Reemplázalos antes de ponerlo en producción.

---

## 🎨 Personalizarlo para tu negocio

Todo lo que necesitas tocar está en **un solo archivo**: `app.js`.

### 1. Cambiar los datos del negocio

Busca la entrada de tu demo en el objeto `DEMOS`:

```js
taqueria: {
  name: "Taquería El Corazón",     // Nombre del negocio
  tagline: "Sabor que se lleva al alma 🌮",
  emoji: "🌮",
  phone: "5215512345678",         // ⚠️ 52 + 10 dígitos, sin espacios
  address: "Av. Insurgentes Sur 123, CDMX",
  hours: "Mar–Dom · 18:00 – 02:00",
  delivery: 25,                  // Costo de envío (0 = gratis siempre)
  freeDeliveryOver: 300,         // Envío gratis a partir de $X (0 = sin promo)
  promo: "¡Promo 2x1 en tacos al pastor los martes!",
  categories: ["Tacos", "Tortas", "Antojitos", "Bebidas"],
  products: [ /* … */ ]
}
```

### 2. Cambiar el número de WhatsApp

El `phone` debe venir en formato internacional **sin el símbolo `+`** ni
espacios, sólo dígitos. Para el número `+52 55 1234 5678`:

```
phone: "5215512345678"   // 52 (país) + 55 (lada) + 12345678
```

### 3. Editar productos

```js
{ id: "t1", cat: "Tacos", name: "Taco al Pastor",
  desc: "3 piezas con piña, cebolla y cilantro",
  price: 45, emoji: "🌮" }
```

- `id`: identificador único (cualquier string).
- `cat`: debe coincidir con una categoría definida arriba.
- `price`: número entero en pesos mexicanos.
- `emoji`: imagen del producto (puedes cambiar por una URL si tienes fotos).

### 4. Agregar más demos

1. Copia `taqueria.html` → `migrannegocio.html`.
2. Cambia `<body class="demo taqueria" data-demo="taqueria">` por
   `<body class="demo minegocio" data-demo="minegocio">`.
3. Agrega la entrada `minegocio: { … }` en `DEMOS` dentro de `app.js`.
4. (Opcional) Agrega un tema en `styles.css`:

```css
body.minegocio {
  --primary: #tuColor;
  --primary-soft: #tuColorSuave;
}
```

### 5. Cambiar el mensaje de WhatsApp

Edita la función `placeOrder()` dentro de `app.js`. El mensaje se construye
línea por línea y luego se codifica para la URL de WhatsApp:

```js
const url = `https://wa.me/${currentDemo.phone}?text=${encodeURIComponent(msg)}`;
window.open(url, "_blank");
```

---

## 🚀 Desplegarlo en internet (gratis)

El proyecto es 100% estático. Súbelo a **Netlify Drop**,
**Vercel**, **GitHub Pages**, **Cloudflare Pages** o cualquier hosting.

### Opción rápida: Netlify Drop
1. Entra a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta del proyecto
3. ¡Listo! Te da una URL pública en segundos.

---

## 📁 Estructura

```
proyecto/
├── index.html      → Landing de showcase
├── taqueria.html   → Demo 1: Taquería
├── tienda.html     → Demo 2: Tienda de abarrotes
├── barberia.html   → Demo 3: Barbería
├── styles.css      → Estilos (temas por demo)
├── app.js          → Datos + lógica (aquí personalizas)
└── README.md       → Esta guía
```

---

## ✨ Funciones incluidas

- 📱 **Mobile-first** responsive (probado en iPhone / Android)
- 🛒 **Carrito persistente** durante la sesión
- 🏪🛵 **Recoger o a domicilio**
- 💵 **Efectivo, transferencia o tarjeta**
- 📝 **Notas del pedido** (ej. "sin cebolla", "jueves 5pm")
- 🎁 **Envío gratis condicional** con barra de progreso
- 🧾 **Mensaje de WhatsApp formateado** con nombre, desglose, envío, total
  y método de pago
- 🎨 **3 temas** listos (rojo/taquería, azul/tienda, negro-dorado/barbería)
- ⚡ **Sin frameworks, sin build** → carga instantánea

---

Hecho con ❤️ · Listo para personalizar y desplegar.