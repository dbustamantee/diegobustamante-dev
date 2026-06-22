import { SiteContent } from "./types";

const content: SiteContent = {
  profile: {
    name: "Diego Bustamante",
    title: "Desarrollador Fullstack Senior",
    bio: "Desarrollador fullstack con más de 10 años de experiencia construyendo plataformas IoT, arquitecturas serverless y aplicaciones web modernas en AWS. Me especializo en llevar sistemas complejos de monolitos legacy a soluciones cloud-native escalables.",
    contact: {
      linkedin: "https://www.linkedin.com/in/diegobustamanteescalona/",
      email: "diego.bustamante.work@gmail.com",
      github: "https://github.com/dbustamantee",
    },
    stats: [
      { value: "10+", label: "Años en la Industria" },
      { value: "1.700+", label: "Commits (Proyecto Lead)" },
      { value: "25+", label: "Funciones Serverless" },
      { value: "8+", label: "Años como Único Lead" },
    ],
  },
  experience: [
    {
      id: "wiseconn-setup",
      company: "Wiseconn",
      role: "Creador & Lead Developer — Plataforma Setup",
      startDate: "2017-03",
      periodLabel: "Mar 2017 – Presente",
      description:
        "Herramienta interna para configurar redes IoT de campos, usada diariamente por el equipo de ingeniería de soporte en múltiples países.",
      achievements: [
        "Construí y mantengo toda la plataforma como único desarrollador (1.700+ commits en 8 años)",
        "Reduje el tiempo de configuración de campos de días a horas (85% de reducción) reemplazando ingreso manual con wizards guiados",
        "Optimicé tiempos de carga críticos en 95% (minutos → segundos) refactorizando el sistema de permisos",
      ],
    },
    {
      id: "wiseconn-cat",
      company: "Wiseconn",
      role: "Core Contributor — CAT (Centralized Admin Tool)",
      startDate: "2023",
      periodLabel: "2023 – Presente",
      description:
        "Reemplazo moderno del sistema admin legacy. Arquitectura serverless con múltiples funciones Lambda, SPA en React e infraestructura con CDK.",
      achievements: [
        "Implementé features full-stack (React + Node.js Lambda + CDK): gestión de nodos, firmware, configuración y recovery de datos",
        "Construí sistema de internacionalización completo (en/es) y endpoints de sensores con caché proactivo",
        "Desarrollé vistas con tablas avanzadas: filtros persistentes, selección masiva, paginación y acciones batch sobre dispositivos",
      ],
    },
    {
      id: "wiseconn-puma",
      company: "Wiseconn",
      role: "Contributor — PumaServer (Módulo Protocolo IoT)",
      startDate: "2025-02",
      periodLabel: "Feb 2025 – Presente",
      description:
        "Módulo core de comunicación IoT que maneja protocolo de bajo nivel con dispositivos de campo a gran escala.",
      achievements: [
        "Implementé sincronización proactiva de programas de riego (R19) y sistema de detección de tramas duplicadas",
        "Desarrollé trazabilidad y persistencia de datos de caudalímetros con bloqueo inteligente de fertirriego",
        "Construí recovery de datos para nodos V1 y detección de radios 900HP para redes australianas",
      ],
    },
    {
      id: "wiseconn-installer",
      company: "Wiseconn",
      role: "Lead Developer — App Instalador",
      startDate: "2017",
      periodLabel: "2017 – Presente",
      description:
        "App web de instalación de dispositivos IoT en terreno utilizada por técnicos a nivel internacional. Flujos guiados para configuración y diagnóstico de dispositivos.",
      achievements: [
        "Lideré el desarrollo y mantenimiento por 8+ años como único desarrollador (191 commits)",
        "Implementé traceroute LoRa completo con visualización en mapa, cadena de ruta y diagnóstico de señal",
        "Diseñé sistema de monitoreo de estado en tiempo real con cache y manejo de redes cercanas",
      ],
    },
    {
      id: "wiseconn-dropcontrol",
      company: "Wiseconn",
      role: "Fullstack Developer — Plataforma Dropcontrol",
      startDate: "2016",
      endDate: "2022",
      periodLabel: "2016 – 2022",
      description:
        "Contribuí a plataforma IoT de agricultura gestionando riego automatizado a gran escala en múltiples países.",
      achievements: [
        "Desarrollé módulo de programas de riego: paginación, filtros, clonación de templates y edición de duración",
        "Implementé vista de clima con gráficos interactivos (viento, grados día, horas frío) y generación de reportes PDF con Puppeteer",
        "Contribuí a la plataforma legacy Java (Struts2, EJB, Hibernate) y participé en la migración del frontend a Next.js",
      ],
    },
  ],
  projects: [
    {
      id: "fonoapp",
      name: "FonoApp",
      problem:
        "Fonoaudiólogos dependían de software de escritorio obsoleto para cálculos estadísticos y evaluaciones.",
      solution:
        "App web moderna que automatiza el scoring de pruebas fonoaudiológicas con cálculos en tiempo real y soporte bilingüe.",
      result: "Herramienta activa usada por fonoaudiólogos, reemplazando software desktop legacy",
      stack: ["React", "Vite", "TypeScript", "PrimeReact", "i18next"],
      role: "Desarrollador único",
      url: "https://fonoapp-hosting-423927628379.s3.amazonaws.com/index.html",
    },
    {
      id: "easy-account",
      name: "Easy Account",
      problem:
        "Necesitaba un tracker de finanzas personales simple y bilingüe sin la complejidad de apps existentes.",
      solution:
        "App Next.js con soporte i18n, UI limpia y backend PostgreSQL con lógica de negocio en PLpgSQL.",
      result: "Uso personal activo — el link es una demo con datos ficticios (la app real maneja mis finanzas)",
      stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "next-intl"],
      role: "Desarrollador único",
      url: "https://easy-account-demo.vercel.app",
    },
    {
      id: "portfolio",
      name: "diegobustamante.dev",
      problem: "Sin presencia profesional pública más allá de LinkedIn.",
      solution:
        "Portfolio estático bilingüe optimizado para reclutadores: rápido, accesible, SEO-ready. Construido con desarrollo AI spec-driven.",
      result: "Este sitio — construido en días, no semanas",
      stack: ["Next.js 16", "TypeScript", "Tailwind 4", "next-intl", "Vercel"],
      role: "Desarrollador único",
      url: "https://diegobustamante.dev",
      repo: "https://github.com/dbustamantee/diegobustamante-dev",
    },
  ],
  skills: [
    {
      id: "frontend",
      category: "Frontend & Producto",
      items: ["React / Next.js / TypeScript", "Tailwind CSS / React Native / PrimeFaces"],
    },
    {
      id: "backend",
      category: "Backend & Datos",
      items: ["Node.js / Java / Spring Boot", "PostgreSQL / Hibernate / REST APIs"],
    },
    {
      id: "cloud",
      category: "Cloud & Infraestructura",
      items: ["AWS Lambda / CDK / API Gateway", "ECS / EC2 / S3 / SQS / Cognito / Aurora"],
    },
    {
      id: "iot",
      category: "IoT & Protocolos",
      items: ["MQTT / DynamoDB / Comunicación de Dispositivos", "Detección de Radio / Caudalímetros / Redes de Campo"],
    },
    {
      id: "tooling",
      category: "Herramientas & Prácticas",
      items: ["Git / Docker / CI-CD / Serverless", "VS Code / Warp / DBeaver / Kiro / Codex"],
    },
  ],
  education: [
    {
      id: "aws-dev",
      institution: "Amazon Web Services",
      degree: "AWS Certified Developer – Associate",
      startYear: "2023",
      periodLabel: "2023",
    },
    {
      id: "university",
      institution: "INACAP — Universidad Tecnológica de Chile",
      degree: "Ingeniero en Informática",
      field: "Ingeniería en Informática",
      startYear: "2012",
      endYear: "2017",
      periodLabel: "2012 – 2017",
    },
  ],
  lastUpdated: "2026-05-18",
};

export default content;
