export type ITDomainId = "all" | "software" | "cloud-ops" | "data-systems";

export interface DomainCategory {
  id: ITDomainId;
  label: string;
  shortLabel: string;
  colorClass: string;
  badgeBg: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  domain: Exclude<ITDomainId, "all">;
  accentBg: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Proficient" | "Familiar";
    highlight?: boolean;
  }[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  domain: Exclude<ITDomainId, "all">;
  domainLabel: string;
  accentBg: string;
  year: string;
  role: string;
  summary: string;
  metrics: string[];
  techStack: string[];
  challenge: string;
  solution: string[];
  outcomes: string[];
  architectureNotes: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface TimelineItem {
  id: string;
  type: "work" | "education" | "certification";
  roleOrDegree: string;
  organization: string;
  location: string;
  period: string;
  domain: Exclude<ITDomainId, "all">;
  accentBg: string;
  highlights: string[];
  tags: string[];
}

export const DOMAIN_CATEGORIES: DomainCategory[] = [
  {
    id: "all",
    label: "All IT Domains",
    shortLabel: "All Tracks",
    colorClass: "bg-[#FFD100]",
    badgeBg: "bg-[#FFD100]",
    description:
      "Full-spectrum view across Full-Stack & Mobile Development, Business Analysis & QA Testing, and Systems Automation & Data.",
  },
  {
    id: "software",
    label: "Software, Web & Mobile Dev",
    shortLabel: "Software & Mobile",
    colorClass: "bg-[#60A5FA]",
    badgeBg: "bg-[#60A5FA]",
    description:
      "Full-stack web apps (Next.js, FastAPI, Java EE) and Android mobile applications (Kotlin, Jetpack Compose, Java).",
  },
  {
    id: "cloud-ops",
    label: "Business Analysis, QA & Automation",
    shortLabel: "BA, QA & Automation",
    colorClass: "bg-[#FF6B6B]",
    badgeBg: "bg-[#FF6B6B]",
    description:
      "Enterprise User Acceptance Testing (UAT), requirement validation, RPA workflow migration (Power Automate Desktop, UiPath, VBA), and cloud deployment.",
  },
  {
    id: "data-systems",
    label: "Databases, Data Analytics & AI",
    shortLabel: "Data, SQL & AI",
    colorClass: "bg-[#2EE59D]",
    badgeBg: "bg-[#2EE59D]",
    description:
      "Relational & cloud databases (PostgreSQL, Oracle, SQL, Supabase, Firebase), BI analytics (Power BI, RapidMiner), and deep learning (TensorFlow/Keras).",
  },
];

export const PROFILE_DATA = {
  name: "Aliff Wafiuddin",
  handle: "ALIFF.WAFI // CS_PORTFOLIO",
  tagline: "Computer Science (Hons) Graduate • Software Dev • Business Analysis • Automation",
  headline: "BRIDGING SOFTWARE ENGINEERING, BUSINESS ANALYSIS & SYSTEM AUTOMATION.",
  statusBadge: "AVAILABLE FOR IT & CS ROLES • DEV / BA / QA / AUTOMATION / DATA",
  location: "Shah Alam, Selangor, Malaysia",
  email: "aliffwafi555@gmail.com",
  phone: "011-36132366",
  github: "https://github.com/AliffWafi",
  linkedin: "https://linkedin.com/in/aliffwafiuddin",
  resumeUrl: "/Aliff_Wafiuddin_Resume.pdf",
  bioParagraphs: [
    "Computer Science (Honours) graduate from Universiti Teknologi MARA (UiTM) Shah Alam with hands-on industry experience at AmBank Group (Business Analyst Intern) and Panasonic Industrial Device Malaysia (System Automation Intern).",
    "I possess a strong foundation across full-stack & mobile development, enterprise User Acceptance Testing (UAT), robotic process automation (Power Automate Desktop, UiPath, VBA), and SQL database management—ready to contribute to high-impact technology solutions in a collaborative environment.",
  ],
  quickStats: [
    {
      value: "3.68 / 3.42",
      label: "CGPA (Diploma CS / Bachelor CS Hons @ UiTM)",
      bg: "bg-[#FFD100]",
    },
    {
      value: "2x INTERN",
      label: "AmBank Group (BA) & Panasonic (Automation)",
      bg: "bg-[#2EE59D]",
    },
    {
      value: "5+ APPS",
      label: "Full-Stack Web, Java EE, Android & CNN AI",
      bg: "bg-[#60A5FA]",
    },
    {
      value: "3 TRACKS",
      label: "Software Dev • BA & QA • Data & RPA",
      bg: "bg-[#FF6B6B]",
    },
  ],
  rolePitches: [
    {
      domain: "software" as const,
      title: "Software / Web / Mobile Developer",
      badge: "FULL-STACK & ANDROID",
      bg: "bg-[#60A5FA]",
      points: [
        "Next.js, React, FastAPI, TypeScript/JavaScript, and Java EE (MVC) web systems",
        "Native Android mobile development with Kotlin, Jetpack Compose, Java, XML & Firebase",
        "End-to-end cloud deployments on Vercel, Render, Supabase, and PostgreSQL/Oracle",
      ],
    },
    {
      domain: "cloud-ops" as const,
      title: "Business Analyst / QA / Automation Engineer",
      badge: "UAT, BA & RPA",
      bg: "bg-[#FF6B6B]",
      points: [
        "Enterprise banking UAT, functional, regression, and business-rule testing at AmBank Group",
        "Process automation using Power Automate Desktop (PAD), UiPath migration, and Excel VBA at Panasonic",
        "Requirement validation, defect lifecycle tracking, and live automation server monitoring",
      ],
    },
    {
      domain: "data-systems" as const,
      title: "Data / Database / AI Engineer",
      badge: "SQL, BI & DEEP LEARNING",
      bg: "bg-[#2EE59D]",
      points: [
        "Production SQL querying, PostgreSQL, Oracle Database, MongoDB, SQLite, and SSIS",
        "Data analytics and visualization with Power BI, RapidMiner, and Python (Matplotlib)",
        "Machine Learning & Computer Vision using TensorFlow and Keras (CNN classification)",
      ],
    },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "sg-software",
    title: "Languages, Web & Mobile Development",
    domain: "software",
    accentBg: "bg-[#60A5FA]",
    description:
      "Full-stack web frameworks, backend APIs, object-oriented programming, and native Android development.",
    skills: [
      { name: "Java", level: "Core", highlight: true },
      { name: "Kotlin & Jetpack Compose", level: "Core", highlight: true },
      { name: "Python & FastAPI", level: "Core", highlight: true },
      { name: "JavaScript & TypeScript", level: "Core", highlight: true },
      { name: "React & Next.js", level: "Core", highlight: true },
      { name: "REST API & JWT Auth", level: "Core" },
      { name: "HTML5 & CSS3", level: "Core" },
      { name: "C / C++", level: "Proficient" },
      { name: "Java EE (MVC Architecture)", level: "Proficient" },
    ],
  },
  {
    id: "sg-cloud-ops",
    title: "Business Analysis, QA Testing & Automation",
    domain: "cloud-ops",
    accentBg: "bg-[#FF6B6B]",
    description:
      "Enterprise requirement validation, software quality assurance, RPA workflows, and cloud deployment tooling.",
    skills: [
      { name: "User Acceptance Testing (UAT)", level: "Core", highlight: true },
      { name: "Power Automate Desktop (PAD)", level: "Core", highlight: true },
      { name: "Regression & Functional Testing", level: "Core", highlight: true },
      { name: "Requirement Validation & BA", level: "Core" },
      { name: "Defect Tracking & Business Rules", level: "Core" },
      { name: "UiPath & Excel VBA Automation", level: "Core" },
      { name: "Git & GitHub", level: "Core" },
      { name: "Vercel & Render Deployment", level: "Proficient" },
    ],
  },
  {
    id: "sg-data-systems",
    title: "Databases, Cloud Storage, BI & AI",
    domain: "data-systems",
    accentBg: "bg-[#2EE59D]",
    description:
      "Relational database engineering, cloud backend-as-a-service, business intelligence, and deep learning.",
    skills: [
      { name: "SQL & PostgreSQL", level: "Core", highlight: true },
      { name: "Oracle Database", level: "Core", highlight: true },
      { name: "Supabase & Firebase Firestore", level: "Core", highlight: true },
      { name: "Power BI & RapidMiner", level: "Core" },
      { name: "TensorFlow & Keras (CNN)", level: "Proficient" },
      { name: "MongoDB & SQLite", level: "Proficient" },
      { name: "SSIS (SQL Server Integration)", level: "Proficient" },
      { name: "Matplotlib Visualization", level: "Proficient" },
    ],
  },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "proj-runway",
    title: "Runway — Full-Stack Job Application Tracking System",
    subtitle: "Aviation-Inspired Career Pipeline Web App with JWT Auth & Activity Timeline",
    domain: "software",
    domainLabel: "Software & Web Dev",
    accentBg: "bg-[#60A5FA]",
    year: "2025–2026",
    role: "Full-Stack Developer",
    summary:
      "Designed and deployed a full-stack web application using Next.js, FastAPI, PostgreSQL, and Supabase—featuring JWT authentication, an aviation-inspired workflow, and a live activity timeline deployed on Vercel and Render.",
    metrics: [
      "Full-Stack Next.js + FastAPI",
      "JWT Auth + Supabase PostgreSQL",
      "Live on Vercel & Render",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Supabase",
      "JWT Authentication",
      "Vercel",
      "Render",
    ],
    challenge:
      "Job seekers managing dozens of applications across multiple boards often lose track of interview stages, follow-up dates, and application history when relying on static spreadsheets.",
    solution: [
      "Engineered a responsive Next.js frontend with an aviation-inspired status workflow (Boarding, In-Flight, Final Approach, Landed).",
      "Built a high-performance Python FastAPI backend securing user sessions and API endpoints with JWT authentication.",
      "Integrated PostgreSQL via Supabase to persist job records, status transitions, and a chronological activity timeline.",
      "Deployed the frontend to Vercel and the FastAPI service to Render for full production accessibility.",
    ],
    outcomes: [
      "Delivered a complete end-to-end cloud-hosted full-stack system with decoupled frontend and backend architecture.",
      "Streamlined application status tracking with real-time timeline logging and secure multi-user authentication.",
    ],
    architectureNotes:
      "Next.js Client (Vercel) -> REST API with JWT Bearer Auth -> Python FastAPI Server (Render) -> Supabase PostgreSQL Database.",
    liveUrl: "https://runway-three-theta.vercel.app/login",
    repoUrl: "https://github.com/AliffWafi",
  },
  {
    id: "proj-readyrescue",
    title: "ReadyRescue Web System",
    subtitle: "Enterprise-Style Java EE MVC Web Application with Oracle Database Integration",
    domain: "software",
    domainLabel: "Software & Web Dev",
    accentBg: "bg-[#FFD100]",
    year: "2024–2025",
    role: "Java Web Developer",
    summary:
      "Developed a Java EE web application implementing complete CRUD functionality using the Model-View-Controller (MVC) architecture, integrated with an Oracle relational database for reliable data management.",
    metrics: [
      "Java EE MVC Architecture",
      "Full CRUD Operations",
      "Oracle Database Backend",
    ],
    techStack: [
      "Java EE",
      "Servlets & JSP",
      "MVC Architecture",
      "Oracle Database",
      "SQL",
      "HTML / CSS",
    ],
    challenge:
      "Emergency and rescue coordination workflows require structured, transactionally reliable data management with clear separation between presentation, business rules, and database persistence.",
    solution: [
      "Structured the application around strict Model-View-Controller (MVC) design patterns in Java EE.",
      "Implemented full Create, Read, Update, and Delete (CRUD) controllers and DAO layers connected to an Oracle Database.",
      "Designed relational schemas and SQL queries to maintain referential integrity across system records.",
    ],
    outcomes: [
      "Demonstrated strong command of enterprise Java web architecture and relational database connectivity.",
      "Ensured maintainable, modular code separation between UI views, servlet controllers, and Oracle SQL persistence.",
    ],
    architectureNotes:
      "JSP / HTML Views -> Java EE Servlet Controllers -> Data Access Objects (JDBC) -> Oracle Relational Database.",
    repoUrl: "https://github.com/AliffWafi",
  },
  {
    id: "proj-book-exchange",
    title: "Book Exchange Mobile Application",
    subtitle: "Modern Android App Built with Kotlin, Jetpack Compose & Firebase Cloud Services",
    domain: "software",
    domainLabel: "Mobile & Cloud Dev",
    accentBg: "bg-[#FF6B6B]",
    year: "2025",
    role: "Android Mobile Developer",
    summary:
      "Built a native Android application using Kotlin and Jetpack Compose that enables users to exchange books through user authentication, interactive book listings, and real-time cloud storage on Firebase.",
    metrics: [
      "Kotlin + Jetpack Compose UI",
      "Firebase Auth & Firestore",
      "Cloud Book Listing Sync",
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Android SDK",
      "Firebase Authentication",
      "Firebase Firestore",
      "Cloud Storage",
    ],
    challenge:
      "Students and community readers needed a mobile-first platform to list used books, browse available titles nearby, and coordinate peer-to-peer exchanges with synchronized cloud state.",
    solution: [
      "Built a declarative, modern Android UI using Kotlin and Jetpack Compose for smooth navigation and listing cards.",
      "Integrated Firebase Authentication for secure user sign-up, login, and profile ownership.",
      "Connected Firebase Firestore and Cloud Storage to store book metadata, cover images, and real-time availability updates.",
    ],
    outcomes: [
      "Delivered a responsive cloud-connected Android application without manual server maintenance.",
      "Enabled instant real-time updates across devices whenever new books are listed or requested.",
    ],
    architectureNotes:
      "Kotlin + Jetpack Compose UI -> Android ViewModel State -> Firebase Auth + Firebase Firestore & Cloud Storage.",
    repoUrl: "https://github.com/AliffWafi",
  },
  {
    id: "proj-vehicle-cnn",
    title: "Vehicle Image Recognition System (CNN)",
    subtitle: "Deep Learning Computer Vision Classifier with TensorFlow, Keras & Matplotlib",
    domain: "data-systems",
    domainLabel: "Data, SQL & AI",
    accentBg: "bg-[#2EE59D]",
    year: "2025",
    role: "Machine Learning Developer",
    summary:
      "Trained a Convolutional Neural Network (CNN) model using TensorFlow and Keras to classify vehicle types over 20 epochs—utilizing normalized and one-hot-encoded image datasets, validation evaluation, and Matplotlib visualizations.",
    metrics: [
      "20-Epoch CNN Training",
      "Normalized + One-Hot Pipeline",
      "TensorFlow & Keras Model",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN (Deep Learning)",
      "Matplotlib",
      "Data Preprocessing",
    ],
    challenge:
      "Accurately classifying multi-class vehicle images requires proper image preprocessing, feature extraction layers, and validation monitoring to prevent overfitting.",
    solution: [
      "Preprocessed raw vehicle image datasets using pixel normalization and one-hot encoding for target categories.",
      "Designed and trained a multi-layer Convolutional Neural Network (CNN) in TensorFlow and Keras across 20 training epochs.",
      "Evaluated classification performance against held-out validation data and plotted accuracy/loss curves with Matplotlib.",
    ],
    outcomes: [
      "Successfully built an end-to-end supervised computer vision pipeline from raw image tensors to evaluated predictions.",
      "Visualized training vs. validation convergence across all 20 epochs for transparent model diagnostics.",
    ],
    architectureNotes:
      "Raw Vehicle Image Dataset -> Normalization & One-Hot Encoding -> TensorFlow/Keras CNN Architecture (20 Epochs) -> Validation Metrics & Matplotlib Charts.",
    repoUrl: "https://github.com/AliffWafi",
  },
  {
    id: "proj-birthday-friends",
    title: "BirthdayFriends Android App",
    subtitle: "Local-First Android Application with Java, XML Layouts & SQLite Storage",
    domain: "data-systems",
    domainLabel: "Mobile & Local DB",
    accentBg: "bg-[#C084FC]",
    year: "2023–2024",
    role: "Android Developer",
    summary:
      "Created an Android application using Java, XML, and SQLite for adding, updating, and viewing friend profiles complete with image storage and structured local database management.",
    metrics: [
      "Java + XML Android UI",
      "SQLite Local Persistence",
      "Profile + Image CRUD",
    ],
    techStack: ["Java", "XML", "SQLite", "Android Studio", "Local Storage CRUD"],
    challenge:
      "Users wanted a lightweight, offline-capable mobile directory to store friend profiles, birthdays, and photos directly on-device without requiring an internet connection.",
    solution: [
      "Designed clean Android XML layouts and Java activity controllers for profile creation, editing, and browsing.",
      "Implemented a custom SQLite helper class handling local table creation, SQL queries, and image/profile persistence.",
    ],
    outcomes: [
      "Provided fast, 100% offline-reliable CRUD data management on Android devices.",
      "Reinforced core mobile lifecycle management and embedded relational SQL skills.",
    ],
    architectureNotes:
      "Android XML Views -> Java Activity Controllers -> SQLiteOpenHelper DAO -> On-Device SQLite Database & Image Storage.",
    repoUrl: "https://github.com/AliffWafi",
  },
  {
    id: "proj-rpa-uat-highlight",
    title: "Enterprise RPA Migration & Banking UAT Initiatives",
    subtitle: "Industry Highlights from AmBank Group & Panasonic Industrial Device Malaysia",
    domain: "cloud-ops",
    domainLabel: "BA, QA & Automation",
    accentBg: "bg-[#FF6B6B]",
    year: "2023–2026",
    role: "BA & System Automation Intern",
    summary:
      "Combined industry track record migrating legacy UiPath & Excel VBA workflows to Power Automate Desktop (PAD) at Panasonic, and executing enterprise User Acceptance Testing (UAT) & defect verification at AmBank Group.",
    metrics: [
      "UiPath → PAD Migration",
      "Enterprise Banking UAT",
      "Production SQL & Server Ops",
    ],
    techStack: [
      "Power Automate Desktop (PAD)",
      "UiPath",
      "Excel VBA",
      "SQL",
      "UAT & Regression Testing",
      "Business Process Analysis",
      "Defect Tracking",
    ],
    challenge:
      "Enterprise manufacturing and banking environments depend on zero-defect software releases and resilient unattended automation workflows backed by accurate production database queries.",
    solution: [
      "At AmBank Group: Executed UAT, functional, regression, and business-rule testing across banking workflows; validated business requirements and tracked defects with vendors.",
      "At Panasonic: Engineered Excel VBA workflows, migrated legacy UiPath bots to Power Automate Desktop (PAD), maintained production SQL queries, and monitored live automation servers.",
    ],
    outcomes: [
      "Strengthened production deployment confidence for banking enhancements through rigorous requirement and database verification.",
      "Maintained continuous operational stability across manufacturing automation servers with thorough end-to-end documentation.",
    ],
    architectureNotes:
      "Business Requirements & DB Schema Analysis -> UAT / Regression Test Execution & RPA Workflow Engineering (PAD / VBA / SQL) -> Production Release & Server Monitoring.",
    liveUrl: "https://linkedin.com/in/aliffwafiuddin",
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "exp-ambank",
    type: "work",
    roleOrDegree: "Business Analyst Intern",
    organization: "AmBank Group",
    location: "Malaysia",
    period: "APRIL 2026 — SEPT 2026",
    domain: "cloud-ops",
    accentBg: "bg-[#FFD100]",
    highlights: [
      "Performed User Acceptance Testing (UAT) for enterprise banking applications, validating system enhancements prior to production deployment.",
      "Executed and documented functional, regression, and business-rule testing across multiple banking workflows.",
      "Identified, tracked, and verified software defects in collaboration with business users and third-party vendors.",
      "Validated business requirements through document comparison, UI verification, and workflow analysis.",
      "Analyzed business processes and database relationships to strengthen requirement analysis and testing accuracy.",
    ],
    tags: [
      "User Acceptance Testing (UAT)",
      "Regression Testing",
      "Business Process Analysis",
      "Requirement Validation",
      "Defect Tracking",
      "Database Analysis",
    ],
  },
  {
    id: "exp-panasonic",
    type: "work",
    roleOrDegree: "System Automation Intern",
    organization: "Panasonic Industrial Device Malaysia Sdn. Bhd.",
    location: "Malaysia",
    period: "SEP 2023 — FEB 2024",
    domain: "cloud-ops",
    accentBg: "bg-[#FF6B6B]",
    highlights: [
      "Engineered Excel-based automation workflows using VBA, and migrated legacy UiPath processes to Power Automate Desktop (PAD).",
      "Built and maintained SQL queries for data extraction and troubleshooting across production databases.",
      "Monitored live automation servers, diagnosing and resolving workflow errors to maintain operational stability.",
      "Collaborated with engineers in weekly technical syncs to scope, test, and deploy automation improvements.",
      "Documented and tested internal automation systems end-to-end to ensure reliability across handoffs.",
    ],
    tags: [
      "Power Automate Desktop (PAD)",
      "UiPath",
      "Excel VBA",
      "Production SQL",
      "Server Monitoring",
      "System Documentation",
    ],
  },
  {
    id: "edu-bachelor",
    type: "education",
    roleOrDegree: "Bachelor of Computer Science (Honours)",
    organization: "Universiti Teknologi MARA (UiTM) Shah Alam",
    location: "CGPA: 3.42",
    period: "MARCH 2024 — SEPT 2026",
    domain: "software",
    accentBg: "bg-[#60A5FA]",
    highlights: [
      "Graduated with Honours (CGPA: 3.42), specializing in software engineering, full-stack web & mobile development, AI/CNN, and database systems.",
      "Key Projects: Runway Full-Stack Job Tracker (Next.js, FastAPI, Supabase), Book Exchange Android App (Kotlin, Jetpack Compose), Vehicle CNN Classifier (TensorFlow/Keras).",
    ],
    tags: ["CGPA: 3.42", "Software Engineering", "Full-Stack & Mobile", "AI & Databases"],
  },
  {
    id: "edu-diploma",
    type: "education",
    roleOrDegree: "Diploma in Computer Science",
    organization: "Universiti Teknologi MARA (UiTM) Cawangan Johor, Kampus Segamat",
    location: "CGPA: 3.68",
    period: "OCT 2021 — FEB 2024",
    domain: "software",
    accentBg: "bg-[#2EE59D]",
    highlights: [
      "Achieved strong academic distinction with a 3.68 CGPA across core programming, data structures, relational databases, and system development.",
      "Completed 6-month industrial attachment as System Automation Intern at Panasonic Industrial Device Malaysia.",
    ],
    tags: ["CGPA: 3.68", "Computer Science Foundation", "Java / C++ / SQL", "System Development"],
  },
  {
    id: "cert-sulam",
    type: "certification",
    roleOrDegree: "SULAM Community Service Program",
    organization: "Universiti Teknologi MARA (UiTM)",
    location: "Kampung Budiman, Meru",
    period: "COMMUNITY LEADERSHIP",
    domain: "cloud-ops",
    accentBg: "bg-[#C084FC]",
    highlights: [
      "Community engagement program for residents of Kampung Budiman, Meru.",
      "Raised public awareness on cyber ethics, digital safety, and responsible digital behavior.",
    ],
    tags: ["SULAM (UiTM)", "Cyber Ethics", "Digital Literacy", "Community Engagement"],
  },
];
