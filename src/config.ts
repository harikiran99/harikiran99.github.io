import type { SiteConfig } from "./types"; // The theme likely imports types, if not, remove this line.

export const siteConfig: SiteConfig = {
  // PERSONAL INFO
  name: "Hari Kiran Pendurthi",
  title: "Software Developer",
  description: "Portfolio of Hari Kiran Pendurthi - Software Developer",
  
  // THEME COLOR (The blue you liked)
  accentColor: "#3498db", 

  // SOCIAL LINKS
  social: {
    linkedin: "https://linkedin.com/in/harikiranpendurthi",
    github: "https://github.com", // Add your actual GitHub if you have one
    email: "pharikiran.ed@gmail.com",
  },

  // ABOUT SECTION
  aboutMe: "Results-oriented Software Developer with a Master’s in Computer Science and expertise in Python, SQL, and AWS. Proven track record of optimizing data ingestion workflows by 40% and reducing query execution time by 50% through scalable pipeline architecture. Skilled in leveraging Machine Learning and CI/CD processes to solve complex business problems and drive operational efficiency.",

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
        "Identified and resolved backend data discrepancies to standardize data practices across services."
      ]
    },
    {
      company: "Information Technology Warehouse LLC",
      title: "Software Engineer",
      dateRange: "Aug 2024 – Jun 2025",
      bullets: [
        "Engineered scalable real-time data ingestion pipelines to collect streaming big data into MySQL, reducing latency by 20%.",
        "Developed and deployed Machine Learning models using Python to predict customer behavior and product success.",
        "Designed automated Tableau Prep workflows to resolve discrepancies and ensure dataset reliability."
      ]
    },
    {
      company: "University of Colorado Denver",
      title: "Graduate Assistant",
      dateRange: "Jan 2023 – May 2024",
      bullets: [
        "Developed custom Python scripts and batch processes to automate manual administrative tasks, reducing repetitive workload by 30%.",
        "Streamlined technical support workflows, reducing issue resolution time by 40%."
      ]
    },
    {
      company: "Capgemini",
      title: "Software Analyst",
      dateRange: "Jun 2021 – Jun 2022",
      bullets: [
        "Engineered and optimized complex SQL queries for large-scale datasets, reducing query execution time by 50%.",
        "Built and maintained robust CI/CD pipelines using Git to automate deployment processes, reducing deployment time by 40%."
      ]
    }
  ],

  // PROJECTS SECTION
  projects: [
    {
      name: "Census Data ETL & ML Pipeline",
      description: "Engineered a robust data preprocessing pipeline for 48,000+ records using Pandas. Tuned a Gradient Boosting Classifier achieving 87% accuracy and a 0.92 F1 score.",
      link: "#", // Add actual link if available
      skills: ["Python", "Pandas", "Scikit-Learn"]
    },
    {
      name: "Student Performance Prediction",
      description: "Developed a predictive SVM classification system to identify at-risk students. Utilized GridSearchCV for hyperparameter tuning and SMOTE to resolve class imbalance.",
      link: "#",
      skills: ["Python", "SVM", "Data Analysis"]
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
