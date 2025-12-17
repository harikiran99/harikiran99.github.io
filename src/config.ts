import type { SiteConfig } from "./types"; // The theme likely imports types, if not, remove this line.

export const siteConfig: SiteConfig = {
  // PERSONAL INFO
  name: "Hari Kiran Pendurthi",
  title: "Software Developer | MS in Computer Science",
  description: "Portfolio of Hari Kiran Pendurthi - Software Developer",
  
  // THEME COLOR (The blue you liked)
  accentColor: "#003366", 

  // SOCIAL LINKS
  social: {
    linkedin: "https://linkedin.com/in/harikiranpendurthi",
    github: "https://github.com/harikiran99", 
    email: "pharikiran.ed@gmail.com",
  },

  // ABOUT SECTION
  aboutMe: "Software Developer with a knack for efficiency and a Master's in Computer Science. I specialize in optimizing workflows and building cloud infrastructure that helps teams move faster. I believe great software should be simple, scalable, and resilient. When I'm not coding, you can find me on the court or field playing tennis, football, and pickleball.",

  // SKILLS SECTION
  skills: [
    "Python", 
    "Java", 
    "SQL", 
    "AWS (EC2, S3, RDS)", 
    "React", 
    "Pandas", 
    "Docker", 
    "Kubernetes", 
    "Spark", 
    "Git", 
    "CI/CD", 
    "Node.js"
  ],

  // EXPERIENCE SECTION
  experience: [
    {
      company: "TecZone",
      title: "Software Developer",
      dateRange: "Jul 2025 – Present",
      bullets: [
        "Designed and built scalable ETL pipelines using Python and SQL to automate data ingestion, reducing manual intervention by 40%.",
        "Optimized data processing workflows by implementing efficient Pandas logic, reducing script execution time by 35%.",
        "Identified and resolved backend data discrepancies to standardize data practices across services.",
        "Executed complex SQL queries to prepare high-quality, clean datasets for customer-facing teams."
      ]
    },
    {
      company: "Information Technology Warehouse LLC",
      title: "Software Engineer",
      dateRange: "Aug 2024 – Jun 2025",
      bullets: [
        "Engineered scalable real-time data ingestion pipelines to collect streaming big data into MySQL, reducing latency by 20%.",
        "Developed and deployed Machine Learning models using Python to predict customer behavior and product success.",
        "Designed automated Tableau Prep workflows to resolve discrepancies and ensure dataset reliability.",
        "Translated complex business problem statements into Python-based data analysis solutions, determining the optimal data fields and logic required to generate accurate, actionable outputs for the team."
      ]
    },
    {
      company: "University of Colorado Denver",
      title: "Graduate Assistant",
      dateRange: "Jan 2023 – May 2024",
      bullets: [
        "Developed custom Python scripts and batch processes to automate manual administrative tasks, reducing repetitive workload by 30%.",
        "Streamlined technical support workflows, reducing issue resolution time by 40%.",
        "Maintained database accuracy by performing regular validation checks to resolve discrepancies.",
        "Utilized Git for version control of automation scripts and support tools, ensuring consistent code maintenance and collaborative development standards."
      ]
    },
    {
      company: "Capgemini",
      title: "Software Analyst",
      dateRange: "Jun 2021 – Jun 2022",
      bullets: [
        "Engineered and optimized complex SQL queries for large-scale datasets, reducing query execution time by 50%.",
        "Built and maintained robust CI/CD pipelines using Git to automate deployment processes, reducing deployment time by 40%.",
        "Designed durable API-driven data integrations that standardized data exchange between systems and streamlined automated workflows.",
        "Automated data processing tasks to increase team operational efficiency by 35%."
      ]
    }
  ],

  // PROJECTS SECTION
  projects: [
    {
      name: "Census Data ETL & ML Pipeline",
      description: "Engineered a robust data preprocessing pipeline for 48,000+ records using Pandas. Tuned a Gradient Boosting Classifier achieving 87% accuracy and a 0.92 F1 score.",
      link: "https://github.com/harikiran99/Income-Prediction_using-Data-Mining", // Add actual link if available
      skills: ["Python", "Pandas", "Scikit-Learn", "Gradient Boosting", "Seaborn"]
    },
    {
      name: "Student Performance Prediction",
      description: "Developed a predictive SVM classification system to identify at-risk students. Utilized GridSearchCV for hyperparameter tuning and SMOTE to resolve class imbalance.",
      link: "https://github.com/harikiran99/Predicting-Factors-Influencing-Student-Academic-Performance-Using-ML",
      skills: ["Machine Learning", "Python", "Pandas", "SVM", "Jupyter"]
    },
    {
      name: "Heart Pulse Monitoring and Notification System",
      description: "Designed a cloud-based IoT system for real-time heartbeat monitoring using AWS and Twilio. Published at ICAIS 2021, the system achieved 99% uptime, scaled to support 1,000+ concurrent sensors, and delivered instant SMS alerts for abnormalities during real-world testing.",
      link: "https://ieeexplore.ieee.org/document/9395825",
      skills: ["Research", "Python", "AWS", "IoT", "Twilio", "Oracle"]
    }
  ],

  // EDUCATION SECTION
  education: [
    {
      school: "University of Colorado Denver",
      degree: "Master of Science in Computer Science",
      dateRange: "May 2024",
      achievements: [
        "GPA: 3.87/4.0"
      ]
    },
    {
      school: "Koneru Lakshmaiah Education Foundation",
      degree: "Bachelor of Technology in Computer Science",
      dateRange: "Apr 2021",
      achievements: [
        "GPA: 8.41/10.0"
      ]
    }
  ]
};
