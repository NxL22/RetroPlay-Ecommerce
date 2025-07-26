# Reporte Mini de Auditoría

## Bugs Detectados

### P0 (Críticos)
- Varios archivos contienen texto residual de la consola (`root@...`) provocando errores de compilación.
- `sequelize.sync({ force: true })` elimina tablas en cada arranque.
- Componentes usan campos inexistentes (`nombre`, `descripcion`) rompiendo la carga de productos.
- En `MiPerfil` se envía la imagen convertida a DataURL en lugar de un `File` válido.

### P1 (Importantes)
- Falta la función `deleteProfileImage` usada en `user.service.js`.
- README carece de instrucciones para levantar el proyecto.
- Código de manejo de imágenes y estilos disperso y repetitivo.

### P2 (Menores)
- Restos de `console.log` y comentarios sin uso.
- Faltan cierres de llaves y formateo en algunos `.scss`.

## Mejoras Visuales/UX Propuestas
- Uniformar tipografías usando Google Fonts ya incluidas.
- Ajustar espaciados y márgenes en `Navbar`, `Footer` y tarjetas de productos.
- Agregar hover suave en botones y enlaces, bordes redondeados 12px y sombra ligera.
- Mostrar mensajes vacíos amistosos en carrito y vistas sin datos.
- Optimizar carga de imágenes con `loading="lazy"`.

## Cambios Rápidos de Alto Impacto
- Limpiar archivos contaminados con texto de consola.
- Cambiar `force: true` a `false` en la sincronización de Sequelize.
- Corregir nombres de campos en `DetalleProducto` y carrito.
- Implementar `deleteProfileImage` en `cloudinary.js` para evitar fallos.
- Documentar pasos de instalación en README.
