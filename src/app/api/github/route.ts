import { NextResponse } from "next/server";

export interface RepoProject {
  id: string | number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
  image?: string;
  year: string;
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured?: boolean;
  category: "ai-data" | "software-web" | "all";
}

// Curated metadata mapping for known GitHub repositories
const repoMetadata: Record<string, Partial<RepoProject>> = {
  "ganapati-build-mart-website": {
    title: "Ganapati Build Mart",
    subtitle: "Full-Stack E-Commerce & Management Platform",
    description:
      "Full-stack commercial web application featuring interactive product catalogues, inquiry management, administrative control panel, and database-backed dynamic operations.",
    tags: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "MySQL", "Vercel"],
    color: "#E67E22",
    featured: true,
    category: "software-web",
    liveUrl: "https://ganapati-build-mart-website-git-main-archi-jain19s-projects.vercel.app/",
  },
  "ganapati-build-mart": {
    title: "Ganapati Build Mart",
    subtitle: "Full-Stack E-Commerce & Management Platform",
    description:
      "Full-stack commercial web application featuring interactive product catalogues, inquiry management, administrative control panel, and database-backed dynamic operations.",
    tags: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "MySQL", "Vercel"],
    color: "#E67E22",
    featured: true,
    category: "software-web",
    liveUrl: "https://ganapati-build-mart-website-git-main-archi-jain19s-projects.vercel.app/",
  },
  riskradar: {
    title: "RiskRadar",
    subtitle: "ML Dropout Risk Prediction Model",
    description:
      "ML classification model developed to predict student dropout risk using data preprocessing, feature engineering, model training, and performance evaluation with Python.",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Feature Engineering"],
    color: "#C4622D",
    featured: true,
    category: "ai-data",
  },
  google_drive_clone: {
    title: "Google Drive Clone",
    subtitle: "Full-Stack Cloud Storage Application",
    description:
      "A full-stack cloud storage application that allows users to upload, manage, and share files securely, built with separate frontend and backend modules.",
    tags: ["TypeScript", "FastAPI", "React", "Cloud Storage", "REST APIs"],
    color: "#4A90E2",
    featured: true,
    category: "software-web",
  },
  google_drive_clone_backend: {
    title: "Google Drive Clone Backend",
    subtitle: "FastAPI Cloud Service",
    description:
      "Python backend service built with FastAPI providing secure JWT authentication, file streaming, metadata management, and cloud storage API endpoints.",
    tags: ["FastAPI", "Python", "JWT Auth", "REST APIs", "Vercel"],
    color: "#27AE60",
    featured: false,
    category: "software-web",
  },
  ai_ml_assignment: {
    title: "FacetLens",
    subtitle: "Conversational Facet Scoring Pipeline",
    description:
      "Scalable conversational facet scoring pipeline with principled abstention, automating dialogue analysis, feature scoring, and model evaluation using Python.",
    tags: ["Python", "NLP", "Machine Learning", "Pipeline", "Data Evaluation"],
    color: "#9B51E0",
    featured: true,
    category: "ai-data",
  },
  image_classification: {
    title: "CIFAR-10 CNN Image Classification",
    subtitle: "Deep Learning Computer Vision System",
    description:
      "End-to-end image classification pipeline utilizing Convolutional Neural Networks (CNN) built with TensorFlow and Keras on the CIFAR-10 dataset.",
    tags: ["Deep Learning", "CNN", "TensorFlow", "Computer Vision", "Python"],
    color: "#E8A87C",
    featured: false,
    category: "ai-data",
  },
  "amazon-prime-vedio-dashboard": {
    title: "Amazon Prime Video Dashboard",
    subtitle: "Interactive Content Analytics Dashboard",
    description:
      "Data analytics dashboard analyzing content distribution, ratings, genres, and geographic catalog trends to extract key media streaming insights.",
    tags: ["Power BI", "Data Analytics", "Excel", "Data Visualization", "KPI Reporting"],
    color: "#00A8E1",
    featured: false,
    category: "ai-data",
  },
  "house-predicting-model": {
    title: "House Price Prediction API",
    subtitle: "Regression Model & REST API",
    description:
      "Flask-based REST API and regression model predicting real estate prices based on feature analysis, data normalization, and linear regression.",
    tags: ["Python", "Flask", "Linear Regression", "REST APIs", "Data Modeling"],
    color: "#F2994A",
    featured: false,
    category: "ai-data",
  },
  healthcare_model: {
    title: "Healthcare Clinical Analysis Model",
    subtitle: "Predictive Healthcare Analytics",
    description:
      "Machine learning model analyzing healthcare records and patient metrics to identify diagnostic patterns and support clinical decision-making.",
    tags: ["Python", "Healthcare Analytics", "Machine Learning", "Data Processing"],
    color: "#56CCF2",
    featured: false,
    category: "ai-data",
  },
  "rd-infro-technology": {
    title: "RD-INFRO-TECHNOLOGY",
    subtitle: "Automation & Infrastructure Utility Suite",
    description:
      "Python-based technical utility modules and automation scripts developed for data handling and operational workflow support.",
    tags: ["Python", "Automation", "Utilities", "Data Handling"],
    color: "#6FCF97",
    featured: false,
    category: "software-web",
  },
};

// Featured resume project (AI Agriculture)
export const farmEaseProject: RepoProject = {
  id: "farmease",
  title: "FarmEase",
  subtitle: "AI-Powered Smart Agriculture Platform",
  description:
    "AI-powered agriculture platform integrating crop recommendations, disease detection, fertilizer guidance, and yield insights to support data-driven farming decisions.",
  tags: ["AI / ML", "Python", "Data Analytics", "Precision Agriculture", "Decision Support"],
  color: "#7CB68E",
  year: "2026",
  githubUrl: "https://github.com/Archi-jain19",
  featured: true,
  category: "ai-data",
};

// Default fallback list representing full portfolio
export const curatedProjects: RepoProject[] = [
  farmEaseProject,
  {
    id: "riskradar",
    title: "RiskRadar",
    subtitle: "ML Dropout Risk Prediction Model",
    description:
      "ML classification model developed to predict student dropout risk using data preprocessing, feature engineering, model training, and performance evaluation with Python.",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Preprocessing", "Feature Engineering"],
    color: "#C4622D",
    year: "2026",
    githubUrl: "https://github.com/Archi-jain19/RiskRadar",
    featured: true,
    category: "ai-data",
  },
  {
    id: "ganapati-build-mart-website",
    title: "Ganapati Build Mart",
    subtitle: "Full-Stack E-Commerce & Management Platform",
    description:
      "Full-stack commercial web application featuring interactive product catalogues, inquiry management, administrative control panel, and database-backed dynamic operations.",
    tags: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "MySQL", "Vercel"],
    color: "#E67E22",
    year: "2026",
    githubUrl: "https://github.com/Archi-jain19/Ganapati-Build-Mart-Website",
    liveUrl: "https://ganapati-build-mart-website-git-main-archi-jain19s-projects.vercel.app/",
    featured: true,
    category: "software-web",
  },
  {
    id: "google_drive_clone",
    title: "Google Drive Clone",
    subtitle: "Full-Stack Cloud Storage Application",
    description:
      "A full-stack cloud storage application that allows users to upload, manage, and share files securely, built with separate frontend and backend modules.",
    tags: ["TypeScript", "FastAPI", "React", "Cloud Storage", "REST APIs"],
    color: "#4A90E2",
    year: "2026",
    githubUrl: "https://github.com/Archi-jain19/Google_Drive_Clone",
    liveUrl: "https://google-drive-clone-teal-one.vercel.app",
    stars: 1,
    featured: true,
    category: "software-web",
  },
  {
    id: "ai_ml_assignment",
    title: "FacetLens",
    subtitle: "Conversational Facet Scoring Pipeline",
    description:
      "Scalable conversational facet scoring pipeline with principled abstention, automating dialogue analysis, feature scoring, and model evaluation using Python.",
    tags: ["Python", "NLP", "Machine Learning", "Pipeline", "Data Evaluation"],
    color: "#9B51E0",
    year: "2026",
    githubUrl: "https://github.com/Archi-jain19/Ai_Ml_Assignment",
    featured: true,
    category: "ai-data",
  },
  {
    id: "image_classification",
    title: "CIFAR-10 CNN Image Classification",
    subtitle: "Deep Learning Computer Vision System",
    description:
      "End-to-end image classification pipeline utilizing Convolutional Neural Networks (CNN) built with TensorFlow and Keras on the CIFAR-10 dataset.",
    tags: ["Deep Learning", "CNN", "TensorFlow", "Computer Vision", "Python"],
    color: "#E8A87C",
    year: "2026",
    githubUrl: "https://github.com/Archi-jain19/Image_classification",
    category: "ai-data",
  },
  {
    id: "amazon-prime-vedio-dashboard",
    title: "Amazon Prime Video Dashboard",
    subtitle: "Interactive Content Analytics Dashboard",
    description:
      "Data analytics dashboard analyzing content distribution, ratings, genres, and geographic catalog trends to extract key media streaming insights.",
    tags: ["Power BI", "Data Analytics", "Excel", "Data Visualization", "KPI Reporting"],
    color: "#00A8E1",
    year: "2025",
    githubUrl: "https://github.com/Archi-jain19/Amazon-prime-vedio-dashboard",
    category: "ai-data",
  },
  {
    id: "house-predicting-model",
    title: "House Price Prediction API",
    subtitle: "Regression Model & REST API",
    description:
      "Flask-based REST API and regression model predicting real estate prices based on feature analysis, data normalization, and linear regression.",
    tags: ["Python", "Flask", "Linear Regression", "REST APIs", "Data Modeling"],
    color: "#F2994A",
    year: "2025",
    githubUrl: "https://github.com/Archi-jain19/House-predicting-model",
    category: "ai-data",
  },
  {
    id: "google_drive_clone_backend",
    title: "Google Drive Clone Backend",
    subtitle: "FastAPI Cloud Service",
    description:
      "Python backend service built with FastAPI providing secure JWT authentication, file streaming, metadata management, and cloud storage API endpoints.",
    tags: ["FastAPI", "Python", "JWT Auth", "REST APIs", "Vercel"],
    color: "#27AE60",
    year: "2026",
    githubUrl: "https://github.com/Archi-jain19/Google_Drive_Clone_Backend",
    liveUrl: "https://google-drive-clone-backend-omega.vercel.app",
    stars: 1,
    category: "software-web",
  },
  {
    id: "healthcare_model",
    title: "Healthcare Clinical Analysis Model",
    subtitle: "Predictive Healthcare Analytics",
    description:
      "Machine learning model analyzing healthcare records and patient metrics to identify diagnostic patterns and support clinical decision-making.",
    tags: ["Python", "Healthcare Analytics", "Machine Learning", "Data Processing"],
    color: "#56CCF2",
    year: "2026",
    githubUrl: "https://github.com/Archi-jain19/Healthcare_Model",
    category: "ai-data",
  },
  {
    id: "rd-infro-technology",
    title: "RD-INFRO-TECHNOLOGY",
    subtitle: "Automation & Infrastructure Utility Suite",
    description:
      "Python-based technical utility modules and automation scripts developed for data handling and operational workflow support.",
    tags: ["Python", "Automation", "Utilities", "Data Handling"],
    color: "#6FCF97",
    year: "2025",
    githubUrl: "https://github.com/Archi-jain19/RD-INFRO-TECHNOLOGY",
    category: "software-web",
  },
];

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/Archi-jain19/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Archi-Jain-Portfolio",
        },
        next: { revalidate: 3600 }, // Cache on server/Vercel for 1 hour to prevent rate limits
      }
    );

    if (!response.ok) {
      return NextResponse.json({
        projects: curatedProjects,
        source: "curated_fallback",
        status: response.status,
      });
    }

    const repos = await response.json();

    if (!Array.isArray(repos)) {
      return NextResponse.json({
        projects: curatedProjects,
        source: "curated_fallback",
      });
    }

    const publicProjects: RepoProject[] = [];
    const seenNames = new Set<string>();

    repos.forEach((repo: any, index: number) => {
      // Exclude self portfolio repo from project listing to avoid recursive display
      if (repo.name.toLowerCase() === "portfolio") return;

      const normName = repo.name.toLowerCase();
      if (seenNames.has(normName)) return;
      seenNames.add(normName);

      const metadata = repoMetadata[normName];

      if (metadata) {
        publicProjects.push({
          id: repo.name,
          title: metadata.title || repo.name,
          subtitle: metadata.subtitle || "Public Repository",
          description: metadata.description || repo.description || "Data & software engineering project.",
          tags: metadata.tags || (repo.language ? [repo.language] : ["Python"]),
          color: metadata.color || "#C4622D",
          year: repo.updated_at ? new Date(repo.updated_at).getFullYear().toString() : "2026",
          githubUrl: repo.html_url,
          liveUrl: metadata.liveUrl || repo.homepage || undefined,
          stars: repo.stargazers_count,
          featured: metadata.featured ?? false,
          category: metadata.category || "ai-data",
        });
      } else {
        // Automatically handle NEW public repositories created on GitHub
        const formattedTitle = repo.name
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (char: string) => char.toUpperCase());

        const tags: string[] = [];
        if (repo.language) tags.push(repo.language);
        if (Array.isArray(repo.topics)) {
          tags.push(...repo.topics.slice(0, 3).map((t: string) => t.toUpperCase()));
        }
        if (tags.length === 0) tags.push("Python");

        const isDataAi =
          repo.language === "Python" ||
          /data|ai|ml|model|predict|analytics/i.test(repo.name) ||
          /data|ai|ml|model/i.test(repo.description || "");

        const palette = ["#C4622D", "#7CB68E", "#4A90E2", "#E8A87C", "#9B51E0", "#00A8E1", "#27AE60"];
        const color = palette[index % palette.length];

        publicProjects.push({
          id: repo.name,
          title: formattedTitle,
          subtitle: repo.language ? `${repo.language} Project` : "Public Repository",
          description:
            repo.description ||
            `Public repository by Archi Jain focusing on ${repo.language || "Python"} and data-driven problem solving.`,
          tags,
          color,
          year: repo.updated_at ? new Date(repo.updated_at).getFullYear().toString() : "2026",
          githubUrl: repo.html_url,
          liveUrl: repo.homepage || undefined,
          stars: repo.stargazers_count,
          featured: false,
          category: isDataAi ? "ai-data" : "software-web",
        });
      }
    });

    // Ensure FarmEase (featured from resume) is always prominently included
    if (!seenNames.has("farmease")) {
      publicProjects.unshift(farmEaseProject);
    }

    // Sort: Featured first, then by year descending
    publicProjects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return Number(b.year) - Number(a.year);
    });

    return NextResponse.json({
      projects: publicProjects,
      source: "github_live",
      total: publicProjects.length,
    });
  } catch (error) {
    return NextResponse.json({
      projects: curatedProjects,
      source: "curated_fallback",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
