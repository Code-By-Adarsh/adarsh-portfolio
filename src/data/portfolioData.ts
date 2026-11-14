export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack & AI' | 'QA Automation' | 'Manual QA & STLC';
  tagline: string;
  description: string;
  metrics?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge: string;
  description: string[];
  skills: string[];
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeText?: string;
  skills: string[];
  link?: string;
  iconName: string;
}

export const portfolioData = {
  personal: {
    name: "Adarsh Jayprakash Mishra",
    shortName: "Adarsh Mishra",
    tagline: "QA Automation Engineer & Founder at SkillTa",
    subTagline: "Bridging Quality Engineering with High-Impact AI & Web3 Product Development",
    bio: "Passionate QA Automation Engineer with production experience across Web3 (MetaMask, Sepolia), e-commerce, and SaaS. Also an indie hacker who founded SkillTa (AI tech career roadmapping platform) and created Mail-Karo (Gemini AI SaaS). I obsess over bulletproof software quality, automated regression suites, and seamless user experiences.",
    location: "Palghar, Maharashtra, India",
    email: "adarshmishra70931@gmail.com",
    phone: "+91 9235943357",
    statusBadge: "Available for QA & Product Roles",
    avatarUrl: "https://github.com/Code-By-Adarsh.png",
    socials: {
      github: "https://github.com/Code-By-Adarsh",
      linkedin: "https://www.linkedin.com/in/adarsh-jayprakash-mishra",
      twitter: "https://twitter.com/AdarshMi18",
      website: "https://www.skillta.tech",
    },
    resumeUrl: "#contact", // or link to download
  },

  metrics: [
    { label: "Manual & Auto Test Cases", value: "108+", suffix: "Executed", icon: "CheckCircle2" },
    { label: "STLC Pass Rate Achieved", value: "96.3%", suffix: "Accuracy", icon: "TrendingUp" },
    { label: "SkillTa Career Roadmaps", value: "50+", suffix: "Tracks", icon: "Compass" },
    { label: "Production QA Internships", value: "2+", suffix: "Web3 & SaaS", icon: "Briefcase" },
  ],

  skillCategories: [
    {
      name: "Automation Testing",
      description: "Building robust, scalable test frameworks with clean architecture",
      skills: [
        { name: "Selenium WebDriver", level: 90, tag: "Primary" },
        { name: "Playwright", level: 85, tag: "Modern" },
        { name: "TestNG Framework", level: 90, tag: "Runner" },
        { name: "Page Object Model (POM)", level: 95, tag: "Design Pattern" },
        { name: "Maven & Build Tools", level: 85, tag: "Build" },
        { name: "Extent & Allure Reports", level: 88, tag: "Reporting" },
      ],
    },
    {
      name: "Manual QA & Methodologies",
      description: "Thorough STLC execution, defect lifecycle, and test scenario design",
      skills: [
        { name: "STLC & SDLC Cycles", level: 95, tag: "Process" },
        { name: "Boundary Value Analysis (BVA)", level: 90, tag: "Technique" },
        { name: "Equivalence Partitioning (EP)", level: 90, tag: "Technique" },
        { name: "Negative & Exploratory Testing", level: 92, tag: "Quality" },
        { name: "Defect Logging & Triage (Jira)", level: 95, tag: "Agile" },
        { name: "RTM & Test Summary Reports", level: 90, tag: "Docs" },
      ],
    },
    {
      name: "API & Web3 QA",
      description: "Validating backend contracts, smart contracts, and wallet workflows",
      skills: [
        { name: "Postman & REST API Testing", level: 92, tag: "Certified" },
        { name: "JSON & HTTP Endpoints", level: 90, tag: "Core" },
        { name: "MetaMask & Wallet QA", level: 88, tag: "Web3" },
        { name: "Sepolia Testnet & On-chain flows", level: 85, tag: "Blockchain" },
        { name: "MySQL Database Testing", level: 85, tag: "DB" },
      ],
    },
    {
      name: "Software Development & AI",
      description: "Languages and frameworks used to build products and test suites",
      skills: [
        { name: "Java (Core & OOP)", level: 90, tag: "Language" },
        { name: "JavaScript / TypeScript", level: 88, tag: "Language" },
        { name: "Next.js & React", level: 85, tag: "Frontend" },
        { name: "Google Gemini API", level: 90, tag: "Certified" },
        { name: "Tailwind CSS", level: 90, tag: "Styling" },
        { name: "GitHub Actions & Git", level: 88, tag: "CI/CD" },
      ],
    },
  ],

  experiences: [
    {
      id: "stellar-code",
      role: "QA Intern",
      company: "Stellar Code",
      location: "Remote / Hybrid",
      period: "Jul 2026 – Present",
      type: "Internship",
      badge: "Active",
      description: [
        "Perform manual and automated QA on HNTR, a live Web3 NFT/MLM platform, validating wallet connectivity and smart contract flows using MetaMask and Sepolia testnet assets.",
        "Design complex test scenarios around membership levels, referral reward trees, and tokenomic rules to ensure zero transactional leakage.",
        "Log, triage, and track defects to closure in Jira within an agile sprint rhythm, contributing to a production-grade decentralized app.",
      ],
      skills: ["Web3 QA", "MetaMask", "Sepolia Testnet", "Smart Contract Flows", "Jira", "Agile STLC"],
    },
    {
      id: "connektsphere",
      role: "QA Tester Intern",
      company: "ConnektSphere",
      location: "Remote / India",
      period: "Dec 2025 – Feb 2026",
      type: "Internship",
      badge: "Completed",
      description: [
        "Executed multi-phase manual testing, defect logging, and rigorous re-testing cycles across consumer web applications ahead of production deployments.",
        "Built automated UI test scripts using Selenium WebDriver with Java, TestNG, and Page Object Model (POM) architecture.",
        "Validated backend REST API endpoints using Postman, and maintained defect logs and test data across Jira, MySQL, and Google Sheets in cross-functional coordination.",
      ],
      skills: ["Selenium WebDriver", "Java", "TestNG", "Postman API", "POM", "MySQL", "Jira"],
    },
    {
      id: "skillta-founder",
      role: "Founder & Lead Builder",
      company: "SkillTa (skillta.tech)",
      location: "Palghar / Remote",
      period: "2026 – Present",
      type: "Product & Startup",
      badge: "Founder",
      description: [
        "Conceptualized, designed, and developed SkillTa — an AI-powered career guidance platform providing students and early-career techies with structured career roadmaps.",
        "Engineered AI Career Quiz, 50+ tech roadmaps, an AI Resume Reviewer (ATS keyword scoring), and a Skill-Gap Analyzer.",
        "Shipped features in public, gathering early users across Peerlist, Fazier, and social communities.",
      ],
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Product Growth", "QA Testing"],
      link: "https://www.skillta.tech",
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "skillta",
      title: "SkillTa — AI Career Guidance Platform",
      category: "Full-Stack & AI",
      tagline: "Personalized tech roadmaps, AI resume reviewer, and career diagnostic tools",
      description:
        "SkillTa solves the confusion of learning random stacks without direction. Features an intelligent diagnostic quiz, 50+ curated technology roadmaps, ATS resume review, and salary analysis.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Vercel"],
      liveUrl: "https://www.skillta.tech",
      githubUrl: "https://github.com/Code-By-Adarsh",
      featured: true,
      highlights: [
        "Live at skillta.tech with active users",
        "50+ comprehensive roadmaps from Web Dev to AI/ML & DevOps",
        "AI Resume ATS analyzer with actionable bullet rewriting",
      ],
    },
    {
      id: "mail-karo",
      title: "Mail-Karo — AI Email Assistant SaaS",
      category: "Full-Stack & AI",
      tagline: "Autonomous email generation, tone optimization, and campaign analysis via Gemini API",
      description:
        "A self-crafted AI SaaS platform that accelerates professional email workflows. Automatically analyzes context, drafts contextual responses, conducts tone checks, and manages dispatch queues.",
      techStack: ["JavaScript", "Node.js", "Google Gemini API", "Tailwind CSS"],
      githubUrl: "https://github.com/Code-By-Adarsh/Mail-Karo",
      featured: true,
      highlights: [
        "Powered by Google Gemini 1.5/Flash model",
        "Tone adjustment & auto-formatting algorithms",
        "Publicly showcased on GitHub",
      ],
    },
    {
      id: "saucedemo-qa",
      title: "SauceDemo E-Commerce QA Suite",
      category: "Manual QA & STLC",
      tagline: "End-to-End STLC Execution, Test Documentation, and Jira Defect Triage",
      description:
        "Comprehensive manual testing case study executed across the end-to-end commerce funnel: Authentication -> Catalog -> Cart -> Checkout -> Order confirmation.",
      techStack: ["STLC", "Jira", "Test Plan", "RTM", "Boundary Value Analysis"],
      featured: true,
      metrics: ["108 Test Cases", "96.29% Pass Rate", "4 Critical Defects Logged"],
      highlights: [
        "Authored 108 test cases spanning 6 core modules",
        "Logged and prioritized 4 business-logic bugs in Jira",
        "Delivered a production-ready formal Test Summary Report",
      ],
      githubUrl: "https://github.com/Code-By-Adarsh/Manual-Testing-Projects",
    },
    {
      id: "ecom-automation",
      title: "Ecom Automation Framework",
      category: "QA Automation",
      tagline: "Robust Selenium & Java Test Automation Suite with POM and Extent Reports",
      description:
        "Engineered an enterprise-grade test automation framework utilizing Page Object Model design, configurable TestNG test suites, and dynamic HTML Extent Reports.",
      techStack: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Extent Reports", "POM"],
      featured: true,
      metrics: ["Parallel Execution", "Zero-Flakiness Listeners", "HTML Dashboards"],
      highlights: [
        "Reduced regression cycle time through TestNG parallel execution",
        "Reusable utilities for explicit waits, screenshots, and assertions",
        "Clean separation of test data, locators, and test scripts",
      ],
      githubUrl: "https://github.com/Code-By-Adarsh/Automation-Testing-Projects",
    },
    {
      id: "nopcommerce-testing",
      title: "NopCommerce Dual-Track QA Testing",
      category: "QA Automation",
      tagline: "Synchronized manual STLC coverage paired with parallel Selenium automation suite",
      description:
        "In-depth quality evaluation of the NopCommerce platform, combining rigorous negative test cases with automated script suites.",
      techStack: ["Selenium", "Java", "TestNG", "STLC", "Postman"],
      featured: false,
      highlights: [
        "Equivalence Partitioning and Boundary Value Analysis",
        "Automated critical regression checkout paths",
        "Comprehensive Requirement Traceability Matrix",
      ],
      githubUrl: "https://github.com/Code-By-Adarsh/Automation-Testing-Projects",
    },
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (B.Sc CS)",
      institution: "Sonopant Dandekar Shikshan Mandali, University of Mumbai",
      location: "Palghar, Maharashtra",
      period: "2024 – Expected May 2027",
      status: "Pursuing",
      description: "Focused on Data Structures, Object-Oriented Programming, Database Management Systems, and Software Engineering methodologies.",
    },
    {
      degree: "12th Grade (Higher Secondary) — Science (PCMB)",
      institution: "Sonopant Dandekar Shikshan Mandali",
      location: "Palghar, Maharashtra",
      period: "Completed",
      status: "75.67%",
      description: "Solid foundation in Physics, Chemistry, Mathematics, and Biology with high analytical rigor.",
    },
  ],

  certifications: [
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Issued Dec 2025",
      skills: ["REST API Testing", "API Automation", "Postman Collections", "Assertions"],
      link: "https://www.postman.com",
      iconName: "Terminal",
    },
    {
      name: "Google Gemini Certified Student",
      issuer: "Google",
      date: "Oct 2025 · Expires Oct 2028",
      skills: ["Generative AI", "Gemini API", "Prompt Engineering", "AI Workflows"],
      link: "https://cloud.google.com",
      iconName: "Sparkles",
    },
    {
      name: "Learning Playwright",
      issuer: "LinkedIn Learning",
      date: "Completed Aug 2026",
      skills: ["Playwright Automation", "Headless Browser Testing", "E2E Testing"],
      link: "https://www.linkedin.com/learning",
      iconName: "PlayCircle",
    },
    {
      name: "Bharatiya Antariksh Hackathon 2026",
      issuer: "ISRO (Indian Space Research Organisation) & Hack2skill",
      date: "2026",
      skills: ["Innovation", "Problem Solving", "Technical Architecture"],
      badgeText: "Certificate of Participation",
      iconName: "Award",
    },
  ] as Certification[],

  articles: [
    {
      title: "Why Every QA Engineer Should Learn How to Build Products",
      platform: "Medium",
      date: "2026",
      readTime: "5 min read",
      summary: "How building SkillTa and Mail-Karo transformed my approach to edge-case testing, performance evaluation, and developer collaboration.",
      url: "https://medium.com",
    },
    {
      title: "Mastering Test Automation: From Selenium to Modern Playwright",
      platform: "Medium",
      date: "2026",
      readTime: "7 min read",
      summary: "A practical breakdown of moving from POM in Java to Playwright with JavaScript for resilient end-to-end testing.",
      url: "https://medium.com",
    },
  ],
};
