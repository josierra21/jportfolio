import { type FC, useState } from 'react';
import HandshakeLogo from "./handshake.jpg";
import OutlierLogo from "./outlier.jpg";
import ZoetisLogo from "./zoetis.png";


export const Experience: FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'projects'>('projects');
  const [selectedExperience, setSelectedExperience] = useState<{
    title: string;
    role: string;
    duration: string;
    details: string;
    image: string;
    overview: string;
    contributions: string[];
    techStack: string[];
  } | null>(null);

  const getInitials = (title: string) =>
    title
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const projects = [
    {
      title: "Credit Risk MLOps Pipeline",
      description: "Machine Learning Project",
      repoLink: "https://github.com/josierra21/credit-risk-mlops",
      overview: "An end-to-end machine learning system that predicts credit card default risk using a production-style MLOps workflow. The project includes data ingestion, validation, transformation, model training, deployment, and a FastAPI web interface for real-time predictions.",
      contributions: [
        "Built a modular training pipeline with data ingestion from MongoDB, validation, transformation, model training, and evaluation.",
        "Implemented credit default prediction with XGBoost and supporting Scikit-learn workflows.",
        "Added data drift detection with Evidently AI to support model monitoring and data quality checks.",
        "Containerized the application with Docker and deployed it through AWS services including ECR, EC2, and S3.",
        "Configured GitHub Actions CI/CD to automate image builds, deployment, and application updates."
      ],
      techStack: ["Python", "FastAPI", "XGBoost", "Scikit-learn", "MongoDB", "Docker", "AWS", "GitHub Actions", "Evidently AI"]
    },
    {
      title: "Image Caption Generator",
      description: "Deep Learning Project",
      repoLink: "https://github.com/josierra21/image_caption_generator",
      overview: "A deep learning project that trains a CNN + LSTM model to generate captions for uploaded images. The project includes model training in a Jupyter notebook and a Streamlit app for trying the caption generator through a simple web interface.",
      contributions: [
        "Built an image captioning workflow using a CNN for image features and an LSTM model for caption generation.",
        "Created a training notebook that produces saved model, tokenizer, configuration, and feature artifacts.",
        "Used MobileNetV2 features to support image understanding before generating captions.",
        "Served the trained model through a Streamlit application for interactive image uploads and caption results.",
        "Documented setup, training, and local app instructions so the project can be reproduced."
      ],
      techStack: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "MobileNetV2", "Streamlit"]
    },
    {
      title: "Weather App",
      description: "Python Project",
      repoLink: "https://github.com/josierra21/Intro-to-Python",
      techStack: ["Python", "OpenWeatherMap API", "Requests"],
      overview: "A command-line Python weather application that retrieves current weather information from the OpenWeatherMap API. Users can search by ZIP code or city and state, choose their preferred temperature unit, and view formatted weather details in the terminal.",
      contributions: [
        "Created a simple terminal app where users can look up weather by ZIP code or city and state.",
        "Integrated OpenWeatherMap API requests to retrieve location coordinates and current weather data.",
        "Added support for Celsius, Fahrenheit, and Kelvin temperature units.",
        "Formatted weather output to display temperature, feels-like temperature, pressure, humidity, wind, clouds, and conditions.",
        "Included input validation and API error handling for invalid locations or failed requests."
      ]
    },
    {
      title: "Alabama City Guide",
      description: "Front-End Web Project",
      repoLink: "https://github.com/josierra21/d277-front-end-web-development",
      techStack: ["HTML", "CSS", "JavaScript"],
      overview: "A responsive multi-page informational website about Alabama, featuring dedicated pages for Montgomery, Birmingham, and Mobile. The site presents city history, demographics, attractions, culture, education, and cost-of-living information through structured front-end pages.",
      contributions: [
        "Built a multi-page website with consistent navigation across the home, city, and contact pages.",
        "Structured content with semantic HTML, organized headings, lists, tables, and page sections.",
        "Styled responsive layouts with external CSS to support readability across screen sizes.",
        "Added a contact form with basic client-side email confirmation validation using JavaScript.",
        "Integrated images, media assets, and Google Fonts to create a more complete user experience."
      ]
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine Learning Project",
      repoLink: "https://github.com/josierra21/DSC550-Data_Mining",
      techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Machine Learning"],
      overview: "A machine learning project focused on detecting fraudulent credit card transactions using a highly imbalanced Kaggle dataset. The project compares multiple classification models and evaluates performance using accuracy, precision, recall, and F1-score.",
      contributions: [
        "Performed exploratory data analysis to understand class imbalance, feature distributions, and possible outliers.",
        "Prepared training, testing, and validation datasets, including a balanced dataset created through undersampling.",
        "Trained and compared Logistic Regression, Random Forest, Gradient Boosting, Linear SVC, and shallow neural network models.",
        "Evaluated model performance using accuracy, precision, recall, and F1-score.",
        "Selected Logistic Regression on the balanced dataset as the final model because it provided strong, consistent fraud detection results."
      ]
    },
    {
      title: "Interactive World Map",
      description: "Angular Project",
      repoLink: "https://github.com/josierra21/worldmap_angular",
      techStack: ["Angular", "TypeScript", "HTML", "CSS", "World Bank API", "SVG"],
      overview: "An Angular application that displays an interactive SVG world map and lets users click on countries to view country-specific information retrieved from the World Bank API.",
      contributions: [
        "Built an interactive map experience where users can select countries directly from an SVG world map.",
        "Integrated the World Bank API to retrieve and display dynamic country details.",
        "Organized the application with Angular routing and component-based structure.",
        "Created a dedicated map page that updates country information based on user interaction."
      ]
    },
    {
      title: "Hotel Booking Cancellation Analysis",
      description: "Machine Learning Analysis",
      repoLink: "https://github.com/josierra21/hotel-booking-cancellation-analysis",
      overview: "A machine learning analysis that explores hotel booking cancellation behavior using more than 119,000 reservation records. The project combines exploratory data analysis, feature engineering, and a Random Forest model to identify reservations at higher risk of cancellation.",
      contributions: [
        "Cleaned hotel booking data by removing duplicates, handling missing values, encoding categorical variables, and standardizing formats.",
        "Engineered features such as total guest count and derived booking characteristics to support model performance.",
        "Analyzed cancellation patterns across lead time, special requests, market segments, hotel type, and room assignments.",
        "Trained a Random Forest Classifier to predict whether a reservation would be canceled.",
        "Interpreted feature importance to identify lead time, month-year, country, market segment, special requests, ADR, deposit type, and previous cancellations as key predictors."
      ],
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"]
    },
    {
      title: "Childcare Affordability Dashboard",
      description: "Data Visualization Project",
      repoLink: "https://github.com/josierra21/national-database-of-childcare-prices",
      overview: "A data visualization project using the National Database of Childcare Prices to examine childcare affordability in the United States from 2008 through 2018. The project uses dashboarding and visual storytelling to communicate how childcare costs compare to household income and federal affordability benchmarks.",
      contributions: [
        "Prepared childcare price, household income, unemployment, and labor force participation data for visualization.",
        "Aggregated data by state and year to support trend analysis and geographic comparisons.",
        "Converted weekly childcare costs into annual estimates and compared them with median household income.",
        "Built an interactive Power BI dashboard with state and year filters, affordability mapping, and cost trend visuals.",
        "Created presentation and billboard-style deliverables to communicate findings for different audiences."
      ],
      techStack: ["Power BI", "Excel", "PowerPoint", "Data Visualization", "Dashboard Design"]
    },
    {
      title: "TSA Complaint Analysis",
      description: "Data Analysis Project",
      repoLink: "https://github.com/josierra21/TSA-complaint-analysis",
      overview: "A data analysis project examining TSA complaint trends across U.S. airports from 2015 through 2024. The analysis combines complaint records with airport reference data to identify high-volume airports, common complaint categories, and geographic complaint patterns.",
      contributions: [
        "Combined TSA complaint datasets by airport, category, and subcategory with airport location reference data.",
        "Cleaned and standardized airport identifiers to support analysis and mapping.",
        "Analyzed national complaint trends over time, including pre-pandemic growth, pandemic declines, and post-pandemic increases.",
        "Created visualizations for top complaint airports, complaint categories, EPSP trends, category heatmaps, and geographic patterns.",
        "Developed recommendations focused on screening consistency, TSA PreCheck communication, complaint categorization, and targeted airport improvements."
      ],
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Kia & Hyundai Theft Analysis",
      description: "Data Visualization Project",
      repoLink: "https://github.com/josierra21/kia-thefts-analysis",
      overview: "A data visualization project examining the rise of Kia and Hyundai vehicle thefts across the United States between 2019 and 2023. The project uses visual storytelling and infographic design to communicate city-level, regional, and public safety trends.",
      contributions: [
        "Cleaned and transformed public vehicle theft data by standardizing geographic identifiers and theft count fields.",
        "Aggregated theft data by city, year, and region to analyze national and regional trends.",
        "Created supporting visualizations for top affected cities, regional theft distribution, and the Milwaukee theft trend.",
        "Designed a public awareness infographic focused on clear communication and theft prevention messaging.",
        "Applied ethical visualization practices to present public safety data accurately for a non-technical audience."
      ],
      techStack: ["R", "ggplot2", "Treemap", "PowerPoint", "Data Visualization"]
    }
  ];
  const experiences = [
     {
      title: "Handshake AI",
      role: "AI Trainer",
      duration: "Nov 2025 - Present",
      image: HandshakeLogo,
      details: "AI training, model evaluation, and quality review.",
      overview: "Contribute to AI training projects by reviewing model outputs for reasoning quality, accuracy, safety, and alignment with project guidelines.",
      contributions: [
        "Evaluate AI responses for accuracy, reasoning quality, safety, and guideline alignment.",
        "Provide structured feedback that helps improve model reliability and user experience.",
        "Support multiple AI training projects through detailed quality reviews."
      ],
      techStack: ["AI Evaluation", "Quality Review", "Prompt Assessment"]
    },
    {
      title: "Outlier AI",
      role: "AI Trainer",
      duration: "Jun 2024 - Nov 2025",
      image: OutlierLogo,
      details: "AI response assessment and dataset quality improvement.",
      overview: "Analyzed model outputs using structured evaluation rubrics and contributed to quality improvements across diverse AI training tasks.",
      contributions: [
        "Assessed model outputs using structured rubrics to improve dataset quality.",
        "Reviewed prompts and responses across different projects for clarity, accuracy, and usefulness.",
        "Collaborated on AI training tasks focused on evaluation consistency and quality control."
      ],
      techStack: ["AI Training", "Rubric Evaluation", "Data Quality"]
    },
    {
      title: "Zoetis Inc.",
      role: "Laboratory Technician",
      duration: "Dec 2022 - Sep 2024",
      image: ZoetisLogo,
      details: "Laboratory technician supporting mAbs operations in Lincoln, NE.",
      overview: "Supported mAbs laboratory operations by monitoring cell growth data, preparing trend reports, and maintaining quality and compliance documentation.",
      contributions: [
        "Monitored and analyzed cell growth data to support process optimization.",
        "Prepared environmental monitoring reports to maintain quality and compliance standards.",
        "Helped revise batch records, SOPs, and OJTs to improve accuracy and operational efficiency."
      ],
      techStack: ["Data Analysis", "Trend Reporting", "SOPs", "Quality Compliance"]
    }
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-light mb-16 text-center tracking-wide" style={{ 
          color: '#2d3748',
          fontWeight: '300'
        }}>
          Projects
        </h2>

        <div className="flex justify-center mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-12">
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-4 px-2 border-b-2 font-medium text-sm tracking-wide transition-colors ${
                  activeTab === 'projects'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                PROJECTS
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`py-4 px-2 border-b-2 font-medium text-sm tracking-wide transition-colors ${
                  activeTab === 'experience'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                EXPERIENCE
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-start border-l-2 border-gray-200 pl-8 py-6 hover:border-gray-400 transition-colors cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-12 h-12 rounded object-cover flex-shrink-0 mt-1"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 mt-1 font-medium text-sm">
                      {getInitials(exp.title)}
                    </div>
                  )}
                  <div className="ml-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-gray-600 font-medium">{exp.role}</p>
                      </div>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap ml-4">{exp.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      className="text-sm text-gray-500 font-medium hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExperience(exp);
                      }}
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6 hover:border-gray-300 cursor-pointer transition-colors flex flex-col"
                  onClick={() => setSelectedProject(project.title)}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 flex-1 content-start">
                    {project.techStack?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Learn more →
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}>
          <div
            className="bg-white p-6 shadow-xl max-w-xl w-full max-h-[80vh] overflow-y-auto border border-gray-100"
          >
            <div className="flex items-start justify-between mb-8">
              <h4 className="text-3xl font-medium text-gray-900">
                {selectedProject}
              </h4>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {projects.find((project) => project.title === selectedProject)?.description}
              </span>
            </div>
            
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Overview</h5>
            <p className="text-gray-600 mb-6">
              {projects.find((project) => project.title === selectedProject)?.overview}
            </p>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Contributions</h5>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {projects.find((project) => project.title === selectedProject)?.contributions?.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {projects.find((project) => project.title === selectedProject)?.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-8">
              {projects.find((project) => project.title === selectedProject)?.repoLink && (
                <a
                  href={projects.find((project) => project.title === selectedProject)?.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors font-medium text-sm tracking-wide uppercase"
                >
                  View Repository
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {selectedExperience && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}>
          <div
            className="bg-white p-6 shadow-xl max-w-xl w-full max-h-[80vh] overflow-y-auto border border-gray-100"
          >
            <div className="flex items-start justify-between mb-8">
              <h4 className="text-3xl font-medium text-gray-900">
                {selectedExperience.title}
              </h4>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                onClick={() => setSelectedExperience(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {selectedExperience.role}
              </span>
            </div>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Overview</h5>
            <p className="text-gray-600 mb-6">
              {selectedExperience.overview}
            </p>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Contributions</h5>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {selectedExperience.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {selectedExperience?.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
