# Secciones del sitio

La home es corta: vende y deriva. El catálogo, la ficha, las guías y los combos viven en su propia ruta. El copy es voseo, corto, sin claims médicos inventados.

Datos que todavía hay que completar antes de publicar: número de WhatsApp, dirección exacta del local y el mapa. Los horarios que ya están en las referencias son lunes a viernes, de 9:00 a 13:00 y de 17:00 a 21:00.

## Home

Orden fijo. Cada bloque tiene una sola tarea.

### 1. Hero

Fondo de madera (`fondo-hero`). Logo con el neón recorriendo el borde. Nada de párrafo largo.

- Título corto, una idea.
- CTA primario: **Ver catálogo** → `/catalogo`.
- CTA secundario: **Pedir por WhatsApp** → chat con un mensaje general de consulta, no de un producto.

### 2. Combos

Bloque propio, justo debajo del hero. En Instagram ya son un highlight, así que no se mezclan con los destacados.

El bloque va sobre papel (`#f6f3ea`), con el texto en tinta. Cada combo, cuando esté cargado, muestra los productos del pack, el precio especial y el ahorro si existe. CTA: pedirlo por WhatsApp con el nombre del combo ya escrito, o ir a `/combos` cuando esa página exista.

Si la lista crece, este bloque queda como vista previa y el resto pasa a `/combos`.

### 3. Beneficios

Una franja, tres hechos. Es lo que más piden.

- Envíos a Mendoza sin cargo.
- Atención por WhatsApp.
- Asesoramiento.

Sin iconos decorativos de más. Cada ítem puede abrir WhatsApp o bajar a “Dónde encontrarnos”.

### 4. Categorías

Seis cards grandes. Cada una va a `/catalogo?categoria=<slug>`.

| Card | Slug | Qué entra |
| --- | --- | --- |
| Proteínas | `proteinas` | Whey y proteínas |
| Creatina | `creatina` | Creatina |
| Pre-entreno | `pre-entreno` | Pre-entreno |
| Salud y vitaminas | `salud-vitaminas` | Omega 3, NAD y vitaminas |
| Energía | `energia` | Geles |
| Ropa y accesorios | `ropa-accesorios` | Ropa y accesorios |

La card muestra nombre y una foto de la categoría. No lista productos adentro.

### 5. Destacados

Máximo 8 productos. Card con foto, nombre, marca y precio. El clic va a `/producto/<slug>`.

Abajo, un solo botón: **Ver todo el catálogo** → `/catalogo`.

### 6. Separador

Franja a sangre, foto oscura, tipografía de cartel. Se puede repetir una segunda vez más abajo, nunca dos veces seguidas.

Frases, una por vez:

- ENTRENA / SIN EXCUSAS
- FUERZA / SAMURAI
- DISCIPLINA / SAMURAI

No llevan botón. Separan. No se autoavanzan.

### 7. Guías “Cómo tomarlo”

Tres cards: creatina, proteína, omega 3. Cada una abre su artículo en `/guias`.

Al pie, un link: **Ver todas las guías** → `/guias`.

### 8. Clientes

Carrusel. Cada slide tiene foto, nombre y una frase de esa persona. Nada de métricas inventadas. En la home alcanzan unos pocos.

### 9. Dónde encontrarnos

- Horarios: lunes a viernes, 9:00 a 13:00 y 17:00 a 21:00.
- Mapa del local, cuando esté la dirección.
- WhatsApp.

### 10. Footer

Marca, links a catálogo, guías, combos y local, horarios en una línea, Instagram y WhatsApp.

### 11. WhatsApp flotante

Botón fijo, visible en todas las páginas. En la home manda un saludo general. En una ficha, el mensaje ya nombra ese producto.

## Catálogo — `/catalogo`

Todo el stock cargado.

- Buscador.
- Filtros: categoría, objetivo (masa muscular, energía, salud), marca, precio.
- Orden.
- Paginación o “cargar más”. Una de las dos, no las dos.

`/catalogo?categoria=proteinas` (y el resto de los slugs de arriba) abre el filtro ya aplicado. El título de la página dice qué categoría es.

Card igual a la de destacados: foto, nombre, marca, precio, link a la ficha.

## Producto — `/producto/<slug>`

- Fotos.
- Nombre, marca, precio.
- Descripción.
- Beneficios, solo los que el producto ya declara.
- Cómo tomarlo: modo de uso.
- Productos relacionados.
- **Pedir por WhatsApp** con el mensaje armado. Ejemplo: “Hola! Quiero el Omega 3 de Star Nutrition”.

Si no hay stock, el botón no promete envío. Dice que consulten disponibilidad.

## Guías — `/guias`

Artículos para leer y para SEO. Filtro por tema: creatina, proteína, pre-entreno, salud.

Cada artículo responde una pregunta concreta (“cómo tomar creatina”), con título, bajada y el texto. Desde la ficha de un producto se puede saltar a la guía de su categoría.

La home solo muestra tres entradas. El resto vive acá.

## Combos — `/combos`

Opcional. Se crea cuando no entren más en el bloque de la home. Misma card de pack: contenido, precio especial, WhatsApp con el nombre del combo.

## Embajadores — `/embajadores`

Opcional. Se crea si cada persona necesita más que la foto, el nombre y la frase del carrusel.

## WhatsApp

Un solo número, en un solo lugar de la config. El mensaje cambia según la página:

- Home, catálogo, guías, local: consulta general.
- Producto: “Hola! Quiero el {producto} de {marca}”.
- Combo: “Hola! Quiero el combo {nombre}”.
