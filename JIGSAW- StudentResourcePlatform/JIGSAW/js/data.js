/* ============================================================================
   JIGSAW — data.js
   Stand-in data layer for the MySQL tables defined in database/schema.sql.
   Structured so each object mirrors a row a real backend would SELECT and
   return as JSON — swapping these constants for fetch() calls later doesn't
   require touching the render functions in resources.js / coursework.js.
   ============================================================================ */

/* ----------------------------------------------------------------------
   Resources — mirrors the `resources` table joined with `categories`
   ---------------------------------------------------------------------- */
const RESOURCES = [
  { id: 1, title: "MDN Web Docs", platform: "Mozilla", category: "frontend", description: "The definitive reference for HTML, CSS, and JavaScript — accurate, deeply detailed, and free.", difficulty: "beginner", pricing: "free", url: "https://developer.mozilla.org" },
  { id: 2, title: "CSS Grid Garden", platform: "Codepip", category: "frontend", description: "A browser game that teaches CSS Grid through hands-on puzzles instead of static reading.", difficulty: "beginner", pricing: "free", url: "https://cssgridgarden.com" },
  { id: 3, title: "JavaScript.info", platform: "javascript.info", category: "javascript", description: "A modern, thorough JavaScript tutorial covering fundamentals through advanced browser APIs.", difficulty: "intermediate", pricing: "free", url: "https://javascript.info" },
  { id: 4, title: "Frontend Masters", platform: "Frontend Masters", category: "frontend", description: "In-depth video courses on frontend architecture taught by industry engineers.", difficulty: "intermediate", pricing: "paid", url: "https://frontendmasters.com" },
  { id: 5, title: "Node.js Official Docs", platform: "Node.js Foundation", category: "backend", description: "First-party documentation for the Node.js runtime, covering core modules and APIs.", difficulty: "intermediate", pricing: "free", url: "https://nodejs.org/docs" },
  { id: 6, title: "Designing Data-Intensive Applications", platform: "O'Reilly", category: "backend", description: "The reference book for understanding how real backend systems scale and stay reliable.", difficulty: "advanced", pricing: "paid", url: "https://dataintensive.net" },
  { id: 7, title: "Java Documentation", platform: "Oracle", category: "java", description: "Official Java SE documentation and language specification, the ground truth for syntax questions.", difficulty: "beginner", pricing: "free", url: "https://docs.oracle.com/javase" },
  { id: 8, title: "Baeldung", platform: "Baeldung", category: "java", description: "Practical, example-driven Java and Spring tutorials written for working developers.", difficulty: "intermediate", pricing: "free", url: "https://www.baeldung.com" },
  { id: 9, title: "Real Python", platform: "Real Python", category: "python", description: "Well-structured Python tutorials ranging from syntax basics to packaging and testing.", difficulty: "beginner", pricing: "free", url: "https://realpython.com" },
  { id: 10, title: "Automate the Boring Stuff", platform: "Al Sweigart", category: "python", description: "A free, beginner-friendly book teaching Python through real automation projects.", difficulty: "beginner", pricing: "free", url: "https://automatetheboringstuff.com" },
  { id: 11, title: "LearnCpp.com", platform: "LearnCpp", category: "cpp", description: "A comprehensive, free C++ tutorial series from basic syntax to memory management.", difficulty: "beginner", pricing: "free", url: "https://www.learncpp.com" },
  { id: 12, title: "Competitive Programmer's Handbook", platform: "Antti Laaksonen", category: "cpp", description: "A free PDF covering algorithms and data structures for competitive programming in C++.", difficulty: "advanced", pricing: "free", url: "https://cses.fi/book/book.pdf" },
  { id: 13, title: "SQLBolt", platform: "SQLBolt", category: "sql", description: "Interactive SQL lessons and exercises that run directly in the browser.", difficulty: "beginner", pricing: "free", url: "https://sqlbolt.com" },
  { id: 14, title: "Mode SQL Tutorial", platform: "Mode Analytics", category: "sql", description: "A practical SQL tutorial focused on real analytical queries, not just syntax.", difficulty: "intermediate", pricing: "free", url: "https://mode.com/sql-tutorial" },
  { id: 15, title: "Android Developers Guide", platform: "Google", category: "android", description: "Official Android documentation covering Kotlin, Jetpack Compose, and app architecture.", difficulty: "intermediate", pricing: "free", url: "https://developer.android.com" },
  { id: 16, title: "Kotlin Bootcamp for Programmers", platform: "Google / Udacity", category: "android", description: "A structured free course introducing Kotlin fundamentals for Android development.", difficulty: "beginner", pricing: "free", url: "https://developer.android.com/courses" },
  { id: 17, title: "deeplearning.ai Specializations", platform: "Coursera", category: "ai", description: "Andrew Ng's foundational machine learning and deep learning course series.", difficulty: "intermediate", pricing: "paid", url: "https://www.deeplearning.ai" },
  { id: 18, title: "Kaggle Learn", platform: "Kaggle", category: "ai", description: "Free, bite-sized courses on machine learning, pandas, and data visualization with hands-on notebooks.", difficulty: "beginner", pricing: "free", url: "https://www.kaggle.com/learn" },
  { id: 19, title: "OWASP Top Ten", platform: "OWASP Foundation", category: "cybersecurity", description: "The industry-standard reference for the most critical web application security risks.", difficulty: "intermediate", pricing: "free", url: "https://owasp.org/www-project-top-ten" },
  { id: 20, title: "TryHackMe", platform: "TryHackMe", category: "cybersecurity", description: "Guided, hands-on cybersecurity labs ranging from networking basics to real exploitation.", difficulty: "beginner", pricing: "paid", url: "https://tryhackme.com" },
  { id: 21, title: "AWS Skill Builder", platform: "Amazon Web Services", category: "cloud", description: "Official free AWS training covering core cloud concepts and certification prep.", difficulty: "beginner", pricing: "free", url: "https://skillbuilder.aws" },
  { id: 22, title: "Cloud Resume Challenge", platform: "Forrest Brazeal", category: "cloud", description: "A project-based challenge that teaches cloud fundamentals by having you deploy a real resume site.", difficulty: "intermediate", pricing: "free", url: "https://cloudresumechallenge.dev" },
  { id: 23, title: "Docker Official Docs", platform: "Docker Inc.", category: "devops", description: "First-party documentation for containerization fundamentals and Dockerfile best practices.", difficulty: "beginner", pricing: "free", url: "https://docs.docker.com" },
  { id: 24, title: "KodeKloud", platform: "KodeKloud", category: "devops", description: "Hands-on labs for Docker, Kubernetes, and CI/CD pipelines with real infrastructure sandboxes.", difficulty: "intermediate", pricing: "paid", url: "https://kodekloud.com" }
];

/* ----------------------------------------------------------------------
   Courses — mirrors the `courses` table
   ---------------------------------------------------------------------- */
const COURSES = [
  { id: 1, title: "CS50: Introduction to Computer Science", instructor: "David J. Malan", platform: "Harvard / edX", duration: "12 weeks", level: "beginner", pricing: "free", description: "A rigorous, entertaining introduction to computer science and programming fundamentals.", category: "backend" },
  { id: 2, title: "freeCodeCamp: Responsive Web Design", instructor: "freeCodeCamp Team", platform: "freeCodeCamp", duration: "8 weeks", level: "beginner", pricing: "free", description: "Project-based certification covering HTML5, CSS3, Flexbox, and Grid from scratch.", category: "frontend" },
  { id: 3, title: "The Odin Project: Full Stack JavaScript", instructor: "Open Source Contributors", platform: "The Odin Project", duration: "6 months", level: "intermediate", pricing: "free", description: "A project-heavy full-stack curriculum built entirely around free resources.", category: "backend" },
  { id: 4, title: "Python for Everybody", instructor: "Dr. Chuck Severance", platform: "University of Michigan / Coursera", duration: "8 months", level: "beginner", pricing: "free", description: "A gentle, well-paced introduction to Python programming and data structures.", category: "python" },
  { id: 5, title: "The Complete Web Developer Bootcamp", instructor: "Colt Steele", platform: "Udemy", duration: "65 hours", level: "beginner", pricing: "paid", description: "Full-stack web development from HTML basics through Node.js and databases.", category: "frontend" },
  { id: 6, title: "Java Programming Masterclass", instructor: "Tim Buchalka", platform: "Udemy", duration: "80 hours", level: "beginner", pricing: "paid", description: "A comprehensive Java course covering OOP, collections, and multithreading.", category: "java" },
  { id: 7, title: "Machine Learning Specialization", instructor: "Andrew Ng", platform: "DeepLearning.AI / Coursera", duration: "3 months", level: "intermediate", pricing: "paid", description: "The most widely recommended entry point into practical machine learning.", category: "ai" },
  { id: 8, title: "AWS Certified Cloud Practitioner", instructor: "Stephane Maarek", platform: "Udemy", duration: "14 hours", level: "beginner", pricing: "paid", description: "Exam-focused prep covering AWS core services and cloud fundamentals.", category: "cloud" },
  { id: 9, title: "Docker & Kubernetes: The Complete Guide", instructor: "Stephen Grider", platform: "Udemy", duration: "22 hours", level: "intermediate", pricing: "paid", description: "Hands-on containerization and orchestration for real deployment pipelines.", category: "devops" },
  { id: 10, title: "CS50's Introduction to Cybersecurity", instructor: "Harvard University", platform: "edX", duration: "10 weeks", level: "beginner", pricing: "free", description: "A non-technical-friendly introduction to security concepts and safe practices.", category: "cybersecurity" }
];

/* ----------------------------------------------------------------------
   Pathways — mirrors the `roadmaps` table + its ordered steps
   Each pathway intentionally carries real, specific content (not
   placeholder text) so the page reads as production-ready.
   ---------------------------------------------------------------------- */
const PATHWAYS = [
  {
    id: "frontend",
    title: "Frontend Developer",
    estimatedTime: "6–8 months",
    skills: ["HTML5 & semantic markup", "CSS3 (Flexbox, Grid)", "JavaScript ES6+", "Git & version control", "Basic accessibility"],
    steps: [
      "Learn HTML5 structure and semantic elements",
      "Master CSS3 — box model, Flexbox, and Grid",
      "Build JavaScript fundamentals — DOM, events, fetch",
      "Learn a component-based framework (React or Vue)",
      "Practice responsive design and accessibility",
      "Deploy projects and build a portfolio"
    ],
    freeResources: ["MDN Web Docs", "CSS Grid Garden", "JavaScript.info", "freeCodeCamp"],
    paidResources: ["Frontend Masters", "The Complete Web Developer Bootcamp"],
    practicePlatforms: ["Frontend Mentor", "CodeWars", "CSS Battle"],
    projects: ["Personal portfolio site", "Weather dashboard using a public API", "E-commerce product listing page"],
    interviewPrep: ["CSS layout debugging questions", "JavaScript closures & event loop", "Building a component from a Figma design live"]
  },
  {
    id: "backend",
    title: "Backend Developer",
    estimatedTime: "7–9 months",
    skills: ["A server-side language (Node.js/Python/Java)", "REST API design", "SQL & database modeling", "Authentication basics", "Version control"],
    steps: [
      "Learn core syntax of a backend language",
      "Understand HTTP, REST, and status codes",
      "Build CRUD APIs with a real database",
      "Learn authentication (sessions, JWT)",
      "Study database normalization and indexing",
      "Deploy an API and write basic tests"
    ],
    freeResources: ["Node.js Official Docs", "SQLBolt", "CS50"],
    paidResources: ["Designing Data-Intensive Applications"],
    practicePlatforms: ["LeetCode (SQL & backend problems)", "Postman API challenges"],
    projects: ["Task management REST API", "URL shortener service", "Blog API with authentication"],
    interviewPrep: ["Database indexing trade-offs", "Designing a rate limiter", "Explaining REST vs. RPC"]
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    estimatedTime: "10–14 months",
    skills: ["Frontend fundamentals", "Backend fundamentals", "Database design", "Deployment & hosting", "Testing basics"],
    steps: [
      "Complete frontend fundamentals (HTML/CSS/JS)",
      "Complete backend fundamentals (API + database)",
      "Connect a frontend app to a real backend",
      "Learn authentication across the full stack",
      "Deploy a complete application end to end",
      "Build 2–3 substantial full-stack projects"
    ],
    freeResources: ["The Odin Project", "freeCodeCamp"],
    paidResources: ["The Complete Web Developer Bootcamp"],
    practicePlatforms: ["Frontend Mentor", "LeetCode"],
    projects: ["Full-stack social feed app", "Job board with search and filters", "Real-time chat application"],
    interviewPrep: ["System design basics", "Explaining your project's architecture", "Debugging a live full-stack bug"]
  },
  {
    id: "java",
    title: "Java Developer",
    estimatedTime: "7–9 months",
    skills: ["Core Java & OOP", "Collections framework", "Exception handling", "Spring Boot basics", "SQL fundamentals"],
    steps: [
      "Learn Java syntax and object-oriented principles",
      "Study collections, generics, and streams",
      "Understand exception handling and multithreading basics",
      "Learn Spring Boot for building REST APIs",
      "Connect Spring Boot to a MySQL database",
      "Build and deploy a Spring Boot project"
    ],
    freeResources: ["Java Documentation", "Baeldung"],
    paidResources: ["Java Programming Masterclass"],
    practicePlatforms: ["LeetCode (Java track)", "HackerRank"],
    projects: ["Inventory management system", "REST API with Spring Boot + MySQL"],
    interviewPrep: ["OOP principles with real examples", "Collections vs. Streams", "JVM memory basics"]
  },
  {
    id: "cpp",
    title: "C++ Developer",
    estimatedTime: "6–8 months",
    skills: ["C++ syntax & memory management", "Data structures & algorithms", "STL", "Competitive programming basics"],
    steps: [
      "Learn C++ syntax, pointers, and memory management",
      "Study core data structures (arrays, linked lists, trees, graphs)",
      "Master the STL (vectors, maps, sets)",
      "Practice algorithmic problem solving",
      "Participate in competitive programming contests",
      "Build a systems-level project"
    ],
    freeResources: ["LearnCpp.com", "Competitive Programmer's Handbook"],
    paidResources: [],
    practicePlatforms: ["Codeforces", "LeetCode", "CSES Problem Set"],
    projects: ["Custom data structure library", "Simple memory allocator", "Multiplayer tic-tac-toe over sockets"],
    interviewPrep: ["Time/space complexity analysis", "Pointer arithmetic questions", "Whiteboard algorithm problems"]
  },
  {
    id: "python",
    title: "Python Developer",
    estimatedTime: "5–7 months",
    skills: ["Python syntax & data structures", "File handling & scripting", "Object-oriented Python", "Basic web frameworks (Flask/Django)"],
    steps: [
      "Learn Python syntax and core data structures",
      "Practice scripting and automation tasks",
      "Study object-oriented programming in Python",
      "Learn a web framework (Flask or Django)",
      "Build and deploy a small web application",
      "Explore a specialization (data, AI, or backend)"
    ],
    freeResources: ["Real Python", "Automate the Boring Stuff"],
    paidResources: [],
    practicePlatforms: ["HackerRank (Python track)", "Exercism"],
    projects: ["Automation script for file organization", "Flask blog application", "Command-line expense tracker"],
    interviewPrep: ["List comprehensions & generators", "Mutable vs. immutable types", "Writing clean, Pythonic code"]
  },
  {
    id: "sql",
    title: "SQL & Database Fundamentals",
    estimatedTime: "3–4 months",
    skills: ["Query writing (SELECT, JOIN, GROUP BY)", "Database normalization", "Indexing basics", "Schema design"],
    steps: [
      "Learn basic SQL syntax and querying",
      "Practice JOINs and aggregate functions",
      "Study database normalization (1NF–3NF)",
      "Learn indexing and query optimization basics",
      "Design a normalized schema from scratch",
      "Practice with real, messy datasets"
    ],
    freeResources: ["SQLBolt", "Mode SQL Tutorial"],
    paidResources: [],
    practicePlatforms: ["LeetCode (SQL track)", "StrataScratch"],
    projects: ["Design a schema for an e-commerce platform", "Write analytical queries over a sample dataset"],
    interviewPrep: ["Writing a JOIN query on a whiteboard", "Explaining normalization trade-offs", "Optimizing a slow query"]
  },
  {
    id: "android",
    title: "Android Developer",
    estimatedTime: "6–8 months",
    skills: ["Kotlin fundamentals", "Jetpack Compose", "App architecture (MVVM)", "REST API integration"],
    steps: [
      "Learn Kotlin syntax and fundamentals",
      "Learn Jetpack Compose for UI",
      "Study Android app architecture (MVVM)",
      "Integrate REST APIs into an app",
      "Learn local storage (Room database)",
      "Publish a project to a personal portfolio"
    ],
    freeResources: ["Android Developers Guide", "Kotlin Bootcamp for Programmers"],
    paidResources: [],
    practicePlatforms: ["Google Codelabs"],
    projects: ["Note-taking app with Room database", "Weather app consuming a public API"],
    interviewPrep: ["Activity/Fragment lifecycle", "MVVM vs. MVC", "Handling configuration changes"]
  },
  {
    id: "ai",
    title: "AI / Machine Learning",
    estimatedTime: "9–12 months",
    skills: ["Python for data science", "Linear algebra & statistics basics", "Machine learning fundamentals", "Model deployment basics"],
    steps: [
      "Strengthen Python and math fundamentals",
      "Learn data manipulation with pandas/NumPy",
      "Study core machine learning algorithms",
      "Learn neural networks and deep learning basics",
      "Practice on real datasets (Kaggle)",
      "Deploy a trained model behind a simple API"
    ],
    freeResources: ["Kaggle Learn"],
    paidResources: ["deeplearning.ai Specializations"],
    practicePlatforms: ["Kaggle Competitions"],
    projects: ["House price prediction model", "Image classifier using a CNN", "Sentiment analysis on review data"],
    interviewPrep: ["Bias-variance tradeoff", "Explaining a model's evaluation metrics", "Walking through a past Kaggle project"]
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    estimatedTime: "8–10 months",
    skills: ["Networking fundamentals", "Common vulnerabilities (OWASP Top 10)", "Linux basics", "Ethical hacking fundamentals"],
    steps: [
      "Learn networking fundamentals (TCP/IP, DNS)",
      "Study the OWASP Top 10 vulnerabilities",
      "Get comfortable with Linux and the command line",
      "Practice on guided hands-on labs",
      "Learn basic penetration testing methodology",
      "Pursue an entry-level certification (Security+)"
    ],
    freeResources: ["OWASP Top Ten", "CS50's Introduction to Cybersecurity"],
    paidResources: ["TryHackMe"],
    practicePlatforms: ["TryHackMe", "HackTheBox"],
    projects: ["Home lab network security audit", "Write-up of a solved TryHackMe room"],
    interviewPrep: ["Explaining a common attack (e.g. SQL injection)", "Walking through incident response steps"]
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    estimatedTime: "6–8 months",
    skills: ["Core cloud concepts (compute, storage, networking)", "A major cloud provider (AWS/Azure/GCP)", "Infrastructure as code basics", "Cost management basics"],
    steps: [
      "Learn core cloud computing concepts",
      "Get hands-on with a major provider's free tier",
      "Learn compute, storage, and networking services",
      "Study infrastructure as code (Terraform basics)",
      "Deploy a real project to the cloud",
      "Pursue an entry-level certification"
    ],
    freeResources: ["AWS Skill Builder", "Cloud Resume Challenge"],
    paidResources: ["AWS Certified Cloud Practitioner"],
    practicePlatforms: ["AWS Free Tier sandbox", "Qwiklabs"],
    projects: ["Deploy a personal site using S3 + CloudFront", "Serverless contact form with Lambda"],
    interviewPrep: ["Explaining IaaS vs. PaaS vs. SaaS", "Cost-optimization scenario questions"]
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    estimatedTime: "7–9 months",
    skills: ["Linux fundamentals", "CI/CD pipelines", "Containerization (Docker)", "Orchestration basics (Kubernetes)"],
    steps: [
      "Strengthen Linux and shell scripting fundamentals",
      "Learn Docker and containerization concepts",
      "Build a CI/CD pipeline for a sample project",
      "Learn Kubernetes fundamentals",
      "Study infrastructure monitoring basics",
      "Automate a full deployment pipeline end to end"
    ],
    freeResources: ["Docker Official Docs"],
    paidResources: ["Docker & Kubernetes: The Complete Guide", "KodeKloud"],
    practicePlatforms: ["KodeKloud labs", "Katacoda-style sandboxes"],
    projects: ["Containerize an existing app with Docker", "CI/CD pipeline that auto-deploys on push"],
    interviewPrep: ["Explaining a CI/CD pipeline you built", "Docker vs. virtual machines", "Debugging a failed deployment"]
  }
];

/* ----------------------------------------------------------------------
   Discussion threads — mirrors `discussions` joined with `users`
   ---------------------------------------------------------------------- */
const DISCUSSIONS = [
  { id: 1, title: "Best free resource to actually understand CSS Grid?", category: "frontend", author: "Priya S.", replies: 12, time: "2 hours ago", body: "I've tried three tutorials and still don't intuitively get grid-template-areas. What finally made it click for you?" },
  { id: 2, title: "Stuck on JWT refresh tokens — backend pathway", category: "backend", author: "Rohan K.", replies: 8, time: "5 hours ago", body: "My access token expires but my refresh logic keeps failing silently. Anyone hit this on the JIGSAW backend roadmap?" },
  { id: 3, title: "Is the AI pathway realistic without a strong math background?", category: "ai", author: "Fatima N.", replies: 21, time: "1 day ago", body: "I'm comfortable with Python but never finished calculus. Should I pause and backfill math first, or learn it alongside?" },
  { id: 4, title: "Study group for Java Developer pathway — starting Monday", category: "java", author: "Aditya V.", replies: 6, time: "1 day ago", body: "Putting together a small group to go through the Java roadmap together, accountability check-ins twice a week." },
  { id: 5, title: "TryHackMe vs HackTheBox for absolute beginners?", category: "cybersecurity", author: "Meera J.", replies: 15, time: "2 days ago", body: "Which one has a gentler learning curve for someone with zero networking background?" },
  { id: 6, title: "Deployed my first full-stack project — feedback welcome", category: "fullstack", author: "Karan T.", replies: 9, time: "3 days ago", body: "Finished the job board project from the full-stack pathway. Would appreciate a code review from anyone further along." }
];

const CATEGORY_LABELS = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  java: "Java",
  python: "Python",
  cpp: "C++",
  javascript: "JavaScript",
  sql: "SQL",
  android: "Android Development",
  ai: "Artificial Intelligence",
  cybersecurity: "Cyber Security",
  cloud: "Cloud Computing",
  devops: "DevOps"
};

function getResourceCategories() {
  return [...new Set(RESOURCES.map(r => r.category))].sort();
}

function getPathwayById(id) {
  return PATHWAYS.find(p => p.id === id);
}