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
  newsletter: {
    name: "Silent Failures in AI",
    blurb: "AI rarely crashes. It fails quietly. Weekly: a silent failure in ML, RAG, knowledge graphs or agents, and a tested fix.",
    href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7529523751579873280",
  },
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
export const banners: Record<string, string> = Object.fromEntries(["dealcircle","postloom","telescopeml","knowledge-graphs-book","beatlens","lime-ecg","phd-bremsstrahlung","malaria","blood-cells-mlops","neural-compression","nucleus-unet","movie-recommender","llm-search-handbook","agentic-system-design"].map((s) => [s, `/work/${s}.webp`]));
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
    slug: "postloom",
    featured: true,
    kicker: "Product launch · Local-first AI · Knowledge graph",
    title: "postloom: your LinkedIn, remembered",
    summary:
      "A free, local-first app that turns your LinkedIn articles, posts and every comment under them into a private, searchable knowledge graph. It answers questions with citations, shows who engages with your work, and drafts replies in your voice, using any AI model or none.",
    problem:
      "On LinkedIn, the best conversations happen in the comments and then get buried in the feed within a week. I built postloom after losing a great question under one of my own articles. It had to be private, trivially installable by non-developers and trustworthy: no cloud, no scraping, and no AI answers it can't back up.",
    approach: [
      "Ingestion: you paste in a post or article and its comment section, and LLM extractors turn them into structured nodes: articles, posts, comments, people, topics, series and entities.",
      "Knowledge graph with provenance: a typed schema (announces, belongs_to, commented_on, replied_to, authored, related_to, links_to, mentions) enforced in the domain layer. Links read from your own text are facts, AI-suggested links stay suggestions until you accept them, and history is kept instead of deleted.",
      "Hybrid retrieval and grounded chat: SQLite FTS5 keyword search plus local fastembed embeddings with cosine similarity. Chat answers only from your own content, cites the passage behind every claim and says \"not found\" instead of guessing.",
      "Audience and reply workflow: every commenter becomes a person node, unanswered comments are surfaced, and reply drafts are grounded in what you actually wrote.",
      "Model-agnostic and cost-aware: Gemini, Claude, OpenAI, OpenRouter, any OpenAI-compatible server or free local models with Ollama, with fallback models, a per-task usage ledger and an optional monthly budget cap.",
      "Engineering: a hexagonal (clean) architecture with ports and adapters, layering enforced by tests and contract tests for every adapter. The source of truth is a plain-Markdown Obsidian vault that the index can be rebuilt from. Exports to Neo4j, Gephi and RDF, a one-line installer for Mac, Windows and Linux via uv, and CI.",
    ],
    result:
      "Version 0.1.0 launched in November 2026 as a free download with a website, a 2-minute video tour and public source code. No account, no telemetry, and it never logs into or scrapes LinkedIn.",
    stack: ["Python", "LLMs (any provider · Ollama)", "RAG with citations", "fastembed", "SQLite FTS5", "Knowledge graph", "Starlette", "Obsidian Markdown", "Neo4j · RDF export"],
    links: [
      { label: "Website", href: "https://postloom-app.vercel.app/" },
      { label: "Video tour", href: "https://postloom-app.vercel.app/tour" },
      { label: "GitHub", href: "https://github.com/mdhabibi/postloom" },
    ],
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
    slug: "beatlens",
    featured: true,
    kicker: "Time-series LLMs · LoRA fine-tuning · XAI",
    title: "BeatLens: finding the T-wave peak with time-series LLMs",
    summary:
      "A research workbench, built with Dr. Sdjad Sadeghi for the TimeNet Hackathon 2026, that locates the T-wave peak in a two-channel ECG beat. It fine-tunes and probes a time-series language model from Hugging Face, benchmarks it against waveform baselines, and explains every estimate.",
    problem:
      "Given a known R-peak, where does the T wave peak? Precise T-peak timing underpins ECG interval analysis. The open question was whether a time-series LLM (OpenTSLM) actually reads the waveform, or only learns timing priors, and how it compares with simpler waveform models across databases.",
    approach: [
      "LoRA fine-tuning: fine-tuned OpenTSLM SoftPrompt (Llama 3.2 1B, Hugging Face checkpoint OpenTSLM/llama-3.2-1b-ecg-sp) with LoRA on a Nebius H100 to generate the T-peak sample index, with integer-only prompts and greedy decoding.",
      "Rigorous controls: a matched waveform-swap test showed MAE unchanged at 64.5 ms after swapping waveforms, so waveform dependence of the generative model stayed unverified. We reported that honestly rather than claiming a win.",
      "Representation probing: a numerical readout over frozen OpenTSLM ECG patch features plus local raw waveform samples, with separate kernels per input and their product capturing interactions, trained on QTDB beat windows.",
      "Benchmarks against a training-set timing prior and a waveform-only candidate ranker, with cross-database development panels on LUDB and MIT-BIH (separate manual T-peak labels) and a beat-level error audit.",
      "Explainable AI: Temporal LIME (replace short ECG segments, fit a local surrogate of the change in predicted time) and Integrated Gradients (attribute the timing shift from a reference to the input), shown in an interactive explorer.",
      "Engineering: Python/PyTorch package managed with uv, Streamlit workbench, live web explorer, and a TimeNet connector that maps QTDB records into sparse localisation tasks (validated with TimeNet 0.12.0).",
    ],
    result:
      "On LUDB (1,603 windows) the OpenTSLM interaction-kernel readout reached 18.60 ms MAE against 30.92 ms for the timing prior, and the waveform-only ranker reached 11.08 ms. On the MIT-BIH pilot (2,112 windows) the OpenTSLM readout made the fewest large misses (453 errors over 80 ms, against 571). Research use only; not clinically validated.",
    stack: ["Hugging Face", "OpenTSLM", "Llama 3.2 1B", "LoRA", "PyTorch", "Nebius H100", "Integrated Gradients", "LIME", "Streamlit"],
    links: [
      { label: "Live explorer", href: "https://beatlens.vercel.app" },
      { label: "GitHub", href: "https://github.com/mdhabibi/BeatLens" },
      { label: "Demo video", href: "https://youtu.be/QsP-ktHCz0s" },
      { label: "Experiment notes", href: "https://github.com/mdhabibi/BeatLens/blob/main/docs/opentslm-feasibility.md" },
    ],
  },
  {
    slug: "phd-bremsstrahlung",
    featured: true,
    kicker: "Ph.D. · Scientific ML & data science · HPC",
    title: "Bremsstrahlung suppression in laser–plasma simulations",
    summary:
      "Doctoral research at HHU Düsseldorf with HZDR and European XFEL: a QED-derived model added to a production particle-in-cell code, tuned with Bayesian optimisation, run on HPC clusters and analysed as a large-scale data-science problem. It cut predicted photon counts by 50.4% against the standard model.",
    problem:
      "When a petawatt laser hits a plasma micro-channel, electrons accelerate to hundreds of MeV inside extreme quasi-static fields, and the radiation they emit (bremsstrahlung) is what experiments measure. Standard simulation codes computed that emission as if the fields weren't there. The task was to quantify how much the fields suppress emission, then build that into a production simulator without breaking it.",
    approach: [
      "Modelling: derived a suppression factor from QED that depends on the local electric and magnetic field and the electron energy. This is the first combined electric-and-magnetic suppression (EMS) model for bremsstrahlung in PIC codes, and the magnetic effect had never been shown in a plasma context.",
      "Optimisation: engineered Bayesian optimisation for the simulation and parameter studies, improving computational efficiency by 35%.",
      "Production engineering: prototyped in Octave, then implemented in Modern Fortran with MPI as a module inside EPOCH, the PIC code used by laser–plasma groups worldwide, so it runs at scale on shared HPC clusters.",
      "Data pipelines: built and maintained automated ETL pipelines in Python and Apache Airflow to move large simulation outputs into analysis, with PyTest, GitHub Actions and CI/CD for reliable delivery.",
      "Data science and analysis: benchmarked models against baselines with SciPy and NumPy; analysed photon spectra, cumulative photon counts, 2-D emission-event densities, electron phase space and individual particle trajectories, plus the Lorentz-force decomposition along them.",
      "Insight: photons below about 10 MeV come mainly from electrons above 95 MeV, peaking around 185 fs into the interaction. That is exactly the population in the strongest fields, so it is the one the standard model over-estimates most.",
    ],
    result:
      "With suppression on, the accumulated photon count fell by 50.44% against baseline EPOCH, with spectra diverging clearly below about 3 MeV. The work earned a Dr. rer. nat. magna cum laude (2023), produced three peer-reviewed publications including Physics of Plasmas (2023), and left an EPOCH module. In industry terms, it was adding a validated correction to a well-tested production system and making it reproducible on shared infrastructure.",
    stack: ["Bayesian optimisation", "Python", "NumPy · SciPy", "Apache Airflow", "Modern Fortran", "MPI", "EPOCH (PIC)", "PyTest · CI/CD"],
    links: [
      { label: "Paper", href: "https://doi.org/10.1063/5.0167288" },
      { label: "Thesis repo", href: "https://github.com/mdhabibi/My_PhD_Thesis" },
      { label: "EPOCH code", href: "https://github.com/Warwick-Plasma/epoch" },
    ],
  },
  {
    slug: "lime-ecg",
    kicker: "Explainable AI · Time series · Open source",
    title: "LIME for time series: explaining a 12-lead ECG classifier",
    summary:
      "LIME was built for images and tables. I adapted it to 1-D physiological signals so a CNN's diagnosis of a 12-lead ECG can be traced back to the beats and intervals that produced it, and released the method as a reusable package.",
    problem:
      "Image LIME perturbs super-pixels, and a signal has no such regions. Perturbing individual samples creates physiologically meaningless variants far from the data manifold, so the surrogate ends up explaining noise. The perturbation units had to respect the structure of the signal.",
    approach: [
      "Data: PhysioNet / Computing in Cardiology Challenge 2020, with 12-lead ECGs from the CPSC, INCART, PTB, PTB-XL and Georgia databases. Classes: normal sinus rhythm, atrial fibrillation, ventricular tachycardia/fibrillation and myocardial infarction.",
      "Model: a 1-D CNN classifier trained on the pre-processed records.",
      "Segment the signal into fixed-width windows, the time-series analogue of super-pixels.",
      "Perturb by switching windows off and replacing each with its own mean voltage, which keeps variants smooth and plausible.",
      "Score every variant with the CNN, weight variants by cosine similarity to the original, fit a weighted linear surrogate, and rank windows by coefficient.",
      "Packaged as modules (preprocessing, training, LIME explanation, visualisation) with an end-to-end notebook under GPL-3.0.",
    ],
    result:
      "Explanations concentrate on clinically meaningful regions, such as the QRS complex and the ST segment that follows it. The same segment-and-perturb idea later became LIMEXplainer in TelescopeML, with wavelength bands in place of time windows.",
    stack: ["Python", "1-D CNN", "LIME", "scikit-learn", "NumPy · SciPy", "Time series"],
    links: [
      { label: "GitHub", href: "https://github.com/mdhabibi/LIME-for-Time-Series" },
      { label: "Challenge paper", href: "https://iopscience.iop.org/article/10.1088/1361-6579/abc960" },
    ],
  },
  {
    slug: "malaria",
    kicker: "Computer vision · Explainable AI · Medical imaging",
    title: "Auditable malaria-cell CNN",
    summary:
      "A CNN trained from scratch to separate parasitised from healthy red-blood-cell images, then opened up with LIME and class-activation maps so a clinician can see where in the cell the model is looking before trusting it.",
    problem:
      "Manual microscopy is still the reference method for malaria diagnosis, and it is slow, tiring and depends on the examiner's experience. A pre-screening classifier only helps if its decisions can be checked, so accuracy and interpretability were treated as equally important deliverables.",
    approach: [
      "Data: NIH / NLM Malaria Cell Images, 27,558 thin-smear images (about 800 MB), exactly balanced at 13,779 per class, with data augmentation.",
      "Architecture: four blocks of two Conv2D layers, each closed by batch normalisation and dropout, feeding a Dense(512) → Dense(256) → softmax head. 818k parameters (about 3.1 MB), small enough to train on a laptop.",
      "Training: early stopping on validation loss to pick the checkpoint and resist over-fitting.",
      "Explainability: LIME for superpixel-level evidence and class-activation mapping (CAM) for spatial attention, two complementary views of every prediction.",
    ],
    result: "96.19% test accuracy on 5,512 held-out images and AUC 0.99, with visual explanations that highlight the parasite regions inside infected cells.",
    stack: ["TensorFlow / Keras", "CNN", "Data augmentation", "Batch norm · Dropout", "LIME", "CAM"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/CNN-Predictor-for-Malaria_Cells-LIME-CAM" }],
  },
  {
    slug: "blood-cells-mlops",
    kicker: "Deep learning · Computer vision · MLOps",
    title: "Blood-cell classifier: from EDA to Kubernetes",
    summary:
      "A complete pipeline for classifying peripheral blood cells into eight types, covering EDA, outlier detection, U-Net and GrabCut segmentation, and VGG16 transfer learning. It is productionised as FastAPI microservices with MLflow, DVC, Airflow, Kubernetes and Terraform.",
    problem:
      "Differential blood counts are routine but labour-intensive, and some white-cell types differ only subtly. The questions were how much of each image actually carries signal, whether the rest could be discarded to make training and storage cheaper, and how to turn the notebook model into a service a lab could run.",
    approach: [
      "Data science: 17,092 images from Hospital Clínic de Barcelona across 8 classes. Extracted morphological features (cell area, perimeter, circularity) to understand the classes and flag outliers.",
      "Segmentation: compared a U-Net trained on 350 hand-annotated masks with an improved GrabCut initialisation. Masking the background and dropping outliers cut the corpus from 868 MB to 593 MB (−31.7%).",
      "Model: VGG16 with frozen ImageNet weights, GAP, Dense, Dropout and softmax(8) for transfer learning on the masked images.",
      "Serving: three FastAPI microservices (auth, preprocessing, prediction) behind a Streamlit/Flask frontend. The same GrabCut preprocessing runs at inference to avoid training/serving skew.",
      "MLOps: MLflow tracking with metric-gated model promotion, DVC data versioning, Airflow training pipeline, Jenkins CI with pytest, Docker, Kubernetes and Helm, Prometheus and Grafana monitoring, and Terraform for AWS (EKS, S3, ECR).",
    ],
    result:
      "94% accuracy across eight cell types, a 31.7% smaller dataset and 14 minutes faster training, with the segmented dataset published on Kaggle. The local Kubernetes deployment was demonstrated end to end, and the AWS roll-out was fully defined in Terraform (DataScientest capstone, team of three).",
    stack: ["VGG16 · transfer learning", "U-Net", "OpenCV", "FastAPI", "Docker · Kubernetes", "MLflow · DVC", "Airflow", "Terraform · AWS"],
    links: [
      { label: "GitHub", href: "https://github.com/DataScientest-Studio/apr24_bds_int_blood_cells" },
      { label: "Kaggle dataset", href: "https://www.kaggle.com/datasets/mahdihabibi/segmented-peripheral-blood-cells-using-opencv" },
    ],
  },
  {
    slug: "nucleus-unet",
    kicker: "Deep learning · Semantic segmentation",
    title: "Nucleus segmentation with U-Net",
    summary:
      "A U-Net trained on the 2018 Data Science Bowl corpus that produces pixel-accurate nucleus masks across very different stains and magnifications, tuned with Hyperband instead of a GPU cluster.",
    problem:
      "Finding every nucleus is the first step of most biological image-analysis pipelines and is still often done by hand. Nuclei are small, numerous and touching, so the model must keep fine spatial detail while understanding context.",
    approach: [
      "Architecture: a U-Net encoder–decoder. The contracting path captures context, the expanding path restores resolution, and skip connections carry high-resolution features across.",
      "Hyperparameter optimisation: Keras Tuner Hyperband over depth, filters, dropout and learning rate. Many configurations get a few epochs, and only the promising ones are promoted.",
      "Evaluation: pixel accuracy, binary cross-entropy and train/validation curves, plus qualitative checks of the masks on unseen samples.",
    ],
    result:
      "About 96% validation pixel accuracy and about 0.09 validation loss after 15 epochs, with closely tracking curves and no sign of over-fitting. Residual errors sit at the boundaries of touching nuclei, the natural next step for instance-aware post-processing such as watershed.",
    stack: ["Keras / TensorFlow", "U-Net", "Keras Tuner · Hyperband", "Semantic segmentation", "OpenCV"],
    links: [
      { label: "GitHub", href: "https://github.com/mdhabibi/Automated-Cell-Semantic-Segmentation-with-UNet" },
      { label: "Dataset", href: "https://www.kaggle.com/c/data-science-bowl-2018" },
    ],
  },
  {
    slug: "movie-recommender",
    kicker: "Recommender systems · Methods study",
    title: "Three ways to recommend a movie",
    summary:
      "Collaborative filtering, content-based filtering and Bayesian-weighted ranking, implemented side by side on public movie data to learn where each shines, where it fails cold and how they combine. It was the groundwork for production deal matching.",
    problem:
      "Every recommender family trades off cold start, diversity and explainability differently. Building them from scratch on the same data makes those trade-offs concrete before choosing a hybrid in production.",
    approach: [
      "Collaborative filtering: a sparse user × item matrix from MovieLens ratings, neighbours found with cosine similarity and k-NN, and ratings predicted as similarity-weighted averages. It discovers taste without metadata but suffers from cold start.",
      "Content-based filtering: TF-IDF on plot overviews plus genre, cast and crew features from TMDB 5000, ranked by cosine similarity. It works from day one and can explain why, but it over-specialises.",
      "Bayesian weighted rating: shrinks each item's mean rating toward the global mean in proportion to vote count, so a 9.5 from three voters doesn't beat an 8.7 from fifty thousand.",
    ],
    result:
      "A clear map of when to use each family and how to compose them, applied directly to the hybrid content-based and collaborative matching I build at DealCircle.",
    stack: ["pandas", "SciPy sparse", "scikit-learn", "TF-IDF", "k-NN · cosine similarity", "Bayesian ranking"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/movie-recommendation-systems" }],
  },
  {
    slug: "llm-search-handbook",
    kicker: "LLMs · Semantic search · RAG",
    title: "Search Semantically: an LLM and semantic-search course",
    summary:
      "A free 14-chapter course from keyword matching to embeddings, dense retrieval, vector databases, re-ranking, evaluation and RAG. Every chapter pairs intuition with a runnable notebook, and the whole course ships as a website and a 69-page e-book.",
    problem:
      "Most search tutorials jump straight to a vector database and an API key, skipping why lexical search fails, how to evaluate retrieval and when re-ranking pays off. Those are exactly the decisions that matter in production RAG.",
    approach: [
      "Curriculum: keyword search and BM25 → embeddings → dense retrieval → vector databases → re-ranking → evaluation → retrieval-augmented generation.",
      "Hands-on: a runnable notebook per chapter, built entirely on the open-source toolkit with no API keys.",
      "Delivery: a searchable MkDocs website, a 69-page e-book and CI-tested notebooks.",
    ],
    result: "An open course that mirrors the hybrid retrieval and RAG stack I run in production.",
    stack: ["Python", "BM25", "Embeddings", "Vector databases", "Re-ranking", "RAG", "MkDocs · CI"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/llm-search-handbook" }],
  },
  {
    slug: "agentic-system-design",
    kicker: "AI agents · System design",
    title: "Designing a production-grade agentic system",
    summary:
      "A step-by-step architecture guide to real agentic AI systems: LLM gateway, orchestrator, sub-agents, tool registry, memory and retrieval, input/output guardrails and observability.",
    problem:
      "Agent demos are easy and production agents are not. Teams need to know which components they actually need, where each one lives, and what breaks without it.",
    approach: [
      "Each component is introduced only after the problem it solves, and tagged by how badly you'll miss it in production.",
      "Covers the LLM gateway, orchestrator and sub-agents, tool registry, memory and retrieval, guardrails on input and output, and observability.",
      "About a 45-minute read, published as HTML and PDF.",
    ],
    result: "A practical reference that reflects the multi-agent enrichment platform I lead at DealCircle.",
    stack: ["LLM agents", "Orchestration", "Tool use", "Memory · RAG", "Guardrails", "Observability"],
    links: [{ label: "GitHub", href: "https://github.com/mdhabibi/agentic-system-design" }],
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
  { degree: "IOP Trusted Reviewer", school: "IOP Publishing · peer reviewer for physics journals", when: "Recognition", note: "", href: "https://www.linkedin.com/feed/update/urn:li:activity:7401672983783686144/" },
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

// Newsletter editions and other writing. Only entries with `href` are shown.
export const writing: { title: string; kind: string; topic?: string; href?: string }[] = [
  { title: "You Deleted the Poisoned Memory. Your Assistant Still Remembers It.", kind: "Edition", topic: "Agent memory · Unlearning", href: "https://www.linkedin.com/pulse/you-deleted-poisoned-memory-your-assistant-still-remembers-habibi-5z25e" },
  { title: "A → B → C Isn't a Fact: When Multi-Hop Paths Lie", kind: "Edition", topic: "Knowledge graphs · GraphRAG", href: "https://www.linkedin.com/pulse/b-c-isnt-fact-when-multi-hop-paths-lie-dr-mahdi-habibi-fysre" },
  { title: "Two Agents, One Graph, Zero New Evidence: Circular Corroboration in Multi-Agent Shared Memory", kind: "Edition", topic: "Multi-agent systems", href: "https://www.linkedin.com/pulse/two-agents-one-graph-zero-new-evidence-circular-shared-habibi-aswwe" },
  { title: "BeatLens demo", kind: "Video", topic: "Time-series LLMs · XAI", href: "https://youtu.be/QsP-ktHCz0s" },
];

export const skills: Record<string, string[]> = {
  "Retrieval & GenAI": ["RAG · GraphRAG", "LangGraph · LangChain", "Elasticsearch · BM25", "FAISS · embeddings", "Multi-agent systems"],
  "Modelling": ["PyTorch", "Hugging Face · LoRA fine-tuning", "Time-series LLMs (OpenTSLM)", "TensorFlow / Keras", "scikit-learn", "Recommender systems", "CNN · U-Net · VAE"],
  "Knowledge graphs": ["Neo4j · Cypher", "RDF · OWL", "SPARQL · SHACL"],
  "Explainability": ["LIME", "SHAP", "CAM / Grad-CAM"],
  "Engineering & MLOps": ["FastAPI", "Docker · Kubernetes", "MLflow · DVC · Airflow", "CI/CD · PyTest", "AWS"],
};
