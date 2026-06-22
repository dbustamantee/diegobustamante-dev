# Backlog de Mejoras

## Mobile Bugs - diegobustamante.dev

- [~] Fix: preservar el modo oscuro al cambiar de idioma.
  Nota: hay implementación local en [`/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/hooks/useTheme.tsx`](/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/hooks/useTheme.tsx) y [`/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/app/[locale]/layout.tsx`](/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/app/[locale]/layout.tsx) que persiste el tema en `localStorage` y cookie; queda pendiente validación manual en móvil real.
- [~] Fix: eliminar la barra superior que aparece al seleccionar espanol.
  Nota: el cambio de idioma ahora conserva `hash`, evita scroll automático y cierra el menú móvil en [`/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/components/Header.tsx`](/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/components/Header.tsx); falta confirmar si eso elimina el síntoma reportado en dispositivo.
- [~] Fix: sincronizar el color del notch con el tema visual de la app.
  Nota: ya se actualizan `theme-color` y `color-scheme` desde servidor y cliente; falta validación manual en Safari/iOS para darlo por cerrado.
- [ ] Fix: agregar recarga al llegar al final de la pagina.
  Bloqueado: falta definición verificable del comportamiento esperado.
  Nota: no está claro si se busca pull-to-refresh nativo, recarga automática al overscroll o un CTA explícito al final.

## Content Audit - Experiencia Profesional

- [ ] Audit: revisar la seccion CAT y reemplazar el sistema de issues por informacion real basada en commits.
  Bloqueado: requiere contraste contra commits/historial real antes de editar contenido público.
- [ ] Audit: revisar integralmente la informacion publicada sobre CAT.
- [ ] Audit: revisar la seccion Protocolo y dejar solo informacion real y verificable.
- [ ] Audit: revisar la seccion App Instalador y hacer la descripcion mas precisa.
- [ ] Audit: revisar la seccion DropControl y validar que el contenido sea preciso.

## Notas de esta corrida

- Se corrigió un error real de lint en [`/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/components/CommitGraph.tsx`](/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/components/CommitGraph.tsx) moviendo la inicialización de datos al `useState` lazy initializer para evitar `setState` dentro de `useEffect`.
- Se reemplazó el `<img>` de [`/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/app/[locale]/cv/page.tsx`](/Users/dbustamante/Work/personal_projects/dbustamante-dev/src/app/[locale]/cv/page.tsx) por `next/image` con dimensiones explícitas; `npm run lint -- --quiet` ya no reporta ese warning.
- `npm run build` no se pudo validar en este entorno porque `next/font` intenta descargar `Geist` y `Geist Mono` desde Google Fonts y la sandbox no tiene acceso de red.
