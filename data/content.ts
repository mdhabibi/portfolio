// Single source of truth for all site content. Edit here; no layout code needs to change.

export const profile = {
  name: "Mahdi Habibi",
  title: "Dr. Mahdi Habibi",
  role: "Senior AI Engineer & Data Scientist",
  location: "Hamburg, Germany",
  email: "habibi.physics@gmail.com",
  tagline:
    "I build retrieval, recommendation and agent systems that run in production — and can explain themselves.",
  intro:
    "Senior AI & Data Scientist at DealCircle, where I lead the recommendation, hybrid-search and multi-agent enrichment systems behind an M&A deal-sourcing platform. Before industry I earned a Ph.D. in computational physics, co-authored the open-source TelescopeML package with NASA Ames, and specialised in explainable AI.",
  links: {
    GitHub: "https://github.com/mdhabibi",
    LinkedIn: "https://www.linkedin.com/in/mahdi-habibi/",
    Scholar: "https://scholar.google.com/citations?hl=en&user=OCl6adIAAAAJ",
    Kaggle: "https://www.kaggle.com/mahdihabibi",
  } as Record<string, string>,
  stats: [
    { value: "10+", label: "years in data & ML" },
    { value: "Ph.D.", label: "computational physics" },
    { value: "JOSS", label: "open-source co-author" },
    { value: "179 pp", label: "book on knowledge graphs" },
  ],
};

export const focus = [
  {
    title: "Hybrid search, RAG & GraphRAG",
    body: "BM25 + dense-vector retrieval in Elasticsearch and FAISS, re-ranking, and graph-grounded RAG on Neo4j.",
  },
  {
    title: "Recommender & matching systems",
    body: "Content-based, collaborative and graph-aware recommenders for sparse, high-value two-sided markets.",
  },
  {
    title: "Multi-agent data pipelines",
    body: "LangGraph / LangChain agents for web discovery, crawling, extraction and company profiling at scale.",
  },
  {
    title: "Explainable AI",
    body: "LIME, SHAP and CAM — adapted to images, spectra and time series — so model decisions can be audited.",
  },
];

export type Project = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  result: string;
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

// Banner images live in public/work/<slug>.webp; projects without one get a typographic banner.
export const banners: Record<string, string> = Object.fromEntries(["dealcircle","telescopeml","knowledge-graphs-book","lime-ecg","phd-bremsstrahlung","malaria","blood-cells-mlops","neural-compression","nucleus-unet","movie-recommender","llm-search-handbook"].map((s) => [s, `/work/${s}.webp`]));
banners["dealcircle"] = "/work/dealcircle.svg";
banners["telescopeml"] = "/work/telescopeml.svg";

export const projects: Project[] = [
  {
    slug: "dealcircle",
    featured: true,
    kicker: "Production · Current role",
    title: "AI deal matching for M&A: sellers, advisors and buyers",
    summary:
      "The recommendation, hybrid-search and data-enrichment layer that connects companies for sale and their M&A advisors with the right strategic and financial buyers on DealCircle's platform.",
    problem:
      "M&A deal sourcing is a sparse, high-stakes, three-sided matching problem. Every deal is unique and sold once, interactions are rare, and company data is scattered across the web. A wrong match costs advisors and buyers real time, so recommendations must be precise, relationship-aware and explainable to deal teams.",
    approach: [
      "Recommendation systems: lead development of AI-powered recommenders for M&A deal sourcing, improving deal evaluation, strategic alignment and data-driven decision-making.",
      "Hybrid retrieval: architect scalable retrieval combining lexical, sparse, semantic and dense-vector search to power generative-AI recommendation workflows and content-based filtering with FAISS.",
      "Multi-agent enrichment: lead end-to-end development of a data-enrichment platform whose agents handle data sourcing, web discovery, crawling, text extraction and multimodal company profiling.",
      "Elasticsearch hybrid search: design and deploy systems combining BM25 and dense-vector fields for precise, context-aware deal discovery and shortlisting.",
      "Knowledge graph + GraphRAG: build GraphRAG recommenders in Neo4j that combine a knowledge graph of companies, sellers, advisors and buyers with RAG pipelines and hybrid content-based and collaborative filtering, for relationship-aware matching and opportunity discovery.",
    ],
    result:
      "Richer company insights for deal teams, more efficient due diligence, and relationship-aware matching that surfaces the right buyers for each opportunity.",
    stack: ["Neo4j", "GraphRAG", "Elasticsearch", "FAISS", "LangGraph", "LangChain", "Python", "Machine learning"],
    links: [{ label: "DealCircle", href: "https://www.dealcircle.com/" }],
  },
  {
    slug: "telescopeml",
    featured: true,
    kicker: "Open source · Explainable AI · NASA Ames",
    title: "TelescopeML: explaining CNNs on telescope spectra",
    summary:
      "An end-to-end Python package, developed with NASA Ames Research Center, that trains CNNs on spectra of exoplanets and brown dwarfs, predicts their atmospheric parameters with uncertainty and, through the LIMEXplainer module I designed, shows which parts of a spectrum drove each prediction.",
    problem:
      "Next-generation observatories will produce far more spectra than astronomers can fit by hand. Trained CNNs can infer temperature, gravity, metallicity and C/O ratio in milliseconds instead of slow grid-based retrieval, but a model that can't be interrogated is of little use to a scientist. My job was to make the predictions auditable.",
    approach: [
      "Package architecture: DataMaster (loading, splitting, scaling, feature engineering), DeepTrainer (tuned TensorFlow CNNs), Predictor (observational spectra → parameters with uncertainty), StatVisAnalyzer (χ² tests, confidence intervals, reporting) and LIMEXplainer, my module.",
      "Spectra are neither images nor tables: neighbouring wavelengths are strongly correlated, and the meaningful unit is a band, not a pixel. I redesigned LIME's perturbation step around contiguous wavelength segments.",
      "LIMEXplainer pipeline: segment the spectrum into bands → perturb by masking bands (mean, zero or noise) → predict each variant with the CNN → weight by proximity (configurable kernel width) → fit a sparse linear surrogate whose coefficients give per-band importance → aggregate across instances to find bands that consistently drive a parameter.",
      "One explanation per predicted parameter, with bands that raise or lower the estimate. Because the influential bands line up with physically meaningful spectral features, the plots also serve as a sanity check on what the network has learned.",
      "Collaborated through GitHub code review and CI/CD with the NASA Ames team (HWO AI/ML working group).",
    ],
    result:
      "Published in the Journal of Open Source Software (2024; arXiv:2407.16917), released on PyPI under GPL-3.0, and part of the Habitable Worlds Observatory AI/ML working group's tooling.",
    stack: ["Python", "TensorFlow", "CNN", "LIME", "Bayesian optimisation", "CI/CD"],
    links: [
      { label: "JOSS paper", href: "https://doi.org/10.21105/joss.06346" },
      { label: "GitHub", href: "https://github.com/EhsanGharibNezhad/TelescopeML" },
      { label: "PyPI", href: "https://pypi.org/project/TelescopeML/" },
      { label: "Zenodo DOI", href: "https://doi.org/10.5281/zenodo.10183099" },
    ],
  },
  {
    slug: "knowledge-graphs-book",
    featured: true,
    kicker: "Book · Open access · v0.2.1",
    title: "Knowledge Graphs: Semantic Graphs and Property Graphs",
    summary:
      "One catalog, two graph worlds. A 179-page illustrated guide that takes readers from graph fundamentals through RDF, RDFS, OWL, SPARQL and SHACL alongside Neo4j and Cypher, and on to architecture, governance and graph RAG.",
    problem:
      "Practitioners usually learn either the semantic-web stack or labelled property graphs, rarely both, so they struggle to choose between them or combine them in real systems. Most material also stops at syntax and never reaches architecture, operations or recommendation use cases.",
    approach: [
      "One running example throughout: a synthetic course-recommendation catalog, modelled in both worlds to compare identity, relationships, constraints, inference and events side by side.",
      "Twelve parts: Foundations · RDF and semantic graphs · Querying RDF · Property graphs and Cypher · Modelling and interoperability · Strengths, tradeoffs and decisions · Performance and operations · Graph RAG and analytics · Applied mastery · Reproducible lab · Glossary · References.",
      "Teaching design: each term is introduced by the question it answers, each technical part has learning goals and a self-check, and baseline data, variations, extensions and pseudocode are labelled separately.",
      "Companion repository with editable sources, a runnable lab, automated checks and published validation evidence.",
    ],
    result:
      "Version 0.2.1 published on Zenodo (23 Nov 2026) as an illustrated public review edition: 179 pages, 18 figures, 183 explained review questions and 75 glossary entries. Text under CC BY 4.0, code under MIT.",
    stack: ["RDF", "OWL", "SPARQL", "SHACL", "Neo4j", "Cypher", "Graph RAG"],
    links: [
      { label: "Read the PDF", href: "https://github.com/mdhabibi/one-graph-two-worlds/blob/main/dist/knowledge-graphs-tutorial.pdf" },
      { label: "Zenodo (v0.2.1)", href: "https://doi.org/10.5281/zenodo.24483542" },
      { label: "Companion repo & lab", href: "https://github.com/mdhabibi/one-graph-two-worlds" },
      { label: "Browse chapters", href: "https://github.com/mdhabibi/one-graph-two-worlds/blob/main/book/index.md" },
    ],
  },
  {
    slug: "neural-compression",
    featured: true,
    kicker: "Representation learning · Data compression",
    title: "Neural compression with autoencoders",
    summary:
      "Four convolutional autoencoders that encode 112,800 handwritten characters into a compact latent code, shrinking the in-memory footprint from 84.3 MB to 13.8 MB while reconstructing the images almost losslessly.",
    problem:
      "Large image datasets cost memory and bandwidth. The goal was an architecture that compresses data into a lower-dimensional representation while losing as little information as possible, so the compressed data can be reused downstream. Here, compression means dimensionality and memory footprint, not file size on disk.",
    approach: [
      "Data: EMNIST-Balanced, 28×28 grey-scale digits plus upper- and lower-case letters, chosen for its diverse character shapes.",
      "Encoder: strided Conv2D layers instead of MaxPooling2D, so the network learns how to downsample and keeps the spatial detail needed for accurate reconstruction.",
      "Decoder: Conv2DTranspose instead of UpSampling2D, giving learnable upsampling, higher-quality reconstructions and fewer artefacts.",
      "Experiment: a shared encoder with four different decoder designs, each evaluated on training/validation loss, MSE, SSIM and PSNR, both as a full autoencoder and as a standalone decoder (a consistency check on the architecture).",
      "Model 01 performed best, with the lowest losses and the highest SSIM and PSNR; Models 03 and 04 were competitive and Model 02 trailed.",
    ],
    result:
      "Encoded dataset of ≈13.77 MB versus ≈84.34 MB as raw uint8 (6.1× smaller) and ≈337.35 MB as float32 model input (≈24× smaller), at SSIM 0.98. The trained encoder and decoder models are saved for reuse or fine-tuning on similar data. Topic proposed by Dr. Peter Steinbach (Helmholtz AI).",
    stack: ["TensorFlow", "Keras", "Autoencoders", "Conv2D / Conv2DTranspose", "SSIM · PSNR"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/Neural-Compression-with-Autoencoders" }],
  },
  {
    slug: "lime-ecg",
    kicker: "Explainable AI · Time series · Open source",
    title: "LIME for time series: explaining an ECG classifier",
    summary:
      "LIME was built for images and tables. I adapted it to 1-D physiological signals so a CNN's diagnosis of a 12-lead ECG can be traced back to the beats and intervals that produced it.",
    problem:
      "Image LIME perturbs super-pixels; a signal has no such regions, and perturbing individual samples produces physiologically meaningless variants.",
    approach: [
      "Segment-based perturbation scheme and surrogate fitting designed for 1-D signals.",
      "Applied to a CNN trained on PhysioNet / CinC 2020 12-lead ECGs (AF, VT/VF, MI, sinus rhythm).",
    ],
    result: "Released as a reusable open-source method.",
    stack: ["Python", "LIME", "CNN", "SciPy"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/LIME-for-Time-Series" }],
  },
  {
    slug: "beatlens",
    featured: true,
    kicker: "Hackathon · Time-series LLMs",
    title: "BeatLens — ECG T-peak timing with OpenTSLM",
    summary:
      "A TimeNet Hackathon 2026 project, built with Dr. Sdjad Sadeghi, applying time-series language models to ECG T-peak timing.",
    problem: "Locating T-peaks precisely is key to ECG interval analysis and hard for general-purpose models.",
    approach: ["Built on OpenTSLM; demo film walks through the pipeline and results."],
    result: "Open repository and demo video.",
    stack: ["OpenTSLM", "Python", "PyTorch"],
    links: [
      { label: "GitHub", href: "https://github.com/mdhabibi/BeatLens" },
      { label: "Demo video", href: "https://youtu.be/QsP-ktHCz0s" },
    ],
  },
  {
    slug: "phd-bremsstrahlung",
    featured: true,
    kicker: "Doctoral research · HPC",
    title: "Suppressing bremsstrahlung in laser–plasma simulations",
    summary:
      "Derived from QED how extreme quasi-static fields suppress electron radiation in petawatt-laser plasmas, and implemented the model as a module in EPOCH, the widely used particle-in-cell code.",
    problem:
      "Standard simulation codes could not account for field-induced suppression of bremsstrahlung, biasing predicted emission.",
    approach: [
      "First electric-and-magnetic suppression (EMS) model for bremsstrahlung in PIC codes.",
      "Implemented in Modern Fortran with MPI; Bayesian optimisation for parameter studies.",
    ],
    result: "Dr. rer. nat., magna cum laude (2023); published in Physics of Plasmas.",
    stack: ["Modern Fortran", "MPI", "EPOCH", "Python", "Bayesian optimisation"],
    links: [
      { label: "Paper", href: "https://doi.org/10.1063/5.0167288" },
      { label: "Thesis repo", href: "https://github.com/mdhabibi/My_PhD_Thesis" },
    ],
  },
  {
    slug: "malaria",
    kicker: "Computer vision · XAI",
    title: "Auditable malaria-cell CNN",
    summary: "Custom CNN on 27,558 NIH smear images with LIME and CAM explanations.",
    problem: "Manual microscopy is slow and examiner-dependent.",
    approach: ["8-layer, 818k-parameter CNN trained from scratch; LIME + class-activation maps."],
    result: "96.2% test accuracy · AUC 0.99.",
    stack: ["TensorFlow", "LIME", "CAM"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/CNN-Predictor-for-Malaria_Cells-LIME-CAM" }],
  },
  {
    slug: "blood-cells-mlops",
    kicker: "MLOps · Computer vision",
    title: "Blood-cell classifier, end to end",
    summary: "Eight-class VGG16 classifier productionised as FastAPI microservices with MLflow, DVC, Airflow and Kubernetes.",
    problem: "Turn a notebook model into a service a lab could actually run.",
    approach: ["U-Net + GrabCut segmentation; transfer learning; three containerised microservices; monitoring with Prometheus/Grafana."],
    result: "94% accuracy on 8 cell types · segmented dataset published on Kaggle.",
    stack: ["FastAPI", "Docker", "Kubernetes", "MLflow", "Airflow"],
    links: [{ label: "GitHub", href: "https://github.com/DataScientest-Studio/apr24_bds_int_blood_cells" }],
  },
  {
    slug: "nucleus-unet",
    kicker: "Segmentation",
    title: "Nucleus segmentation with U-Net",
    summary: "Pixel-accurate nucleus masks on the 2018 Data Science Bowl, tuned with Hyperband on CPU.",
    problem: "Nuclei are small, numerous and touching.",
    approach: ["U-Net with skip connections; Keras Tuner Hyperband."],
    result: "≈96% validation pixel accuracy.",
    stack: ["Keras", "Keras Tuner"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/Automated-Cell-Semantic-Segmentation-with-UNet" }],
  },
  {
    slug: "movie-recommender",
    kicker: "Recommender systems",
    title: "Three ways to recommend a movie",
    summary: "Collaborative, content-based and Bayesian-weighted ranking, side by side on MovieLens and TMDB.",
    problem: "Understand where each recommender family shines and fails cold.",
    approach: ["User/item CF · TF-IDF similarity · Bayesian average ranking."],
    result: "Foundations later applied to production deal matching.",
    stack: ["pandas", "SciPy", "scikit-learn"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/movie-recommendation-systems" }],
  },
  {
    slug: "llm-search-handbook",
    kicker: "Teaching · Semantic search",
    title: "Search Semantically — LLM & search handbook",
    summary: "A 14-chapter open course from keyword matching to embeddings, vector databases, re-ranking and RAG, with runnable notebooks.",
    problem: "Most search tutorials skip evaluation and depend on paid APIs.",
    approach: ["Intuition + notebook per chapter; open-source toolkit, no API keys."],
    result: "Website + 69-page e-book.",
    stack: ["Python", "Embeddings", "Vector DBs", "RAG"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/llm-search-handbook" }],
  },
];

export const experience = [
  {
    role: "Senior AI and Data Scientist",
    org: "DealCircle GmbH",
    where: "Hamburg, Germany",
    when: "Sep 2024 — Present",
    points: [
      "Lead development of AI-powered recommendation systems for M&A deal sourcing, translating business objectives into retrieval, ranking and recommendation components.",
      "Architect scalable hybrid retrieval combining lexical, sparse, semantic and dense-vector search for generative recommendation workflows and content-based filtering with FAISS.",
      "Lead end-to-end development of an AI data-enrichment platform using multi-agent workflows for data sourcing, web discovery, crawling, text extraction and multimodal company profiling.",
      "Design and deploy Elasticsearch hybrid-search systems combining BM25 and dense-vector fields for context-aware M&A discovery and shortlisting.",
      "Evaluate retrieval and recommendation changes through representative offline comparisons, model validation and production-oriented monitoring.",
      "Develop GraphRAG-based recommendation systems in Neo4j, combining knowledge graphs, RAG pipelines and hybrid content-based and collaborative filtering for relationship-aware deal matching.",
      "Explain model trade-offs to technical and business stakeholders, prioritise experiments and turn results into product improvements and clear decision support.",
    ],
  },
  {
    role: "ML Engineer — XAI Developer (FOSS Contribution)",
    org: "TelescopeML · NASA Ames Research Center",
    where: "Remote",
    when: "Nov 2023 — Present",
    points: [
      "Co-authored and contributed to the TelescopeML Python package, published in the Journal of Open Source Software and on PyPI.",
      "Lead developer of the explainable-AI module, improving the transparency and usability of machine-learning models.",
      "Translate research requirements into maintainable Python modules with contributors and stakeholders.",
      "Maintain software quality through GitHub code review and CI/CD practices.",
    ],
  },
  {
    role: "Data Scientist and ML Engineer",
    org: "Helmholtz-Zentrum Dresden-Rossendorf (HZDR)",
    where: "Dresden, Germany",
    when: "Oct 2019 — Mar 2024",
    points: [
      "Designed and developed end-to-end simulation pipelines for modelling emission-flux suppression effects.",
      "Engineered Bayesian optimisation methods that improved computational efficiency by 35%.",
      "Designed and implemented an emission module for particle-in-cell simulations.",
      "Led development and maintenance of automated ETL pipelines using Python and Apache Airflow.",
      "Benchmarked and simulated models with SciPy and NumPy, integrating PyTest, GitHub Actions and CI/CD for reliable delivery.",
      "Took part in code reviews and Agile collaboration through GitHub, Jira and Slack.",
    ],
  },
  {
    role: "Data Scientist and ML Engineer",
    org: "European XFEL GmbH",
    where: "Schenefeld, Germany",
    when: "Oct 2019 — Mar 2024",
    points: [
      "Designed and developed a deep-learning autoencoder for high-resolution image compression, reducing memory usage by 16.33%.",
      "Integrated detector image-processing algorithms to improve data accuracy and end-user experience.",
    ],
  },
  {
    role: "Data Scientist",
    org: "Avand GmbH, a B2B Data Solutions Provider",
    where: "Tehran, Iran",
    when: "Sep 2016 — Sep 2019",
    points: [
      "Led data-driven projects that exceeded client-acquisition targets by 15% using Agile methodologies.",
      "Secured $100k in funding for database development and automation using SQL and MongoDB.",
      "Created and maintained Tableau dashboards for user-behaviour analysis.",
      "Developed recommendation engines and software solutions from stakeholder requirements.",
      "Collaborated with cross-functional teams to deliver projects and keep stakeholders aligned.",
    ],
  },
];

export const education = [
  { degree: "Data Science & ML Engineering Diploma", school: "Université Paris 1 Panthéon-Sorbonne · DataScientest", when: "2024", note: "400-hour programme + MLOps; defence graded A+" },
  { degree: "Ph.D. in Computational Physics", school: "Heinrich Heine Universität Düsseldorf", when: "2019 — 2023", note: "Magna cum laude" },
  { degree: "AWS Certified Cloud Practitioner", school: "Amazon Web Services", when: "Certification", note: "" },
];

export const publications = [
  {
    title: "Knowledge Graphs: Semantic Graphs and Property Graphs",
    authors: "M. Habibi",
    venue: "Book, public review edition v0.2.1, Zenodo (2026) · CC BY 4.0",
    href: "https://doi.org/10.5281/zenodo.24483542",
  },
  {
    title: "TelescopeML — I. An End-to-End Python Package for Interpreting Telescope Datasets through Training Machine Learning Models, Generating Statistical Reports, and Visualizing Results",
    authors: "E. S. Gharib-Nezhad, N. E. Batalha, H. Valizadegan, M. J. S. Martinho, M. Habibi, G. Nookula",
    venue: "Journal of Open Source Software 9(99), 6346 (2024)",
    href: "https://doi.org/10.21105/joss.06346",
  },
  {
    title: "High field suppression of bremsstrahlung emission in high-intensity laser–plasma interactions",
    authors: "M. Habibi, A. Arefiev, T. Toncian",
    venue: "Physics of Plasmas 30, 103108 (2023)",
    href: "https://doi.org/10.1063/5.0167288",
  },
  {
    title: "Bremsstrahlung suppression in high-field laser–plasma interactions",
    authors: "M. Habibi, A. Arefiev, T. Toncian",
    venue: "36th European Conference on Laser Interaction with Matter (ECLIM), 2022",
    href: "https://agenda.enea.it/event/228/page/234-proceedings",
  },
  {
    title: "Magnetic suppression of bremsstrahlung emission in the relativistic transparency regime",
    authors: "M. Habibi, A. Arefiev, T. Toncian",
    venue: "47th EPS Conference on Plasma Physics, 2021",
    href: "https://www.proceedings.com/60768.html",
  },
];

// Placeholders until real links are added. Set `href` to publish a card.
export const writing: { title: string; kind: string; href?: string }[] = [
  { title: "Deleted, but Still Retrievable", kind: "LinkedIn article" },
  { title: "The Case of the 19 Customers", kind: "Animated film" },
  { title: "BeatLens demo", kind: "Video", href: "https://youtu.be/QsP-ktHCz0s" },
];

export const skills: Record<string, string[]> = {
  "Retrieval & GenAI": ["RAG · GraphRAG", "LangGraph · LangChain", "Elasticsearch · BM25", "FAISS · embeddings", "Multi-agent systems"],
  "Modelling": ["PyTorch", "TensorFlow / Keras", "scikit-learn", "Recommender systems", "CNN · U-Net · VAE"],
  "Knowledge graphs": ["Neo4j · Cypher", "RDF · OWL", "SPARQL · SHACL"],
  "Explainability": ["LIME", "SHAP", "CAM / Grad-CAM"],
  "Engineering & MLOps": ["FastAPI", "Docker · Kubernetes", "MLflow · DVC · Airflow", "CI/CD · PyTest", "AWS"],
};
