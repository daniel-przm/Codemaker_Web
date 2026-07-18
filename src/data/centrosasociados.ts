import type { CentroAsociado } from "@/lib/schools";

// ---------------------------------------------------------------------------
// CENTROS ASOCIADOS
// Centros en los que hemos prestado servicios o han usado nuestras apps,
// independientemente de si siguen activos o no.
//
// Campos:
//   nombre    → nombre completo del centro
//   localidad → ciudad o municipio
//   pais      → país (ej. "España")
//   lat / lng → coordenadas para el mapa (usa las de la localidad si no tienes dirección exacta)
// ---------------------------------------------------------------------------
export const centrosasociados: CentroAsociado[] = [

  {
    nombre: "CEIP Alcalá Venceslada",
    localidad: "Jaén",
    pais: "España",
    lat: 37.7796,
    lng: -3.7849,
  },
  {
    nombre: "CEIP Santo Tomás",
    localidad: "Jaén",
    pais: "España",
    lat: 37.7796,
    lng: -3.7849,
  },
  {
    nombre: "Universidad de Jaén",
    localidad: "Jaén",
    pais: "España",
    lat: 37.7734,
    lng: -3.7900,
  },
  {
    nombre: "Cámara de Comercio Granada",
    localidad: "Granada",
    pais: "España",
    lat: 37.1773,
    lng: -3.5986,
  },
  {
    nombre: "Universidad Popular de Jaén",
    localidad: "Jaén",
    pais: "España",
    lat: 37.7750,
    lng: -3.7820,
  },
  {
    nombre: "CEIP Virgen del Castillo",
    localidad: "Córdoba",
    pais: "España",
    lat: 37.8882,
    lng: -4.7794,
  },
  {
    nombre: "Colegio Los Olivos",
    localidad: "Málaga",
    pais: "España",
    lat: 36.7213,
    lng: -4.4214,
  },
  {
    nombre: "Colegio Atalaya",
    localidad: "Marbella, Málaga",
    pais: "España",
    lat: 36.5097,
    lng: -4.8817,
  },
  {
    nombre: "CEIP Juan Pasquau",
    localidad: "Úbeda, Jaén",
    pais: "España",
    lat: 38.0127,
    lng: -3.3703,
  },
  {
    nombre: "Punto Vuela Mengíbar",
    localidad: "Mengíbar, Jaén",
    pais: "España",
    lat: 37.9758,
    lng: -3.7908,
  },
  {
    nombre: "Universidad Don Bosco",
    localidad: "Por confirmar",
    pais: "Por confirmar",
    lat: 0,
    lng: 0,
  },
  {
    nombre: "FP Llefià",
    localidad: "Badalona, Barcelona",
    pais: "España",
    lat: 41.4505,
    lng: 2.2470,
  },
  {
    nombre: "CEIP Rafael Alberti",
    localidad: "Por confirmar",
    pais: "España",
    lat: 0,
    lng: 0,
  },
  {
    nombre: "IES Turgalium",
    localidad: "Trujillo, Cáceres",
    pais: "España",
    lat: 39.4561,
    lng: -5.8804,
  },

];
