export const profile = {
  name: "Abishek Subramanian",
  role: "Data & AI Solution Architect",
  location: "Bengaluru, India",
  email: "Abishek_vnb@hotmail.com",
  phone: "+91 98451 33922",
  linkedin: "https://linkedin.com/in/abishek-subramanian",
  github: "https://github.com/learnwithabi",
  website: "https://learnwithabi.github.io",
  resume: "../Abishek-Subramanian-Resume.pdf",
  photo: `${import.meta.env.BASE_URL}abishek-pp.png`,
  tagline: "18+ years architecting governed, AI-ready Databricks lakehouse platforms at petabyte scale — currently leading a 4 PB Azure-to-GCP migration with zero downtime.",
  bio: "I'm a Data & AI Solution Architect with 18+ years of experience building governed, AI-ready lakehouse platforms — including nearly 4 years at Databricks. I enjoy taking migrations and platforms from architecture through automation, governance, and production at petabyte scale.",
};

export const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "5+", label: "Years in Databricks" },
  { value: "15+", label: "Team Size Led" },
  { value: "4 PB", label: "Data Migrated" },
  { value: "20%+", label: "Efficiency Gains" },
];

export const experience = [
  {
    company: "Wavicle Data Solutions",
    logo: "https://www.google.com/s2/favicons?domain=wavicledata.com&sz=128",
    role: "Associate Director — Databricks Technologies & Delivery",
    date: "Feb 2026 – Present",
    location: "Bengaluru, India",
    current: true,
    bullets: [
      "Architecting a **petabyte-scale Azure-to-GCP Databricks lakehouse migration** for a global retail group — 4 PB moved through a phased, zero-downtime program",
      "Designed a **six-step automated migration framework**: classification → config mapping → JSON transform → dependency-ordered deployment → REST-API deployment → validation",
      "Built custom **Asset Migrator & Validator** frameworks for governed, error-free cross-cloud migration of clusters, jobs, pipelines, secrets, and policies",
      "Implemented **Unity Catalog governance** on the target platform, preserving access controls, lineage, and audit logs",
      "Leading a distributed offshore/onsite engineering team — solution architecture, technical mentoring, senior stakeholder management",
    ],
  },
  {
    company: "Databricks India Pvt. Ltd.",
    logo: "https://cdn.simpleicons.org/databricks/FF3621",
    role: "Senior Solution Engineer",
    date: "May 2022 – Feb 2026",
    location: "Bengaluru, India",
    bullets: [
      "Established **Databricks Asset Bundle (DAB)** deployment best practices, reducing dev cycles and infra costs for enterprise customers",
      "Developed implementation guidance for **GenAI using RAG** (Genie AI/BI, AgentBrick), enabling enterprise-scale GenAI adoption",
      "Architected production pipelines with **Delta Live Tables + dbt** — medallion architecture, data quality expectations, Workflows orchestration",
      "Designed a custom **AI Bot Space** on Databricks Apps, integrating Unity Catalog and custom models into a governed enterprise AI tool",
      "Built **ML lifecycle platforms** with MLflow — experiment tracking, model registry, REST-based Model Serving",
      "Optimised **platform costs via system tables** — DBU tracking, cluster utilisation, autoscaling policy enforcement",
    ],
  },
  {
    company: "Oracle India Pvt. Ltd.",
    logo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    role: "Principal Software Engineer",
    date: "Aug 2021 – May 2022",
    location: "Bengaluru, India",
    bullets: [
      "Onboarded Oracle Cloud Fusion (SaaS) enterprise customers — solution proposals, implementation, cross-stakeholder coordination pre-sales through go-live",
      "Defined cloud migration strategy from on-premises to **Oracle Cloud Infrastructure (OCI)** for SaaS and IaaS workloads",
      "Drove escalations to swift resolution, coordinating with engineering leads to pre-empt delivery issues",
    ],
  },
  {
    company: "NTT Data",
    logo: "https://www.google.com/s2/favicons?domain=nttdata.com&sz=128",
    role: "System Integration Specialist Advisor",
    date: "May 2018 – Aug 2021",
    location: "Bengaluru, India",
    bullets: [
      "Designed scalable, secure, cost-effective multi-cloud architectures across **Azure, AWS, VMware**; led legacy-to-cloud-native modernisation",
      "Built IaC automation frameworks using **Terraform, Ansible, Jenkins** — provisioning, deployment pipelines, configuration management",
      "Established cloud governance, security, and compliance standards across DevOps, security, and business stakeholders",
    ],
  },
];

export const earlierCareer = [
  { role: "Senior Software Engineer", company: "Oracle India", logo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128", date: "Jul 2015 – May 2018" },
  { role: "Cloud Engineer", company: "Citrix R&D India", logo: "https://cdn.simpleicons.org/citrix/000000", date: "Jun 2013 – Jul 2015" },
  { role: "System Engineer", company: "CSS Corp", logo: null, initials: "CS", color: "#16325c", date: "Jun 2011 – Jun 2013" },
  { role: "Software Engineer (Contract)", company: "Wipro Technologies", logo: "https://cdn.simpleicons.org/wipro/000000", date: "Sep 2010 – Jun 2011" },
];

export const skillCategories = [
  {
    name: "Databricks & AI/ML",
    icon: "https://cdn.simpleicons.org/databricks/FF3621",
    skills: ["Lakehouse", "Unity Catalog", "Delta Live Tables", "LakeFlow", "Genie AI/BI", "AgentBrick", "RAG / GenAI / LLM", "MLflow", "MLOps", "Model Serving", "Auto Loader", "Structured Streaming", "Databricks Apps", "Asset Bundles", "dbt"],
  },
  {
    name: "Cloud Platforms",
    skills: [
      { label: "Azure Databricks", icon: "https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128" },
      { label: "ADLS Gen2", icon: "https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128" },
      { label: "Event Hubs", icon: "https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128" },
      { label: "Key Vault", icon: "https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128" },
      { label: "Azure DevOps", icon: "https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128" },
      { label: "ARM Templates", icon: "https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128" },
      { label: "AKS", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { label: "AWS Databricks", icon: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128" },
      { label: "S3 / EC2", icon: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128" },
      { label: "Amazon Bedrock", icon: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128" },
      { label: "AWS IAM", icon: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128" },
      { label: "GCP Databricks", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
      { label: "GCS / BigQuery", icon: "https://cdn.simpleicons.org/googlebigquery/669DF6" },
      { label: "Terraform", icon: "https://cdn.simpleicons.org/terraform/844FBA" },
    ],
  },
  {
    name: "DevOps & Programming",
    skills: [
      { label: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { label: "SQL / Spark SQL" },
      { label: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { label: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { label: "CI/CD" },
      { label: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
      { label: "Ansible", icon: "https://cdn.simpleicons.org/ansible/000000" },
      { label: "Bash", icon: "https://cdn.simpleicons.org/gnubash/4EAA25" },
    ],
  },
  {
    name: "Monitoring & Automation",
    skills: [
      { label: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800" },
      { label: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus/E6522C" },
      { label: "ELK Stack", icon: "https://cdn.simpleicons.org/elastic/005571" },
      { label: "SolarWinds" }, { label: "KACE" }, { label: "Automox" },
      { label: "Chocolatey", icon: "https://cdn.simpleicons.org/chocolatey/80B5E3" },
    ],
  },
  {
    name: "Operating Systems",
    skills: [
      { label: "Ubuntu", icon: "https://cdn.simpleicons.org/ubuntu/E95420" },
      { label: "Red Hat / CentOS", icon: "https://cdn.simpleicons.org/redhat/EE0000" },
      { label: "Oracle Linux" }, { label: "Windows Server" },
      { label: "VMware ESXi", icon: "https://cdn.simpleicons.org/vmware/607078" },
      { label: "XenServer", icon: "https://cdn.simpleicons.org/citrix/000000" },
    ],
  },
];

export const projects = [
  { name: "Petabyte-Scale Azure-to-GCP Lakehouse Migration", date: "Feb 2026 – Present", desc: "4 PB zero-downtime migration for a global retail enterprise with full Unity Catalog governance and a six-step automated Asset Migrator & Validator framework.", tags: ["Databricks", "Unity Catalog", "Azure", "GCP"] },
  { name: "GenAI RAG AI Bot Space", date: "2023 – 2026", desc: "Enterprise AI Bot Space using RAG, Unity Catalog-managed models, and MLflow for secure, governed GenAI workflows at scale.", tags: ["RAG", "Unity Catalog", "MLflow"] },
  { name: "Delta Live Tables + dbt Enterprise Pipeline", date: "2023 – 2026", desc: "Medallion architecture pipelines with data quality expectations and automated Workflows orchestration for enterprise ELT at scale.", tags: ["Delta Live Tables", "dbt", "Workflows"] },
  { name: "Databricks Platform Cost Optimisation", date: "2023 – 2026", desc: "System-tables observability — DBU tracking, cluster utilisation analysis, and autoscaling policies delivering measurable spend reduction.", tags: ["System Tables", "FinOps"] },
  { name: "Amazon Bedrock + Databricks Model Serving", date: "2024", desc: "Integration between Bedrock foundation models and Databricks Model Serving endpoints, demonstrated at Nasdaq AWS Community.", tags: ["Bedrock", "Model Serving"] },
  { name: "Multi-Cloud IaC Automation Framework", date: "2018 – 2021", desc: "Terraform, Ansible & Jenkins-based automation across Azure, AWS, VMware — provisioning, CI/CD, and cloud governance at NTT Data.", tags: ["Terraform", "Ansible", "Jenkins"] },
  { name: "Unity Catalog Governance Framework", date: "2022 – 2026", desc: "Enterprise UC implementation — three-level namespace, fine-grained access controls, row/column-level security, lineage, and audit logging.", tags: ["Unity Catalog", "Governance"] },
  { name: "Structured Streaming Real-Time Pipeline", date: "2022 – 2026", desc: "High-throughput event ingestion using Structured Streaming & Auto Loader — exactly-once semantics, schema evolution, Delta Lake as sink.", tags: ["Structured Streaming", "Auto Loader"] },
  { name: "DAB CI/CD Deployment Framework", date: "2022 – 2026", desc: "Databricks Asset Bundle CI/CD best practices — automated workspace deployment, environment promotion, version-controlled Jobs and pipelines.", tags: ["Asset Bundles", "CI/CD"] },
];

export const certifications = [
  { provider: "Databricks", items: ["Data Engineer Professional & Associate", "Solution Architect Essentials (Partner)", "Platform Administrator", "Generative AI Fundamentals & GenAI Associate", "Machine Learning Associate", "Lakehouse Fundamentals"] },
  { provider: "Microsoft Azure", items: ["Solutions Architect Expert", "DevOps Engineer Expert", "Administrator Associate", "Identity & Access Administrator Associate"] },
  { provider: "AWS", items: ["Solutions Architect – Professional", "Solutions Architect – Associate", "AWS Community Builder"] },
  { provider: "Oracle", items: ["VM 3.0 for x86 Implementation Specialist", "Cloud Infrastructure Classic Associate Architect"] },
  { provider: "Other", items: ["Red Hat Certified Engineer (RHCE)", "VMware Certified Professional – DCV", "Citrix Certified – XenServer Administration", "ITIL V3"] },
];

export const recognition = [
  { title: "Founder & Lead", desc: "Databricks User Group India — India's largest, 6 cities: Bangalore, Hyderabad, Pune, Coimbatore, Kolkata, Chennai" },
  { title: "Creator", desc: "#LearnWithAbi — Databricks & GenAI content on LinkedIn, Medium, GitHub" },
  { title: "DATA+AI Summit Recap", desc: "Speaker — Databricks & Apache Iceberg" },
  { title: "9th World ML Summit", desc: 'Speaker — "Unlocking MLOps Potential"' },
  { title: "ServerlessDays Bengaluru", desc: "Speaker — Databricks Serverless SQL" },
  { title: "TechXConf 2024", desc: "Speaker at Asia's largest AI & cloud conference" },
  { title: "Nasdaq AWS Community", desc: "Session — Bedrock + Databricks Model Serving" },
  { title: "Topmate Creator Awards 2024", desc: "Nominated — Extraordinaire Category" },
];

export const education = {
  degree: "B.Tech, Electronics & Communication Engineering",
  school: "Pondicherry University",
  years: "2004 – 2007",
};
