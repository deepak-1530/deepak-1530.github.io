// ── Site Data ────────────────────────────────────────────────────────────────

const siteData = {
  name: "Deepak Singh",
  photo: "profile.jpeg",
  intro: [
    `I am a PhD student at <a href="https://www.wpi.edu/" target="_blank">WPI</a>, working with <a href="https://nitinjsanket.github.io/" target="_blank">Prof. Nitin Sanket</a> in the <a href="https://pear.wpi.edu/" target="_blank">Perception and Autonomous Robotics (PeAR)</a> group. My research lies at the intersection of <strong>perception</strong> and <strong>embodied AI</strong> for enabling compute-efficient robot autonomy.`,
    `Primarily, I am working towards revisiting robot perception using concepts from <strong>computational imaging</strong> and <strong>embodied AI</strong> approaches to learn on the fly.`
  ],
  links: [
    { label: "Email",         icon: "fa-solid fa-envelope",       url: "mailto:dsingh1@wpi.edu" },
    { label: "GitHub",        icon: "fa-brands fa-github",        url: "https://github.com/deepak-1530" },
    { label: "LinkedIn",      icon: "fa-brands fa-linkedin",      url: "https://www.linkedin.com/in/deepak-singh-052a6212b/" },
    { label: "Google Scholar",icon: "fa-solid fa-graduation-cap", url: "https://scholar.google.com/citations?hl=en&view_op=list_works&authuser=1&gmla=AJsN-F55HxKu3liUlv5-ImXEPRLucB5vslJ2faoaePIQt7aabp9cSglQy3eaWyzSh4H80YqNVVnJGD0pMdISTbTKpkIm8PpSdA&user=C7QA4swAAAAJ" },
  ],
  researchInterests: [
    "Robotics",
    "Machine Learning",
    "2D-3D Computer Vision",
    "Computational Imaging",
    "Motion Planning",
    "Large Language & Speech Models",
  ],
  skills: [
    { label: "Languages",       value: "Python, C++, MATLAB" },
    { label: "ML / DL",         value: "PyTorch, TensorFlow, Triton, CUDA" },
    { label: "Computer Vision", value: "OpenCV, Kornia, PCL" },
    { label: "Robotics",        value: "ROS, ROS 2, Gazebo, AirSim, Ceres, GTSAM, OMPL" },
    { label: "Tools",           value: "Blender, Google Cloud Platform, Git, Docker, Ubuntu" },
    { label: "Hardware",        value: "LiDAR, Cameras, IMU, GPS, Pixhawk, Jetson Nano, Realsense" }
  ],
  whatsNew: [
    { date: "Jan 2025",  text: "Started PhD at Worcester Polytechnic Institute (WPI) with the PeAR group." },
    { date: "Apr 2022",  text: `Paper accepted at <strong>ICRA 2022</strong>: CCO-VOXEL — Chance Constrained Optimization for Safe Trajectory Planning.` },
    { date: "Oct 2021",  text: `Paper accepted at <strong>ICCV 2021 Ocean Vision Workshop</strong>: Marine Debris Dataset for Forward-Looking Sonar Semantic Segmentation.` },
    { date: "Jul 2021",  text: "Joined Hike as Machine Learning Scientist, working on TTS, Text2SQL, and AI avatar generation." },
    { date: "Jul 2020",  text: `Paper accepted at <strong>ICML 2020 AI in Autonomous Driving Workshop</strong>: Depth-CNN fusion for semantic road segmentation.` },
  ],
  education: [
    {
      logo: "WPI",
      name: "Worcester Polytechnic Institute (WPI)",
      meta: "PhD Student | Present",
      desc: `Working with <a href="https://nitinjsanket.github.io/" target="_blank">Prof. Nitin Sanket</a> on robot perception and navigation. Research focused on computational imaging and embodied AI for compute-efficient robot autonomy.`
    },
    {
      logo: "NSIT",
      name: "Netaji Subhas Institute of Technology (NSIT), Delhi",
      meta: "B.E. in Electronics and Communication Engineering | 2016 – 2020",
      desc: `<strong>Relevant Coursework:</strong> Digital Signal Processing, Control Systems, Communication Systems, Embedded Systems, Linear Algebra, Probability &amp; Statistics`
    }
  ],
  experience: [
    {
      logo: "Hike",
      name: "Hike",
      url: "https://hike.in",
      meta: "Machine Learning Scientist",
      bullets: [
        "Built text-to-speech systems for customer support chatbot in multiple Indic languages",
        "Developed Analyst Co-Pilot Tool (Text2SQL) using RAG approaches with vector embeddings and open-source/commercial LLMs",
        "Created AI avatar generation pipeline for Rush Gaming Universe with prompt-to-mesh and image-to-mesh models"
      ]
    },
    {
      logo: "FP",
      name: "FilterPixel",
      url: "https://filterpixel.com",
      meta: "Computer Vision Engineer",
      bullets: [
        "Worked on computer vision and image processing algorithms for automated photo culling"
      ]
    }
  ],
  research: [
    {
      logo: "RRC",
      name: "Robotics Research",
      meta: "Autonomous Systems &amp; Perception",
      desc: "Developed perception and planning algorithms for vision-based autonomous navigation. Worked on LiDAR odometry on pointcloud maps achieving RMSE of 0.0135m (position) and 0.03° (orientation). Built multi-feature Visual Inertial Odometry systems achieving 18 FPS with local bundle adjustment. Research published at ICRA, ICCV, and ICML workshops."
    }
  ],
  publications: [
    {
      title: "CCO-VOXEL: Chance Constrained Optimization over Uncertain Voxel-Grid Representation for Safe Trajectory Planning",
      venue: "ICRA 2022",
      authors: "Sudarshan Harithas, Rishabh Dev Yadav, <strong>Deepak Singh</strong>, Arun Singh, K Madhava Krishna",
      desc: "Chance constrained optimization over uncertain voxel-grid representation for safe trajectory planning in environments with probabilistic obstacle representations.",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2110.02904" },
        { label: "Code",  url: "https://github.com/sudarshan-s-harithas/CCO-VOXEL" }
      ]
    },
    {
      title: "The Marine Debris Dataset for Forward-Looking Sonar Semantic Segmentation",
      venue: "ICCV 2021 · Ocean Vision Workshop",
      authors: "<strong>Deepak Singh</strong>, Matias Valdenegro Toro",
      desc: "A benchmark dataset and semantic segmentation methods for forward-looking sonar imagery targeting marine debris detection in underwater environments.",
      links: [
        { label: "Paper",   url: "https://openaccess.thecvf.com/content/ICCV2021W/OceanVision/html/Singh_The_Marine_Debris_Dataset_for_Forward-Looking_Sonar_Semantic_Segmentation_ICCVW_2021_paper.html" },
        { label: "Dataset", url: "https://github.com/mvaldenegro/marine-debris-fls-datasets" }
      ]
    },
    {
      title: "Depth Meets CNN: A Fusion Based Approach for Semantic Road Segmentation",
      venue: "ICML 2020 · AI in Autonomous Driving Workshop",
      authors: "<strong>Deepak Singh</strong>, Abhinav Atrishi, Sarthak Gupta, Raghav Marwaha",
      desc: "Depth-aided road segmentation using Conditional Random Fields fusing semantic segmentation with V-disparity ground plane masks on the KITTI dataset.",
      links: [
        { label: "Paper", url: "https://drive.google.com/file/d/1b58TT5bO67zIYHz6qLnkVkign8x6vtW0/view?usp=sharing" }
      ]
    },
    {
      title: "Stereo Visual Odometry with Stixel Map Based Obstacle Detection for Autonomous Navigation",
      venue: "Advances In Robotics (AIR) 2019",
      authors: "<strong>Deepak Singh</strong>",
      desc: "Stereo visual odometry with ground plane constraints in bundle adjustment using V-Disparity algorithm for autonomous navigation.",
      links: [
        { label: "Paper", url: "https://dl.acm.org/doi/abs/10.1145/3352593.3352622" }
      ]
    },
    {
      title: "Nature Inspired Golden Spiral Super-Ultra Wideband Microstrip Antenna",
      venue: "Asia-Pacific Microwave Conference (APMC) 2018",
      authors: "Sarthak Gupta, Tushar Arora, <strong>Deepak Singh</strong>, K. K. Singh",
      links: [
        { label: "Paper", url: "https://ieeexplore.ieee.org/document/8617550" }
      ]
    }
  ],
  projects: [
    {
      title: "LiDAR Odometry on Pointcloud Maps",
      desc: "Robust algorithm for lidar-based localization on pre-made pointcloud maps using FLOAM registration, local bundle adjustment (100 keyframes), and loop closure detection. Achieved ~50ms per scan with RMSE of 0.0135m (position) and 0.03° (orientation).",
      tech: "PCL · ROS · GTSAM · VLP-16 LiDAR · Intel NUC i7",
      links: [{ label: "Project Page", url: "https://sites.google.com/iiitd.ac.in/iiitd-alive" }]
    },
    {
      title: "Autonomous Navigation of Drone with Cable Suspended Payload",
      desc: "Autonomous quadrotor navigation pipeline using Octomap, Kinodynamic A* Planner with spherical collision modeling for suspended payload. Features Aruco marker-based payload pose estimation and B-Spline trajectory optimization.",
      tech: "ROS · Gazebo · PX4 · OpenCV · Octomap",
      links: [{ label: "GitHub", url: "https://github.com/deepak-1530/Drone_SuspendedPayload_Navigation" }]
    },
    {
      title: "Quadrotor Motion Planning with A* and Octomap",
      desc: "Navigation pipeline combining Octomap environmental mapping with Kinodynamic A* planning and B-Spline optimization for quadrotor systems.",
      tech: "ROS · Gazebo · PX4 · NLOPT · Realsense D435i",
      links: [{ label: "GitHub", url: "https://github.com/deepak-1530/FastPlannerOctomap" }]
    },
    {
      title: "Multi-feature Visual Inertial Odometry",
      desc: "Enhanced SVO implementation integrating SIFT, SURF, and FAST features with dynamic weighting methodology. Achieves 18 FPS on i7 processor with local bundle adjustment.",
      tech: "OpenCV · G2O · ROS · Intel Realsense T265"
    },
    {
      title: "ARES Rover – Perception & State Estimation",
      desc: "Autonomous rover software stack including Extended Kalman Filter (GPS/IMU/RGBD fusion), occupancy/distance mapping, and ground plane segmentation.",
      tech: "TensorFlow · ROS · OpenCV · PCL · Jetson Nano"
    },
    {
      title: "Image Thresholding via Vortex Search Optimization",
      desc: "10x better thresholding performance versus state-of-the-art using Vortex Search Algorithm with Otsu cost function.",
      tech: "MATLAB · Optimization"
    },
    {
      title: "NSIT Solar Car Project (Phoenix-1)",
      desc: "Electrical team member responsible for vehicle circuit design (Eagle CAD), 18650 Li-Ion battery management, and sensor telemetry interfacing.",
      tech: "Arduino · Eagle CAD · BLDC Motor · Li-Ion Cells"
    }
  ]
};

// ── Component Builders ───────────────────────────────────────────────────────

function renderNav(currentPage) {
  const nav = document.createElement("nav");
  nav.innerHTML = `<div class="container nav-bar">
    <a href="index.html" class="nav-name">${siteData.name}</a>
    <div class="nav-links">
      <a href="index.html"    class="${currentPage === 'home'     ? 'active' : ''}">Home</a>
      <a href="about.html"    class="${currentPage === 'about'    ? 'active' : ''}">About</a>
      <a href="projects.html" class="${currentPage === 'projects' ? 'active' : ''}">Projects</a>
    </div>
  </div>`;
  return nav;
}

function renderIntro() {
  const section = document.createElement("section");
  section.id = "intro";
  const paragraphs = siteData.intro.map(p => `<p>${p}</p>`).join("");

  const links = siteData.links.map(l => {
    const target = l.url.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener"';
    return `<a href="${l.url}"${target} class="icon-link" title="${l.label}">
      <i class="${l.icon}"></i><span>${l.label}</span>
    </a>`;
  }).join("");

  section.innerHTML = `<div class="container">
    <div class="intro-row">
      <div class="intro-photo">
        <img src="${siteData.photo}" alt="${siteData.name}" />
      </div>
      <div class="intro-text">
        <h1>${siteData.name}</h1>
        ${paragraphs}
        <div class="intro-links">${links}</div>
      </div>
    </div>
  </div>`;
  return section;
}

function renderResearchInterests() {
  const section = document.createElement("section");
  section.id = "research-interests";
  const tags = siteData.researchInterests.map(r => `<span class="interest-tag">${r}</span>`).join("");
  section.innerHTML = `<div class="container">
    <h2>Research Interests</h2>
    <div class="interests-list">${tags}</div>
  </div>`;
  return section;
}

function renderSkills() {
  const section = document.createElement("section");
  section.id = "skills";
  const rows = siteData.skills.map(s =>
    `<tr><td class="skill-label">${s.label}</td><td>${s.value}</td></tr>`
  ).join("");
  section.innerHTML = `<div class="container">
    <h2>Technical Skills</h2>
    <table class="skills-table">${rows}</table>
  </div>`;
  return section;
}

function renderWhatsNew() {
  const section = document.createElement("section");
  section.id = "whats-new";
  const items = siteData.whatsNew.map(item =>
    `<div class="news-item">
      <span class="news-date">${item.date}</span>
      <span class="news-text">${item.text}</span>
    </div>`
  ).join("");
  section.innerHTML = `<div class="container">
    <h2>What's New</h2>
    ${items}
  </div>`;
  return section;
}

function renderEntrySection(id, title, entries) {
  const section = document.createElement("section");
  section.id = id;
  const items = entries.map(e => {
    const nameHtml = e.url ? `<a href="${e.url}" target="_blank">${e.name}</a>` : e.name;
    let body = "";
    if (e.desc)    body += `<p>${e.desc}</p>`;
    if (e.bullets) body += `<ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`;
    return `<div class="entry">
      <div class="entry-logo"><div class="logo-placeholder">${e.logo}</div></div>
      <div class="entry-details">
        <h3>${nameHtml}</h3>
        <p class="entry-meta">${e.meta}</p>
        ${body}
      </div>
    </div>`;
  }).join("");
  section.innerHTML = `<div class="container"><h2>${title}</h2>${items}</div>`;
  return section;
}

function renderProjectCard(item) {
  const linksHtml = (item.links || []).map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
  ).join(" · ");
  const metaParts = [item.venue, linksHtml].filter(Boolean).join(" · ");
  const authorsHtml = item.authors ? `<p class="project-authors">${item.authors}</p>` : "";
  const descHtml    = item.desc    ? `<p>${item.desc}</p>` : "";
  const techHtml    = item.tech    ? `<p class="project-tech">${item.tech}</p>` : "";

  return `<div class="project-entry">
    <div class="project-content">
      <h3>${item.title}</h3>
      ${metaParts ? `<p class="project-venue">${metaParts}</p>` : ""}
      ${authorsHtml}
      ${descHtml}
      ${techHtml}
    </div>
  </div>`;
}

function renderPublications() {
  const section = document.createElement("section");
  section.id = "publications";
  const cards = siteData.publications.map(p => renderProjectCard(p)).join("");
  section.innerHTML = `<div class="container"><h2>Publications</h2>${cards}</div>`;
  return section;
}

function renderProjectsList() {
  const section = document.createElement("section");
  section.id = "projects";
  const cards = siteData.projects.map(p => renderProjectCard(p)).join("");
  section.innerHTML = `<div class="container"><h2>Projects</h2>${cards}</div>`;
  return section;
}

function renderFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<div class="container">
    <p>&copy; ${siteData.name}. Last updated April 2026.</p>
  </div>`;
  return footer;
}

// ── Page Assembly ────────────────────────────────────────────────────────────

function buildHomePage() {
  const app = document.getElementById("app");
  app.appendChild(renderNav("home"));
  app.appendChild(renderIntro());
  app.appendChild(renderResearchInterests());
  app.appendChild(renderSkills());
  app.appendChild(renderWhatsNew());
  app.appendChild(renderFooter());
}

function buildAboutPage() {
  const app = document.getElementById("app");
  app.appendChild(renderNav("about"));
  app.appendChild(renderEntrySection("education",   "Education",          siteData.education));
  app.appendChild(renderEntrySection("experience",  "Work Experience",    siteData.experience));
  app.appendChild(renderEntrySection("research",    "Research Experience",siteData.research));
  app.appendChild(renderFooter());
}

function buildProjectsPage() {
  const app = document.getElementById("app");
  app.appendChild(renderNav("projects"));
  app.appendChild(renderPublications());
  app.appendChild(renderProjectsList());
  app.appendChild(renderFooter());
}

// ── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  if      (page === "about")    buildAboutPage();
  else if (page === "projects") buildProjectsPage();
  else                          buildHomePage();
});
