// ============================================================
//  SITE CONTENT — edit this file to update the website
// ============================================================

const siteData = {

  name:  "Deepak Singh",
  photo: "profile.jpeg",

  // ── Short bio paragraphs (HTML allowed) ─────────────────
  intro: [
    `I am a PhD student at <a href="https://www.wpi.edu/" target="_blank">WPI</a>, working with <a href="https://nitinjsanket.github.io/" target="_blank">Prof. Nitin Sanket</a> in the <a href="https://pear.wpi.edu/" target="_blank">Perception and Autonomous Robotics (PeAR)</a> group. My research lies at the intersection of <strong>perception</strong> and <strong>embodied AI</strong> for enabling compute-efficient robot autonomy.`,
    `Primarily, I am working towards revisiting robot perception using concepts from <strong>computational imaging</strong> and <strong>embodied AI</strong> approaches to learn on the fly.`
  ],

  // ── Social / contact links ───────────────────────────────
  // icon: any Font Awesome class (https://fontawesome.com/icons)
  links: [
    { label: "Email",         icon: "fa-solid fa-envelope",       url: "mailto:dsingh1@wpi.edu" },
    { label: "GitHub",        icon: "fa-brands fa-github",        url: "https://github.com/deepak-1530" },
    { label: "LinkedIn",      icon: "fa-brands fa-linkedin",      url: "https://www.linkedin.com/in/deepak-singh-052a6212b/" },
    { label: "Google Scholar",icon: "fa-solid fa-graduation-cap", url: "https://scholar.google.com/citations?user=C7QA4swAAAAJ" },
  ],

  // ── Research interests (shown as tags on home page) ──────
  researchInterests: [
    "Robotics",
    "Machine Learning",
    "2D-3D Computer Vision",
    "Computational Imaging",
    "Motion Planning",
    "Large Language & Speech Models",
  ],

  // ── Technical skills ─────────────────────────────────────
  skills: [
    { label: "Languages",       value: "Python, C++, MATLAB" },
    { label: "ML / DL",         value: "PyTorch, TensorFlow, Triton, CUDA" },
    { label: "Computer Vision", value: "OpenCV, Kornia, PCL" },
    { label: "Robotics",        value: "ROS, ROS 2, Gazebo, AirSim, Ceres, GTSAM, OMPL" },
    { label: "Tools",           value: "Blender, Google Cloud Platform, Git, Docker, Ubuntu" },
    { label: "Hardware",        value: "LiDAR, Cameras, IMU, GPS, Pixhawk, Jetson Nano, Realsense" },
  ],

  // ── What's New ───────────────────────────────────────────
  // Add a new entry at the TOP to show it first.
  // date: short string e.g. "Apr 2025"
  // text: plain text or HTML
  whatsNew: [
    {
      date: "Jan 2025",
      text: "Started PhD at Worcester Polytechnic Institute (WPI) with the PeAR group.",
    },
    {
      date: "Apr 2022",
      text: `Paper accepted at <strong>ICRA 2022</strong>: CCO-VOXEL — Chance Constrained Optimization for Safe Trajectory Planning.`,
    },
    {
      date: "Oct 2021",
      text: `Paper accepted at <strong>ICCV 2021 Ocean Vision Workshop</strong>: Marine Debris Dataset for Forward-Looking Sonar Semantic Segmentation.`,
    },
    {
      date: "Jul 2021",
      text: "Joined Hike as Machine Learning Scientist — TTS, Text2SQL, and AI avatar generation.",
    },
    {
      date: "Jul 2020",
      text: `Paper accepted at <strong>ICML 2020 AI in Autonomous Driving Workshop</strong>: Depth-CNN fusion for semantic road segmentation.`,
    },
  ],

  // ── Education (About page) ───────────────────────────────
  education: [
    {
      logo: "WPI",
      name: "Worcester Polytechnic Institute (WPI)",
      meta: "PhD Student | Present",
      desc: `Working with <a href="https://nitinjsanket.github.io/" target="_blank">Prof. Nitin Sanket</a> on robot perception and navigation. Research focused on computational imaging and embodied AI for compute-efficient robot autonomy.`,
    },
    {
      logo: "NSIT",
      name: "Netaji Subhas Institute of Technology (NSIT), Delhi",
      meta: "B.E. in Electronics and Communication Engineering | 2016 – 2020",
      desc: `<strong>Relevant Coursework:</strong> Digital Signal Processing, Control Systems, Communication Systems, Embedded Systems, Linear Algebra, Probability &amp; Statistics`,
    },
  ],

  // ── Work Experience (About page) ─────────────────────────
  experience: [
    {
      logo: "Hike",
      name: "Hike",
      url:  "https://hike.in",
      meta: "Machine Learning Scientist",
      bullets: [
        "Built text-to-speech systems for customer support chatbot in multiple Indic languages",
        "Developed Analyst Co-Pilot Tool (Text2SQL) using RAG approaches with vector embeddings and open-source/commercial LLMs",
        "Created AI avatar generation pipeline for Rush Gaming Universe with prompt-to-mesh and image-to-mesh models",
      ],
    },
    {
      logo: "FP",
      name: "FilterPixel",
      url:  "https://filterpixel.com",
      meta: "Computer Vision Engineer",
      bullets: [
        "Worked on computer vision and image processing algorithms for automated photo culling",
      ],
    },
  ],

  // ── Research Experience (About page) ─────────────────────
  research: [
    {
      logo: "RRC",
      name: "Robotics Research",
      meta: "Autonomous Systems &amp; Perception",
      desc: "Developed perception and planning algorithms for vision-based autonomous navigation. Worked on LiDAR odometry on pointcloud maps achieving RMSE of 0.0135m (position) and 0.03° (orientation). Built multi-feature Visual Inertial Odometry systems achieving 18 FPS with local bundle adjustment. Research published at ICRA, ICCV, and ICML workshops.",
    },
  ],

  // ── Publications (Projects page) ─────────────────────────
  // links: array of { label, url }
  publications: [
    {
      title:   "CCO-VOXEL: Chance Constrained Optimization over Uncertain Voxel-Grid Representation for Safe Trajectory Planning",
      venue:   "ICRA 2022",
      authors: "Sudarshan Harithas, Rishabh Dev Yadav, <strong>Deepak Singh</strong>, Arun Singh, K Madhava Krishna",
      desc:    "Chance constrained optimization over uncertain voxel-grid representation for safe trajectory planning in environments with probabilistic obstacle representations.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2110.02904" },
        { label: "Code",  url: "https://github.com/sudarshan-s-harithas/CCO-VOXEL" },
      ],
    },
    {
      title:   "The Marine Debris Dataset for Forward-Looking Sonar Semantic Segmentation",
      venue:   "ICCV 2021 · Ocean Vision Workshop",
      authors: "<strong>Deepak Singh</strong>, Matias Valdenegro Toro",
      desc:    "A benchmark dataset and semantic segmentation methods for forward-looking sonar imagery targeting marine debris detection in underwater environments.",
      links: [
        { label: "Paper",   url: "https://openaccess.thecvf.com/content/ICCV2021W/OceanVision/html/Singh_The_Marine_Debris_Dataset_for_Forward-Looking_Sonar_Semantic_Segmentation_ICCVW_2021_paper.html" },
        { label: "Dataset", url: "https://github.com/mvaldenegro/marine-debris-fls-datasets" },
      ],
    },
    {
      title:   "Depth Meets CNN: A Fusion Based Approach for Semantic Road Segmentation",
      venue:   "ICML 2020 · AI in Autonomous Driving Workshop",
      authors: "<strong>Deepak Singh</strong>, Abhinav Atrishi, Sarthak Gupta, Raghav Marwaha",
      desc:    "Depth-aided road segmentation using Conditional Random Fields fusing semantic segmentation with V-disparity ground plane masks on the KITTI dataset.",
      links: [
        { label: "Paper", url: "https://drive.google.com/file/d/1b58TT5bO67zIYHz6qLnkVkign8x6vtW0/view?usp=sharing" },
      ],
    },
    {
      title:   "Stereo Visual Odometry with Stixel Map Based Obstacle Detection for Autonomous Navigation",
      venue:   "Advances In Robotics (AIR) 2019",
      authors: "<strong>Deepak Singh</strong>",
      desc:    "Stereo visual odometry with ground plane constraints in bundle adjustment using V-Disparity algorithm for autonomous navigation.",
      links: [
        { label: "Paper", url: "https://dl.acm.org/doi/abs/10.1145/3352593.3352622" },
      ],
    },
    {
      title:   "Nature Inspired Golden Spiral Super-Ultra Wideband Microstrip Antenna",
      venue:   "Asia-Pacific Microwave Conference (APMC) 2018",
      authors: "Sarthak Gupta, Tushar Arora, <strong>Deepak Singh</strong>, K. K. Singh",
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/8617550" },
      ],
    },
  ],

  // ── Projects (Projects page) ──────────────────────────────
  // desc: what it does
  // tech: comma/dot separated tech stack
  // links: optional array of { label, url }
  projects: [
    {
      title: "LiDAR Odometry on Pointcloud Maps",
      desc:  "Robust algorithm for lidar-based localization on pre-made pointcloud maps using FLOAM registration, local bundle adjustment (100 keyframes), and loop closure detection. Achieved ~50ms per scan with RMSE of 0.0135m (position) and 0.03° (orientation).",
      tech:  "PCL · ROS · GTSAM · VLP-16 LiDAR · Intel NUC i7",
      links: [{ label: "Project Page", url: "https://sites.google.com/iiitd.ac.in/iiitd-alive" }],
    },
    {
      title: "Autonomous Navigation of Drone with Cable Suspended Payload",
      desc:  "Autonomous quadrotor navigation pipeline using Octomap, Kinodynamic A* Planner with spherical collision modeling for suspended payload. Features Aruco marker-based payload pose estimation and B-Spline trajectory optimization.",
      tech:  "ROS · Gazebo · PX4 · OpenCV · Octomap",
      links: [{ label: "GitHub", url: "https://github.com/deepak-1530/Drone_SuspendedPayload_Navigation" }],
    },
    {
      title: "Quadrotor Motion Planning with A* and Octomap",
      desc:  "Navigation pipeline combining Octomap environmental mapping with Kinodynamic A* planning and B-Spline optimization for quadrotor systems.",
      tech:  "ROS · Gazebo · PX4 · NLOPT · Realsense D435i",
      links: [{ label: "GitHub", url: "https://github.com/deepak-1530/FastPlannerOctomap" }],
    },
    {
      title: "Multi-feature Visual Inertial Odometry",
      desc:  "Enhanced SVO implementation integrating SIFT, SURF, and FAST features with dynamic weighting methodology. Achieves 18 FPS on i7 processor with local bundle adjustment.",
      tech:  "OpenCV · G2O · ROS · Intel Realsense T265",
    },
    {
      title: "ARES Rover – Perception & State Estimation",
      desc:  "Autonomous rover software stack including Extended Kalman Filter (GPS/IMU/RGBD fusion), occupancy/distance mapping, and ground plane segmentation.",
      tech:  "TensorFlow · ROS · OpenCV · PCL · Jetson Nano",
    },
    {
      title: "Image Thresholding via Vortex Search Optimization",
      desc:  "10x better thresholding performance versus state-of-the-art using Vortex Search Algorithm with Otsu cost function.",
      tech:  "MATLAB · Optimization",
    },
    {
      title: "NSIT Solar Car Project (Phoenix-1)",
      desc:  "Electrical team member responsible for vehicle circuit design (Eagle CAD), 18650 Li-Ion battery management, and sensor telemetry interfacing.",
      tech:  "Arduino · Eagle CAD · BLDC Motor · Li-Ion Cells",
    },
  ],

};
