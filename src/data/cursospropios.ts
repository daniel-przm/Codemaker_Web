import type { SchoolData, GlobalConfig } from "@/lib/schools";

// ---------------------------------------------------------------------------
// CONFIGURACIÓN GLOBAL
// ---------------------------------------------------------------------------
export const globalConfig: GlobalConfig = {
  link_calendario_escolar:
    "https://www.juntadeandalucia.es/educacion/portals/web/inspeccion/calendario-escolar",
  curso_actual: "24/25",
  link_app: "https://3d.codemaker.es",
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
//   curso            → curso escolar activo, ej. "24/25"
//   niveles          → ["Junior"] | ["Senior"] | ["Master"] | combinaciones
//   grupos           → lista de grupos: { horario, nivel, precio }
//   info_general     → texto libre que aparece en la página del colegio
//   docentes         → [{ nombre, contacto, whatsapp, grupos }]
//   status           → "live" → activo este curso | "past" → histórico
//   link_inscripcion → URL del formulario de inscripción (dejar "" si no hay)
// ---------------------------------------------------------------------------
export const cursospropios: SchoolData[] = [

  // ── ACTIVOS ───────────────────────────────────────────────────────────────

  {
    id: "veracruz",
    nombre: "Colegio Veracruz",
    direccion: "C. Principado de Asturias, 6, 23009 Jaén",
    color: "#007AFB",
    curso: "24/25",
    niveles: ["Junior", "Senior", "Master"],
    grupos: [],
    info_general: "",
    docentes: [],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "maristas",
    nombre: "Colegio Maristas",
    direccion: "Av. Ruiz Jiménez, 1, 23007 Jaén",
    color: "#007AFB",
    curso: "24/25",
    niveles: ["Junior"],
    grupos: [],
    info_general: "",
    docentes: [],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "vandelvira",
    nombre: "Colegio Vandelvira",
    direccion: "Ctra. de Jabalcuz, 2, 23002 Jaén",
    color: "#007AFB",
    curso: "24/25",
    niveles: ["Junior"],
    grupos: [],
    info_general: "",
    docentes: [],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "divinomaestro",
    nombre: "Colegio Divino Maestro",
    direccion: "C. Los Peñas, 12, 23002 Jaén",
    color: "#007AFB",
    curso: "24/25",
    niveles: ["Junior"],
    grupos: [],
    info_general: "",
    docentes: [],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
  },
  {
    id: "navasdetolosa",
    nombre: "Colegio Navas de Tolosa",
    direccion: "Calle Europa, S/N, 23006 Jaén",
    color: "#007AFB",
    curso: "24/25",
    niveles: ["Junior"],
    grupos: [],
    info_general: "",
    docentes: [],
    status: "live",
    tipo: "cursos",
    link_inscripcion: "",
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
    info_general: "",
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
    info_general: "",
    docentes: [],
    status: "past",
    tipo: "cursos",
    link_inscripcion: "",
  },

];
