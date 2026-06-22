import { SiteContent } from "./types";

const content: SiteContent = {
  profile: {
    name: "Diego Bustamante",
    title: "Senior Fullstack Developer",
    bio: "Fullstack developer with 10+ years of experience building IoT platforms, serverless architectures, and modern web applications on AWS. I specialize in taking complex systems from legacy monoliths to scalable cloud-native solutions.",
    contact: {
      linkedin: "https://www.linkedin.com/in/diegobustamanteescalona/",
      email: "diego.bustamante.work@gmail.com",
      github: "https://github.com/dbustamantee",
    },
    stats: [
      { value: "10+", label: "Years in Industry" },
      { value: "3,000+", label: "Commits (Lead Project)" },
      { value: "9,000+", label: "IoT Farms Configured" },
      { value: "28", label: "Countries Served" },
    ],
  },
  experience: [
    {
      id: "wiseconn-setup",
      company: "Wiseconn",
      role: "Creator & Lead Developer — Setup Platform",
      startDate: "2017-03",
      periodLabel: "Mar 2017 – Present",
      description:
        "Internal tool for configuring IoT farm networks, used daily by 20-30 support engineers. 9,000+ farms configured across 28 countries.",
      achievements: [
        "Built and maintained the entire platform as sole developer (3,000+ commits over 8 years)",
        "Reduced farm setup time from days to hours (85% reduction) by replacing manual data entry with guided wizards",
        "Optimized page load times by 95% (minutes → seconds) by refactoring the permission system",
      ],
    },
    {
      id: "wiseconn-cat",
      company: "Wiseconn",
      role: "Core Contributor — CAT (Centralized Admin Tool)",
      startDate: "2023",
      periodLabel: "2023 – Present",
      description:
        "Modern replacement for legacy admin system. Serverless architecture with ~25 Lambda functions, React SPA, and CDK infrastructure.",
      achievements: [
        "Implemented full-stack features (React + Node.js Lambda + CDK): node management, firmware updates, configuration, and data recovery",
        "Built complete i18n system (en/es) and sensor type endpoints with proactive caching",
        "Developed advanced table views with persistent filters, bulk selection, pagination, and batch device actions",
      ],
    },
    {
      id: "wiseconn-puma",
      company: "Wiseconn",
      role: "Contributor — PumaServer (IoT Protocol Module)",
      startDate: "2025-02",
      periodLabel: "Feb 2025 – Present",
      description:
        "Core IoT communication module handling low-level protocol with field devices at scale.",
      achievements: [
        "Implemented proactive irrigation program sync (R19) and duplicate frame detection system",
        "Developed flow meter data traceability and persistence with intelligent fertigation blocking",
        "Built V1 node data recovery and 900HP radio detection for Australian networks",
      ],
    },
    {
      id: "wiseconn-installer",
      company: "Wiseconn",
      role: "Lead Developer — App Instalador",
      startDate: "2017",
      periodLabel: "2017 – Present",
      description:
        "Field installation web app for IoT devices used by technicians internationally. Guided workflows for device configuration and diagnostics.",
      achievements: [
        "Led development and maintenance for 8+ years as sole developer (191 commits)",
        "Implemented full LoRa traceroute with map visualization, route chain display, and signal diagnostics",
        "Designed real-time status monitoring system with caching and nearby network management",
      ],
    },
    {
      id: "wiseconn-dropcontrol",
      company: "Wiseconn",
      role: "Fullstack Developer — Dropcontrol Platform",
      startDate: "2016",
      endDate: "2022",
      periodLabel: "2016 – 2022",
      description:
        "Contributed to IoT agriculture platform managing automated irrigation at scale across multiple countries.",
      achievements: [
        "Developed irrigation programs module: pagination, filters, template cloning, and duration editing",
        "Implemented weather view with interactive charts (wind, degree days, chill hours) and PDF report generation with Puppeteer",
        "Contributed to legacy Java platform (Struts2, EJB, Hibernate) and participated in frontend migration to Next.js",
      ],
    },
  ],
  projects: [
    {
      id: "fonoapp",
      name: "FonoApp",
      problem:
        "Speech therapists relied on outdated desktop software for statistical calculations and test evaluations.",
      solution:
        "Modern web app that automates phonoaudiological test scoring with real-time calculations and bilingual support.",
      result: "Active tool used by speech therapists, replacing legacy desktop software",
      stack: ["React", "Vite", "TypeScript", "PrimeReact", "i18next"],
      role: "Solo developer",
      url: "https://fonoapp-hosting-423927628379.s3.amazonaws.com/index.html",
    },
    {
      id: "easy-account",
      name: "Easy Account",
      problem:
        "Needed a simple, bilingual personal finance tracker without the complexity of existing apps.",
      solution:
        "Next.js app with i18n support, clean UI, and PostgreSQL backend with business logic in PLpgSQL.",
      result: "Active personal use — the link is a demo with fictional data (the real app manages my finances)",
      stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "next-intl"],
      role: "Solo developer",
      url: "https://easy-account-demo.vercel.app",
    },
    {
      id: "portfolio",
      name: "diegobustamante.dev",
      problem: "No public professional presence beyond LinkedIn.",
      solution:
        "Static bilingual portfolio optimized for recruiters: fast, accessible, SEO-ready. Built with spec-driven AI development.",
      result: "This site — built in days, not weeks",
      stack: ["Next.js 16", "TypeScript", "Tailwind 4", "next-intl", "Vercel"],
      role: "Solo developer",
      url: "https://diegobustamante.dev",
      repo: "https://github.com/dbustamantee/diegobustamante-dev",
    },
  ],
  skills: [
    {
      id: "frontend",
      category: "Frontend & Product",
      items: ["React / Next.js / TypeScript", "Tailwind CSS / React Native / PrimeFaces"],
    },
    {
      id: "backend",
      category: "Backend & Data",
      items: ["Node.js / Java / Spring Boot", "PostgreSQL / Hibernate / REST APIs"],
    },
    {
      id: "cloud",
      category: "Cloud & Infrastructure",
      items: ["AWS Lambda / CDK / API Gateway", "ECS / EC2 / S3 / SQS / Cognito / Aurora"],
    },
    {
      id: "iot",
      category: "IoT & Protocols",
      items: ["MQTT / DynamoDB / Device Communication", "Radio Detection / Flow Meters / Field Networks"],
    },
    {
      id: "tooling",
      category: "Tooling & Practices",
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
      degree: "Computer Science Engineer",
      field: "Ingeniero en Informática",
      startYear: "2012",
      endYear: "2017",
      periodLabel: "2012 – 2017",
    },
  ],
  lastUpdated: "2026-05-18",
};

export default content;
