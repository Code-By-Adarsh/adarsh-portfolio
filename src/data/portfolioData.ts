export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack & Security' | 'QA Automation' | 'Manual QA & STLC' | 'All';
  tagline: string;
  description: string;
  period?: string;
  metrics?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface DocumentItem {
  label: string;
  url: string;
  type: 'pdf' | 'image';
  downloadName?: string;
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
  documents?: DocumentItem[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeText?: string;
  skills: string[];
  link?: string;
  iconName: string;
  certificateUrl?: string;
  downloadName?: string;
  badgeImage?: string;
  buttonLabel?: string;
}

export const portfolioData = {
  personal: {
    name: "Adarsh Jayprakash Mishra",
    shortName: "Adarsh Mishra",
    tagline: "QA Automation Tester",
    subTagline: "Hands-on Manual & Automation Testing across Web3, E-Commerce & SaaS Applications",
    bio: "QA Automation Tester with hands-on manual and automation testing experience across Web3, e-commerce, and SaaS applications. Skilled in STLC-driven test design, defect management, and API testing, with a growing automation portfolio spanning Selenium/Java and Playwright/JavaScript. Proven background leading QA initiatives, testing Web3 on-chain transactions, Android apps, and building CodeDropz & SkillTa.",
    location: "Palghar, Maharashtra, India",
    email: "adarshmishra70931@gmail.com",
    phone: "+91 9235943357",
    statusBadge: "Available for QA & Test Automation Roles",
    avatarUrl: "/profile.jpg",
    socials: {
      github: "https://github.com/Code-By-Adarsh",
      linkedin: "https://www.linkedin.com/in/adarsh-jayprakash-mishra",
      twitter: "https://twitter.com/AdarshMi18",
      website: "https://www.skillta.tech",
    },
    resumeUrl: "/Adarsh_Mishra_Resume.pdf",
  },

  metrics: [
    { label: "QA Internships Completed", value: "3", suffix: "Web3, App & Web", icon: "Briefcase" },
    { label: "Manual Test Suite Pass Rate", value: "96.3%", suffix: "108 Test Cases", icon: "TrendingUp" },
    { label: "Lighthouse Performance", value: "100/100", suffix: "SEO & Accessibility", icon: "CheckCircle2" },
    { label: "Roadmap Phases & Topics", value: "290+", suffix: "Vitest Automated", icon: "Compass" },
  ],

  skillCategories: [
    {
      name: "Automation Testing",
      description: "Scalable test automation frameworks, regression pipelines, and test runners",
      skills: [
        { name: "Selenium WebDriver", level: 92, tag: "Primary" },
        { name: "Playwright", level: 90, tag: "Modern E2E" },
        { name: "TestNG Framework", level: 90, tag: "Test Runner" },
        { name: "Maven", level: 88, tag: "Build Tool" },
        { name: "Page Object Model (POM)", level: 95, tag: "Architecture" },
        { name: "Extent & Allure Reports", level: 88, tag: "Reporting" },
      ],
    },
    {
      name: "QA Process & Methodologies",
      description: "Structured STLC execution, test design techniques, and agile defect management",
      skills: [
        { name: "Test Planning & Scenario Design", level: 95, tag: "STLC" },
        { name: "Boundary Value Analysis (BVA)", level: 95, tag: "Design Technique" },
        { name: "Equivalence Partitioning (EP)", level: 95, tag: "Design Technique" },
        { name: "Bug & Defect Reporting", level: 95, tag: "Lifecycle" },
        { name: "Exploratory & Negative Testing", level: 92, tag: "Quality" },
        { name: "Web & Android App Testing", level: 90, tag: "Cross-Platform" },
      ],
    },
    {
      name: "Languages & API",
      description: "Validating API contracts, backend queries, and programming foundations",
      skills: [
        { name: "Java", level: 90, tag: "Core OOP" },
        { name: "JavaScript", level: 90, tag: "Automation" },
        { name: "Postman", level: 95, tag: "Certified Expert" },
        { name: "REST API Testing", level: 92, tag: "Contracts" },
        { name: "MySQL", level: 85, tag: "Database" },
        { name: "HTML & CSS", level: 90, tag: "Web" },
      ],
    },
    {
      name: "Tools & CI/CD",
      description: "Defect trackers, IDEs, version control, and CI/CD pipelines",
      skills: [
        { name: "Jira & Trello", level: 95, tag: "Agile Tracking" },
        { name: "Git & GitHub", level: 92, tag: "Version Control" },
        { name: "GitHub Actions", level: 88, tag: "CI/CD" },
        { name: "IntelliJ IDEA & VS Code", level: 92, tag: "IDEs" },
        { name: "Chrome DevTools", level: 94, tag: "Performance" },
        { name: "Vitest", level: 88, tag: "Data Testing" },
      ],
    },
  ],

  experiences: [
    {
      id: "stellar-code",
      role: "QA Intern",
      company: "Stellar Code",
      location: "Remote / Hybrid",
      period: "Jul 2026 – Nov 2026",
      type: "Internship",
      badge: "Web3 QA",
      description: [
        "Performed manual and automated QA on HNTR, a live Web3 NFT/MLM platform, testing wallet connectivity and on-chain transaction flows using MetaMask and Sepolia testnet assets.",
        "Designed test scenarios around membership and compensation logic and logged, triaged, and tracked defects to closure on a production-facing decentralized application within an agile QA team.",
      ],
      skills: ["Web3 QA", "MetaMask", "Sepolia Testnet", "Smart Contract Flows", "Jira", "Agile QA"],
      documents: [
        {
          label: "Offer Letter",
          url: "/docs/Stellar_Code_Offer_Letter.pdf",
          type: "pdf",
          downloadName: "Stellar_Code_QA_Intern_Offer_Letter.pdf",
        },
        {
          label: "Completion Certificate",
          url: "/docs/Stellar_Code_Completion_Certificate.pdf",
          type: "pdf",
          downloadName: "Stellar_Code_Internship_Completion_Certificate.pdf",
        },
      ],
    },
    {
      id: "rablo",
      role: "Quality Assurance Intern",
      company: "Rablo",
      location: "Remote / India",
      period: "Jul 2026 – Oct 2026",
      type: "Internship",
      badge: "Team Lead",
      description: [
        "Worked as a web tester and Android app tester across two projects, applying QA standards and analytical test design to identify, log, and report defects.",
        "Contributed as a team leader, coordinating testing activities, test assignments, and defect syncs within the QA team.",
      ],
      skills: ["Android App QA", "Web Testing", "Team Leadership", "QA Standards", "Defect Reporting", "Coordination"],
      documents: [
        {
          label: "Offer Letter",
          url: "/docs/Rablo_Offer_Letter.pdf",
          type: "pdf",
          downloadName: "Rablo_QA_Internship_Offer_Letter.pdf",
        },
        {
          label: "Completion Certificate",
          url: "/docs/Rablo_Completion_Certificate.pdf",
          type: "pdf",
          downloadName: "Rablo_Certificate_of_Completion_Team_Lead.pdf",
        },
      ],
    },
    {
      id: "connektsphere",
      role: "QA Tester Intern",
      company: "ConnektSphere",
      location: "Remote / India",
      period: "Dec 2025 – Feb 2026",
      type: "Internship",
      badge: "Automation & API",
      description: [
        "Executed manual testing, defect logging, and re-testing cycles for web applications, improving release readiness ahead of deployment.",
        "Built Selenium WebDriver (Java, TestNG, POM) UI automation scripts, validated backend endpoints via Postman, and maintained test data and defect records across Jira, MySQL, and Google Sheets.",
      ],
      skills: ["Selenium WebDriver", "Java", "TestNG", "Postman API", "POM", "MySQL", "Jira"],
      documents: [
        {
          label: "Offer Letter",
          url: "/docs/ConnektSphere_Offer_Letter.pdf",
          type: "pdf",
          downloadName: "ConnektSphere_Offer_Letter_QA_Tester.pdf",
        },
        {
          label: "Completion Certificate (Photo)",
          url: "/docs/ConnektSphere_Certificate.jpg",
          type: "image",
          downloadName: "ConnektSphere_Internship_Certificate.jpg",
        },
        {
          label: "Letter of Recommendation (LOR)",
          url: "/docs/ConnektSphere_Letter_of_Recommendation.pdf",
          type: "pdf",
          downloadName: "ConnektSphere_Letter_of_Recommendation.pdf",
        },
      ],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "codedropz",
      title: "CodeDropz — Secure, Zero-Login Ephemeral Code & File Sharing",
      category: "Full-Stack & Security",
      tagline: "Real-time code, multi-file & folder sharing with auto-expiration and access limits",
      period: "Jul 2026 – Nov 2026",
      description:
        "Designed, built, and end-to-end tested a zero-login sharing platform for real-time code, multi-file, and folder transfers with auto-expiration and access limits. Audited RLS/RPC security policies and built automated Playwright regression suites.",
      techStack: ["Playwright", "TypeScript", "BVA / EP", "Security Testing", "RLS/RPC Policies", "Next.js"],
      featured: true,
      liveUrl: "https://codedropz.vercel.app/",
      githubUrl: "https://github.com/LeviHQ/codedropz",
      metrics: ["BVA (10m–30d, 1–999 views)", "Zero Data Leakage", "Full Playwright Suite"],
      highlights: [
        "Applied BVA and Equivalence Partitioning to expiry timeouts (10m–30d) and view limits (1–999)",
        "Tested file-upload security across binaries, scripts, nested folders, and complex filenames",
        "Audited RLS/RPC policies, closing public storage deletion vulnerabilities",
        "Ran automated Playwright regression suites covering upload -> retrieval -> zip extraction flow",
      ],
    },
    {
      id: "skillta",
      title: "SkillTa — AI-Powered Career Guidance & Roadmap Platform",
      category: "Full-Stack & Security",
      tagline: "Platform spanning 60 tech disciplines and 290 roadmap phases with 100/100 Lighthouse score",
      period: "Mar 2026 – Sep 2026",
      description:
        "Led QA, end-to-end testing, and performance optimization for SkillTa. Built Vitest automation suites enforcing data integrity across 870+ catalog topics and validated Google Auth, ads, and iframe sandboxing.",
      techStack: ["Vitest", "Chrome DevTools", "PageSpeed", "Google Auth QA", "Iframe Sandboxing", "Next.js"],
      featured: true,
      liveUrl: "https://www.skillta.tech",
      githubUrl: "https://github.com/LeviHQ/skillta",
      metrics: ["100 SEO & 100 Accessibility", "96 Performance", "870+ Topics Validated"],
      highlights: [
        "Led QA, end-to-end testing, and performance optimization across 60 disciplines and 290 roadmap phases",
        "Built Vitest automation suites enforcing data integrity across 870+ catalog topics",
        "Ensured zero data leakage across authenticated user tiers",
        "Achieved 100 SEO, 100 Accessibility, and 96 Desktop Performance scores via Chrome DevTools",
      ],
    },
    {
      id: "saucedemo-qa",
      title: "SauceDemo E-Commerce — Manual QA (STLC)",
      category: "Manual QA & STLC",
      tagline: "Full STLC testing across Login -> Cart -> Checkout flow with 108 test cases",
      period: "Mar 2026",
      description:
        "Executed full STLC testing across the complete shopping flow. Authored 108 test cases across 6 modules, achieving a 96.29% pass rate and logging 4 defects in Jira by severity.",
      techStack: ["STLC", "Jira", "Test Plan", "RTM", "Boundary Value Analysis", "Severity Triage"],
      featured: true,
      githubUrl: "https://github.com/Code-By-Adarsh/Manual-Testing-Projects/tree/main/Project-2",
      metrics: ["108 Test Cases", "96.29% Pass Rate", "4 Jira Bugs Triaged"],
      highlights: [
        "Executed full STLC testing across Login -> Cart -> Checkout flow",
        "Authored 108 test cases across 6 modules (96.29% pass rate)",
        "Logged and prioritized 4 defects in Jira by severity",
        "Documented comprehensive Test Summary Report with defect lifecycle tracking",
      ],
    },
    {
      id: "ecom-automation",
      title: "E-Commerce Automation — Selenium/Java (Ecom & NopCommerce)",
      category: "QA Automation",
      tagline: "Selenium WebDriver, Java, TestNG, POM framework with Extent Reports & NopCommerce testing",
      period: "Oct 2025 – Nov 2025",
      description:
        "Built a Selenium WebDriver, Java, TestNG, POM framework with reusable utilities, listeners, and Extent Reports; automated core purchase flows with parallel execution. Performed end-to-end manual testing on NopCommerce following STLC alongside the automation suite.",
      techStack: ["Selenium WebDriver", "Java", "TestNG", "POM", "Extent Reports", "BVA / EP"],
      featured: true,
      githubUrl: "https://github.com/Code-By-Adarsh/Automation-Testing-Projects/tree/main/Project_3_EcomAutomationFramework",
      metrics: ["Parallel Execution", "Extent Reports", "Dual-Track Coverage"],
      highlights: [
        "Automated core purchase flows with parallel execution to cut regression runtime",
        "Built reusable utilities, custom listeners, and dynamic Extent Reports",
        "Performed end-to-end manual testing (BVA, EP, negative testing) on NopCommerce following STLC",
        "Maintained parallel Selenium automation suite alongside manual test coverage",
      ],
    },
    {
      id: "mail-karo",
      title: "Mail Karo — Manual Testing of a Web Application",
      category: "Manual QA & STLC",
      tagline: "Functional, UI, negative, form-validation test cases and cross-browser quality checks",
      period: "Nov 2025 – Feb 2026",
      description:
        "Designed and executed functional, UI, negative, and form-validation test cases for the Mail Karo web app; ran cross-browser checks and documented defects.",
      techStack: ["Manual QA", "Form Validation", "Cross-Browser Testing", "Negative Testing", "Defect Reporting"],
      featured: false,
      liveUrl: "https://mail-karo.netlify.app",
      githubUrl: "https://github.com/Code-By-Adarsh/Mail-Karo",
      highlights: [
        "Designed and executed functional, UI, negative, and form-validation test cases",
        "Ran cross-browser compatibility checks across Chromium, Firefox, and WebKit",
        "Documented UI responsiveness defects and edge-case form submission errors",
      ],
    },
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (B.Sc CS)",
      institution: "Sonopant Dandekar Shikshan Mandali, University of Mumbai",
      location: "Palghar, Maharashtra",
      period: "Expected May 2027",
      status: "Pursuing",
      description: "Focused on Data Structures, Object-Oriented Programming, Database Management Systems, and Software Testing Life Cycle (STLC).",
    },
    {
      degree: "12th Grade (Higher Secondary) — Science (PCMB)",
      institution: "Sonopant Dandekar Shikshan Mandali",
      location: "Palghar, Maharashtra",
      period: "Completed",
      status: "75.67%",
      description: "Rigorous analytical training in Physics, Chemistry, Mathematics, and Biology.",
    },
  ],

  certifications: [
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Dec 2025",
      skills: ["API Testing", "Postman API", "REST Endpoints", "Collections"],
      certificateUrl: "/certificates/Postman_API_Student_Expert_Badge.png",
      downloadName: "Postman_API_Student_Expert_Badge.png",
      badgeImage: "/certificates/Postman_API_Student_Expert_Badge.png",
      buttonLabel: "Download Badge (PNG)",
      link: "https://www.postman.com",
      iconName: "Terminal",
    },
    {
      name: "Google Gemini Certified Student",
      issuer: "Google for Education",
      date: "Oct 2025 · Valid to 2028",
      skills: ["Artificial Intelligence (AI)", "Generative AI", "Gemini API"],
      certificateUrl: "/certificates/Google_Gemini_Certified_Student.pdf",
      downloadName: "Google_Gemini_Certified_Student.pdf",
      buttonLabel: "Download Certificate (PDF)",
      link: "https://cloud.google.com",
      iconName: "Sparkles",
    },
    {
      name: "Learning Playwright",
      issuer: "LinkedIn Learning",
      date: "Aug 2026",
      skills: ["Automation", "Test Automation Tools", "Playwright E2E"],
      certificateUrl: "/certificates/LinkedIn_Learning_Playwright.pdf",
      downloadName: "LinkedIn_Learning_Playwright_Certificate.pdf",
      buttonLabel: "Download Certificate (PDF)",
      link: "https://www.linkedin.com/learning",
      iconName: "PlayCircle",
    },
    {
      name: "Bharatiya Antariksh Hackathon 2026",
      issuer: "ISRO (Indian Space Research Organisation)",
      date: "2026",
      badgeText: "Certificate ID: 2026H2SO6BAH-P09503",
      skills: ["Idea Submission", "Technical Innovation", "Hackathon"],
      certificateUrl: "/certificates/ISRO_Bharatiya_Antariksh_Hackathon_2026.pdf",
      downloadName: "ISRO_Bharatiya_Antariksh_Hackathon_Certificate.pdf",
      buttonLabel: "Download Certificate (PDF)",
      link: "https://www.isro.gov.in",
      iconName: "Award",
    },
  ] as Certification[],

  articles: [
    {
      title: "Defect-Driven Engineering: Bridging Manual STLC with Modern Playwright",
      platform: "Medium / Tech Guide",
      date: "2026",
      readTime: "6 min read",
      summary: "How rigorous Boundary Value Analysis, RLS policy audits, and automated regression suites prevent catastrophic production leaks.",
      url: "https://github.com/Code-By-Adarsh",
    },
    {
      title: "Testing Web3 & Zero-Login Architecture: CodeDropz & HNTR Deep Dive",
      platform: "Medium / Tech Guide",
      date: "2026",
      readTime: "8 min read",
      summary: "Testing smart contract compensation trees, MetaMask wallet states, and ephemeral upload security against malicious binaries.",
      url: "https://github.com/Code-By-Adarsh",
    },
  ],
};
