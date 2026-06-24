/**
 * data.js — Grupo CHESA · Evaluaciones de Desempeño
 * Edita este archivo para actualizar colaboradores, KPIs y estructura organizacional.
 * No es necesario modificar evaluaciones-desempeno.html.
 */

/* ─────────────────────────────────────────
   MARCAS
   Agrega o elimina marcas según se requiera.
───────────────────────────────────────── */
var marcas = ['Nissan', 'Renault', 'Changan', 'Corporativo'];

var marcaColors = {
  'Nissan':      { bg: '#E3F0FB', color: '#1A4F8A' },
  'Renault':     { bg: '#FFF0E0', color: '#C45200' },
  'Changan':     { bg: '#E8F5E9', color: '#1B6E3A' },
  'Corporativo': { bg: '#F3F0FC', color: '#4A35A8' },
};

/* ─────────────────────────────────────────
   ESTRUCTURA ORGANIZACIONAL
   Áreas y departamentos por dirección/división.
───────────────────────────────────────── */
var areaDepts = {
  /* CORPORATIVO */
  'Dir. Innovación':      ['Auditoría Interna', 'Análisis de Datos', 'Mejora Continua', 'Sistemas y Soporte Técnico'],
  'Dir. Administrativa':  ['Gerencia Administrativa', 'Contabilidad General', 'Cuentas por Pagar', 'Mesa de Control', 'Tesorería', 'Impuestos y Cumplimiento Normativo'],
  'Dir. Estratégica':     ['BDC / Contact Center', 'Procesos y Proyectos'],
  'Dir. Talento Humano':  ['Recursos Humanos', 'Capacitación', 'Auditoría STPS'],
  /* AGENCIAS — Nissan · Renault · Changan */
  'Comercial':            ['Ventas (Unidades Nuevas)', 'Seminuevos', 'Flotillas', 'Financiamiento (F&I)', 'Facturación', 'EPCI / Coordinación de Entregas'],
  'Posventa':             ['Atención al Cliente (ADPC)', 'Taller de Servicio', 'Mecánica', 'Hojalatería y Pintura (HP)', 'Almacén de Refacciones', 'Garantías', 'Preparación de Vehículos y Lavado'],
  'Soporte Sucursal':     ['Mercadotecnia', 'Caja', 'Mantenimiento e Intendencia'],
};

var areaColors = {
  'Dir. Innovación':     { bg: '#E8F5E9', color: '#1B6E3A' },
  'Dir. Administrativa': { bg: '#F3F0FC', color: '#4A35A8' },
  'Dir. Estratégica':    { bg: '#FFEBEE', color: '#C62828' },
  'Dir. Talento Humano': { bg: '#E3F0FB', color: '#1A4F8A' },
  'Comercial':           { bg: '#FFF0E0', color: '#C45200' },
  'Posventa':            { bg: '#FFF8E1', color: '#B45309' },
  'Soporte Sucursal':    { bg: '#F4F4F2', color: '#6B6B69' },
};

/* ─────────────────────────────────────────
   COLABORADORES
   Campos por colaborador:
     name   — Nombre completo
     dept   — Departamento (debe existir en areaDepts)
     area   — Área/Dirección (debe existir en areaColors)
     marca  — Marca (debe existir en marcaColors)
     score  — Puntuación 360° (0–100)
     status — 'Completada' | 'En proceso' | 'Pendiente'
     kpi    — Cumplimiento de KPIs en % (0–100)
───────────────────────────────────────── */
var employees = [
  /* ── Nissan ── */
  { name: 'Ana Torres',      dept: 'Ventas (Unidades Nuevas)',        area: 'Comercial',           marca: 'Nissan',      score: 87, status: 'Completada', kpi: 92 },
  { name: 'Jorge Méndez',    dept: 'Taller de Servicio',              area: 'Posventa',            marca: 'Nissan',      score: 78, status: 'En proceso', kpi: 72 },
  { name: 'Daniela Ruiz',    dept: 'Financiamiento (F&I)',            area: 'Comercial',           marca: 'Nissan',      score: 82, status: 'Completada', kpi: 85 },
  { name: 'Marco Herrera',   dept: 'Almacén de Refacciones',          area: 'Posventa',            marca: 'Nissan',      score: 71, status: 'Pendiente',  kpi: 68 },

  /* ── Renault ── */
  { name: 'Luis Pérez',      dept: 'Atención al Cliente (ADPC)',      area: 'Posventa',            marca: 'Renault',     score: 74, status: 'En proceso', kpi: 68 },
  { name: 'Patricia Solís',  dept: 'Seminuevos',                      area: 'Comercial',           marca: 'Renault',     score: 85, status: 'Completada', kpi: 88 },
  { name: 'Gabriela Lara',   dept: 'Mecánica',                        area: 'Posventa',            marca: 'Renault',     score: 69, status: 'Pendiente',  kpi: 62 },
  { name: 'Ernesto Díaz',    dept: 'Mercadotecnia',                   area: 'Soporte Sucursal',    marca: 'Renault',     score: 80, status: 'En proceso', kpi: 75 },

  /* ── Changan ── */
  { name: 'Carlos Ruiz',     dept: 'Ventas (Unidades Nuevas)',        area: 'Comercial',           marca: 'Changan',     score: 65, status: 'Pendiente',  kpi: 60 },
  { name: 'Roberto Chan',    dept: 'EPCI / Coordinación de Entregas', area: 'Comercial',           marca: 'Changan',     score: 70, status: 'Pendiente',  kpi: 65 },
  { name: 'Valeria Gómez',   dept: 'Taller de Servicio',              area: 'Posventa',            marca: 'Changan',     score: 88, status: 'Completada', kpi: 91 },
  { name: 'Héctor Morales',  dept: 'Flotillas',                       area: 'Comercial',           marca: 'Changan',     score: 76, status: 'En proceso', kpi: 70 },

  /* ── Corporativo — Dir. Innovación ── */
  { name: 'Andrés Vega',     dept: 'Sistemas y Soporte Técnico',      area: 'Dir. Innovación',     marca: 'Corporativo', score: 86, status: 'Completada', kpi: 83 },
  { name: 'Irene Castillo',  dept: 'Análisis de Datos',               area: 'Dir. Innovación',     marca: 'Corporativo', score: 90, status: 'Completada', kpi: 94 },

  /* ── Corporativo — Dir. Administrativa ── */
  { name: 'María García',    dept: 'Contabilidad General',            area: 'Dir. Administrativa', marca: 'Corporativo', score: 91, status: 'Completada', kpi: 95 },
  { name: 'Raúl Espinoza',   dept: 'Tesorería',                       area: 'Dir. Administrativa', marca: 'Corporativo', score: 84, status: 'Completada', kpi: 88 },

  /* ── Corporativo — Dir. Estratégica ── */
  { name: 'Claudia Núñez',   dept: 'BDC / Contact Center',            area: 'Dir. Estratégica',    marca: 'Corporativo', score: 79, status: 'En proceso', kpi: 77 },
  { name: 'Fernando Ríos',   dept: 'Procesos y Proyectos',            area: 'Dir. Estratégica',    marca: 'Corporativo', score: 81, status: 'En proceso', kpi: 80 },

  /* ── Corporativo — Dir. Talento Humano ── */
  { name: 'Sofía Mora',      dept: 'Recursos Humanos',                area: 'Dir. Talento Humano', marca: 'Corporativo', score: 83, status: 'Completada', kpi: 79 },
  { name: 'Teresa Alamilla', dept: 'Capacitación',                    area: 'Dir. Talento Humano', marca: 'Corporativo', score: 88, status: 'Completada', kpi: 85 },
];

/* ─────────────────────────────────────────
   COMPETENCIAS (Evaluación 360°)
   Campos: name, self, jefe, pares, sub  (escala 1–5)
───────────────────────────────────────── */
var competencias = [
  { name: 'Trabajo en equipo',        self: 4, jefe: 4, pares: 3, sub: 4 },
  { name: 'Liderazgo',                self: 3, jefe: 3, pares: 3, sub: 2 },
  { name: 'Comunicación efectiva',    self: 5, jefe: 4, pares: 4, sub: 5 },
  { name: 'Orientación a resultados', self: 4, jefe: 5, pares: 4, sub: 4 },
  { name: 'Innovación',               self: 3, jefe: 3, pares: 3, sub: 3 },
];

/* ─────────────────────────────────────────
   KPIs / OBJETIVOS
   Campos:
     name   — Nombre del indicador
     marca  — Marca a la que aplica
     area   — Área/Dirección
     meta   — Valor objetivo (texto)
     real   — Valor alcanzado (texto)
     pct    — Porcentaje de cumplimiento (0–100)
     status — 'success' | 'warn'
───────────────────────────────────────── */
var kpis = [
  /* ── Comercial — Nissan ── */
  { name: 'Unidades nuevas vendidas', marca: 'Nissan',      area: 'Comercial',           meta: '120 u',  real: '131 u',  pct: 100, status: 'success' },
  { name: 'Penetración de F&I',       marca: 'Nissan',      area: 'Comercial',           meta: '60%',    real: '63%',    pct: 92,  status: 'success' },

  /* ── Comercial — Renault ── */
  { name: 'Unidades nuevas vendidas', marca: 'Renault',     area: 'Comercial',           meta: '80 u',   real: '68 u',   pct: 75,  status: 'warn'    },
  { name: 'Penetración de F&I',       marca: 'Renault',     area: 'Comercial',           meta: '60%',    real: '51%',    pct: 68,  status: 'warn'    },

  /* ── Comercial — Changan ── */
  { name: 'Unidades nuevas vendidas', marca: 'Changan',     area: 'Comercial',           meta: '50 u',   real: '57 u',   pct: 100, status: 'success' },
  { name: 'Penetración de F&I',       marca: 'Changan',     area: 'Comercial',           meta: '55%',    real: '58%',    pct: 90,  status: 'success' },

  /* ── Posventa — Nissan ── */
  { name: 'Eficiencia de taller',     marca: 'Nissan',      area: 'Posventa',            meta: '85%',    real: '88%',    pct: 94,  status: 'success' },
  { name: 'Índice CSI',               marca: 'Nissan',      area: 'Posventa',            meta: '90',     real: '92',     pct: 100, status: 'success' },

  /* ── Posventa — Renault ── */
  { name: 'Eficiencia de taller',     marca: 'Renault',     area: 'Posventa',            meta: '85%',    real: '79%',    pct: 71,  status: 'warn'    },
  { name: 'Índice CSI',               marca: 'Renault',     area: 'Posventa',            meta: '90',     real: '84',     pct: 73,  status: 'warn'    },

  /* ── Posventa — Changan ── */
  { name: 'Eficiencia de taller',     marca: 'Changan',     area: 'Posventa',            meta: '80%',    real: '84%',    pct: 95,  status: 'success' },
  { name: 'Índice CSI',               marca: 'Changan',     area: 'Posventa',            meta: '88',     real: '91',     pct: 100, status: 'success' },

  /* ── Dir. Innovación ── */
  { name: 'Proyectos de mejora continua', marca: 'Corporativo', area: 'Dir. Innovación',     meta: '6',      real: '5',      pct: 83,  status: 'warn'    },
  { name: 'Disponibilidad de sistemas',   marca: 'Corporativo', area: 'Dir. Innovación',     meta: '99%',    real: '99.4%',  pct: 100, status: 'success' },
  { name: 'Auditorías internas cerradas', marca: 'Corporativo', area: 'Dir. Innovación',     meta: '100%',   real: '87%',    pct: 87,  status: 'warn'    },

  /* ── Dir. Administrativa ── */
  { name: 'Cierre contable a tiempo',     marca: 'Corporativo', area: 'Dir. Administrativa', meta: 'día 5',  real: 'día 4',  pct: 100, status: 'success' },
  { name: 'Cumplimiento fiscal',          marca: 'Corporativo', area: 'Dir. Administrativa', meta: '100%',   real: '100%',   pct: 100, status: 'success' },
  { name: 'Cuentas por pagar al día',     marca: 'Corporativo', area: 'Dir. Administrativa', meta: '95%',    real: '89%',    pct: 77,  status: 'warn'    },

  /* ── Dir. Estratégica ── */
  { name: 'Citas generadas por BDC',      marca: 'Corporativo', area: 'Dir. Estratégica',    meta: '500',    real: '537',    pct: 100, status: 'success' },
  { name: 'Procesos documentados',        marca: 'Corporativo', area: 'Dir. Estratégica',    meta: '20',     real: '14',     pct: 70,  status: 'warn'    },

  /* ── Dir. Talento Humano ── */
  { name: 'Rotación de personal',         marca: 'Corporativo', area: 'Dir. Talento Humano', meta: '<5%',    real: '3.2%',   pct: 100, status: 'success' },
  { name: 'Cobertura de capacitación',    marca: 'Corporativo', area: 'Dir. Talento Humano', meta: '90%',    real: '82%',    pct: 78,  status: 'warn'    },
  { name: 'Tiempo de cobertura vacantes', marca: 'Corporativo', area: 'Dir. Talento Humano', meta: '20 días',real: '17 d',   pct: 100, status: 'success' },
];
