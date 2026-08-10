import type { SchoolData, GlobalConfig } from "@/lib/schools";

// ---------------------------------------------------------------------------
// CONFIGURACIÓN GLOBAL
// ---------------------------------------------------------------------------
export const globalConfig: GlobalConfig = {
  link_calendario_escolar:
    "https://www.juntadeandalucia.es/educacion/portals/web/inspeccion/calendario-escolar",
  curso_actual: "26/27",
  link_app: "https://3d.codemaker.es",
};

// Contacto docente compartido por los cursos propios este curso.
const CONTACTO_ARTURO = {
  nombre: "Arturo",
  contacto: "627 82 28 97",
  whatsapp: "34627822897",
  grupos: "",
};

// ---------------------------------------------------------------------------
// CURSOS PROPIOS
// Centros donde nuestros docentes asociados imparten cursos o extraescolares.
//
// Campos:
//   id               → slug de la URL (sin espacios ni caracteres especiales)
//   nombre           → nombre completo del centro
//   direccion        → dirección postal (opcional)
//   color            → color hex del avatar en la web
//   curso            → curso escolar activo, ej. "26/27"
//   niveles          → ["Start"] | ["Junior"] | ["Senior"] | ["Master"] | combinaciones
//   grupos           → lista de grupos: { horario, nivel, precio }
//   info_general     → lista de puntos { emoji, texto } que aparece en la página del centro
//   docentes         → [{ nombre, contacto, whatsapp, grupos }]
//   status           → "live" → activo este curso | "past" → histórico
//   link_inscripcion → URL del formulario de inscripción (dejar "" si no hay todavía)
// ---------------------------------------------------------------------------
export const cursospropios: SchoolData[] = [

  // ── ACTIVOS ───────────────────────────────────────────────────────────────

  {
    id: "veracruz",
    nombre: "Colegio Veracruz",
    direccion: "C. Principado de Asturias, 6, 23009 Jaén",
    color: "#007AFB",
    curso: "26/27",
    niveles: ["Start", "Junior", "Senior", "Master"],
    grupos: [
      { horario: "Miércoles, de 16:00 a 17:00", nivel: "Start", precio: "33€/mes" },
      { horario: "Lunes, de 18:00 a 19:30", nivel: "Junior", precio: "35€/mes" },
      { horario: "Miércoles, de 17:00 a 18:30", nivel: "Junior", precio: "35€/mes" },
      { horario: "Miércoles, de 18:30 a 20:00", nivel: "Senior", precio: "38€/mes" },
      { horario: "Jueves, de 18:00 a 19:30", nivel: "Senior", precio: "38€/mes" },
      { horario: "Viernes, de 18:00 a 19:30 (¡nuevo!)", nivel: "Senior", precio: "38€/mes" },
      { horario: "Miércoles, de 17:00 a 18:30", nivel: "Master", precio: "40€/mes" },
    ],
    info_general: [
      { emoji: "🌱", texto: "El nivel Start vuelve este curso, con actividades de iniciación para los más pequeños." },
      { emoji: "🆕", texto: "Nuevo grupo de Senior los viernes." },
      { emoji: "🎒", texto: "No hay que traer material de casa." },
      { emoji: "🎟️", texto: "Plazas limitadas." },
    ],
    docentes: [
      { ...CONTACTO_ARTURO, grupos: "Start, Junior y Senior" },
      {
        nombre: "Daniel",
        contacto: "693 062 284",
        whatsapp: "34693062284",
        grupos: "Master",
      },
    ],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "maristas",
    nombre: "Colegio Maristas",
    direccion: "Av. Ruiz Jiménez, 1, 23007 Jaén",
    color: "#007AFB",
    curso: "26/27",
    niveles: ["Junior"],
    grupos: [
      { horario: "Lunes, de 16:00 a 17:30", nivel: "Junior", precio: "40€/mes" },
      { horario: "Jueves, de 16:00 a 17:30", nivel: "Junior", precio: "40€/mes" },
    ],
    info_general: [
      { emoji: "🎒", texto: "No hay que traer material de casa." },
      { emoji: "📚", texto: "Actividades diseñadas por curso." },
      { emoji: "🎟️", texto: "Plazas limitadas." },
    ],
    docentes: [CONTACTO_ARTURO],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "vandelvira",
    nombre: "Colegio Andrés de Vandelvira",
    direccion: "Ctra. de Jabalcuz, 2, 23002 Jaén",
    color: "#007AFB",
    curso: "26/27",
    niveles: ["Junior"],
    grupos: [
      { horario: "Martes, de 18:00 a 19:30", nivel: "Junior", precio: "35€/mes" },
    ],
    info_general: [
      { emoji: "🎒", texto: "No hay que traer material de casa." },
      { emoji: "📚", texto: "Actividades diseñadas por curso." },
      { emoji: "🎟️", texto: "Plazas limitadas." },
    ],
    docentes: [CONTACTO_ARTURO],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "divinomaestro",
    nombre: "Colegio Divino Maestro",
    direccion: "C. Los Peñas, 12, 23002 Jaén",
    color: "#007AFB",
    curso: "26/27",
    niveles: ["Junior"],
    grupos: [
      { horario: "Martes, de 16:00 a 17:30", nivel: "Junior", precio: "35€/mes" },
    ],
    info_general: [
      { emoji: "🎒", texto: "No hay que traer material de casa." },
      { emoji: "📚", texto: "Actividades diseñadas por curso." },
      { emoji: "🎟️", texto: "Plazas limitadas." },
    ],
    docentes: [CONTACTO_ARTURO],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "navas",
    nombre: "Colegio Navas de Tolosa",
    direccion: "Calle Europa, S/N, 23006 Jaén",
    color: "#007AFB",
    curso: "26/27",
    niveles: ["Junior"],
    grupos: [
      { horario: "Viernes, de 16:00 a 17:30", nivel: "Junior", precio: "35€/mes" },
    ],
    info_general: [
      { emoji: "🎒", texto: "No hay que traer material de casa." },
      { emoji: "📚", texto: "Actividades diseñadas por curso." },
      { emoji: "🎟️", texto: "Plazas limitadas." },
    ],
    docentes: [CONTACTO_ARTURO],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "agora",
    nombre: "Asociación Ágora Altas Capacidades",
    color: "#007AFB",
    curso: "26/27",
    niveles: ["Junior"],
    grupos: [
      { horario: "Online, lunes de 16:00 a 17:00 + taller presencial trimestral (1,5h)", nivel: "Junior", precio: "40€/mes" },
    ],
    info_general: [
      { emoji: "💻", texto: "Clase online cada lunes." },
      { emoji: "🤝", texto: "Taller presencial cada trimestre (1,5h)." },
      { emoji: "🧠", texto: "Programa adaptado para alumnado con altas capacidades." },
    ],
    docentes: [CONTACTO_ARTURO],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
    online: true,
  },

  // ── HISTÓRICO ─────────────────────────────────────────────────────────────

  {
    id: "inmaculada-linares",
    nombre: "Colegio La Inmaculada Concepción",
    direccion: "Linares, Jaén",
    color: "#94a3b8",
    curso: "",
    niveles: [],
    grupos: [],
    info_general: [],
    docentes: [],
    status: "past",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "sagrado-corazon",
    nombre: "Colegio Sagrado Corazón de Jesús",
    direccion: "Jaén",
    color: "#94a3b8",
    curso: "",
    niveles: [],
    grupos: [],
    info_general: [],
    docentes: [],
    status: "past",
    tipo: "cursos",
    link_inscripcion: "",
  },

];
