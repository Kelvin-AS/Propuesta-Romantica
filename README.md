# Página web romántica personalizable

Para cambiar las fotos en esta página web:

1. Abre el archivo `config.js`.
2. Encuentra el array `images` dentro del objeto `config`.
3. Reemplaza las URLs existentes con las URLs de tus propias imágenes.
4. Guarda el archivo `config.js`.
5. ¡Listo! Las nuevas imágenes aparecerán en la página web.

Ejemplo:

```javascript
const config = {
    images: [
        'https://tudominio.com/tu-foto-1.jpg',
        'https://tudominio.com/tu-foto-2.jpg',
        'https://tudominio.com/tu-foto-3.jpg'
    ]
};
