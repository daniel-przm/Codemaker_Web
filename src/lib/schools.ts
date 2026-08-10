import { cursospropios, globalConfig } from "@/data/cursospropios";
import { centrosasociados } from "@/data/centrosasociados";

export interface SchoolGroup {
    horario: string;
    nivel: string;
    precio: string;
}

export interface Docente {
    nombre: string;
    contacto: string;
    whatsapp: string;
    grupos: string;
}

export interface SchoolData {
    id: string;
    nombre: string;
    direccion?: string;
    logo?: string;
    curso: string;
    color: string;
    niveles: string[];
    grupos: SchoolGroup[];
    info_general: string;
    docentes: Docente[];
    status: 'live' | 'past';
    tipo: 'cursos' | 'centros';
    link_inscripcion: string;
    /** true si es un curso 100% online (sin sede física): oculta el CTA cruzado a /cursos-online y el panel de inscripción. */
    online?: boolean;
}

export interface CentroAsociado {
    nombre: string;
    localidad: string;
    pais: string;
    lat: number;
    lng: number;
}

export interface GlobalConfig {
    link_calendario_escolar: string;
    curso_actual: string;
    link_app: string;
    [key: string]: string;
}

export async function getGlobalConfig(): Promise<GlobalConfig> {
    return globalConfig;
}

export async function getSchools(): Promise<SchoolData[]> {
    return cursospropios;
}

export async function getCentrosAsociados(): Promise<CentroAsociado[]> {
    return centrosasociados;
}
