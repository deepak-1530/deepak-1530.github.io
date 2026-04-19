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
      <div class="intro-photo"><img src="${siteData.photo}" alt="${siteData.name}" /></div>
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
  section.innerHTML = `<div class="container"><h2>What's New</h2>${items}</div>`;
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
  app.appendChild(renderEntrySection("education",  "Education",           siteData.education));
  app.appendChild(renderEntrySection("experience", "Work Experience",     siteData.experience));
  app.appendChild(renderEntrySection("research",   "Research Experience", siteData.research));
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
