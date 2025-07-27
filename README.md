# RetroPlay Ecommerce

## Administrador por defecto
- **NAME**: Neil
- **EMAIL**: neil@admin.com
- **PASSWORD**: Pass1234

La creación de productos está disponible desde la sección *Mi Perfil* cuando se inicia sesión como administrador.

## Cómo ejecutar el proyecto
1. Desde la carpeta `serverApp` instala dependencias y arranca el backend:
   ```bash
   cd serverApp
   npm install
   npm start
   ```

   Asegúrate de crear un archivo `.env` con las variables de conexión a base de datos y credenciales de Cloudinary.

2. En otra terminal inicia el cliente React:
   ```bash
   cd clientApp
   npm install
   npm start
   ```

La aplicación estará disponible en `http://localhost:5173` y el servidor en `http://localhost:3000`.
