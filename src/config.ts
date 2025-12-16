// src/config.ts

export const config = {
  personalInfo: {
    name: "Hari Kiran Pendurthi",
    title: "Software Developer",
    location: "Denver, CO",
    email: "pharikiran.ed@gmail.com",
    phone: "+1 720-314-4399",
    resumeUrl: "/resume.pdf", // Ensure you have a file named resume.pdf in your public folder
  },

  // CHANGE THIS COLOR to update the theme site-wide
  colors: {
    accent: "#3498db", // The classic DevPortfolio Blue
  },

  socials: {
    linkedin: "https://linkedin.com/in/harikiranpendurthi",
    github: "https://github.com", // Add your actual GitHub URL if available
    // twitter: "https://twitter.com/yourhandle", // Optional
  },

  about: {
    header: "About Me",
    description: `Results-oriented Software Developer with a Master’s in Computer Science and expertise in Python, SQL, and AWS. Proven track record of optimizing data ingestion workflows by 40% and reducing query execution time by 50% through scalable pipeline architecture. Skilled in leveraging Machine Learning and CI/CD processes to solve complex business problems and drive operational efficiency.`,
  },

  skills: [
    "Python", "Java", "SQL", "AWS (EC2, S3, RDS)", 
    "React", "Pandas", "Docker", "Kubernetes", 
    "Spark", "Git", "CI/CD", "Node.js"
  ],

  experience: [
    {
      company: "TecZone",
      title: "Software Developer",
      date: "Jul 2025 – Present",
      location: "USA",
      description: [
        "Designed and built scalable ETL pipelines using Python and SQL to automate data ingestion, reducing manual intervention by 40%.",
        "Optimized data processing workflows by implementing efficient Pandas logic, reducing script execution time by 35%.",
        "Identified and resolved backend data discrepancies to standardize data practices across services."
      ]
    },
    {
      company: "Information Technology Warehouse LLC",
      title: "Software Engineer",
      date: "Aug 2024 – Jun 2025",
      location: "USA",
      description: [
        "Engineered scalable real-time data ingestion pipelines to collect streaming big data into MySQL, reducing latency by 20%.",
        "Developed and deployed Machine Learning models using Python to predict customer behavior and product success.",
        "Designed automated Tableau Prep workflows to resolve discrepancies and ensure dataset reliability."
      ]
    },
    {
      company: "University of Colorado Denver",
      title: "Graduate Assistant",
      date: "Jan 2023 – May 2024",
      location: "Denver, CO",
      description: [
        "Developed custom Python scripts and batch processes to automate manual administrative tasks, reducing repetitive workload by 30%.",
        "Streamlined technical support workflows, reducing issue resolution time by 40%."
      ]
    },
    {
      company: "Capgemini",
      title: "Software Analyst",
      date: "Jun 2021 – Jun 2022",
      location: "India",
      description: [
        "Engineered and optimized complex SQL queries for large-scale datasets, reducing query execution time by 50%.",
        "Built and maintained robust CI/CD pipelines using Git to automate deployment processes, reducing deployment time by 40%."
      ]
    }
  ],

  projects: [
    {
      title: "Census Data ETL & ML Pipeline",
      description: "Engineered a robust data preprocessing pipeline for 48,000+ records using Pandas. Tuned a Gradient Boosting Classifier achieving 87% accuracy and a 0.92 F1 score.",
      tags: ["Python", "Pandas", "Scikit-Learn"],
      link: "#", // Add project link if available
      icon: "fa-code"
    },
    {
      title: "Student Performance Prediction",
      description: "Developed a predictive SVM classification system to identify at-risk students. Utilized GridSearchCV for hyperparameter tuning and SMOTE to resolve class imbalance.",
      tags: ["Python", "SVM", "Data Analysis"],
      link: "#",
      icon: "fa-graduation-cap"
    }
  ],

  education: [
    {
      school: "University of Colorado Denver",
      degree: "Master of Science in Computer Science",
      date: "May 2024",
      details: "GPA: 3.87/4.0"
    },
    {
      school: "Koneru Lakshmaiah Education Foundation",
      degree: "Bachelor of Technology in Computer Science",
      date: "Apr 2021",
      details: "GPA: 8.41/10.0"
    }
  ],

  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "Salesforce Certified Administrator",
    "Salesforce Certified AI Associate",
    "Automation Anywhere Certified RPA Professional"
  ]
};
