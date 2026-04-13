const skills = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Accessibility"]
  },
  {
    group: "Backend / Infra",
    items: ["Node.js", "Express", "REST API", "PostgreSQL", "Firebase", "GitHub Actions"]
  },
  {
    group: "Tools",
    items: ["Git", "Figma", "Notion", "Jira", "VS Code", "Chrome DevTools"]
  },
  {
    group: "Collaboration",
    items: ["Agile", "Code Review", "Tech Writing", "Requirements Analysis"]
  }
];

const projects = [
  {
    title: "Project Atlas (Placeholder)",
    oneLiner: "사용자 온보딩 이탈률을 줄이기 위한 대시보드 제품",
    tech: "React, TypeScript, Node.js",
    highlights: [
      "초기 진입 플로우를 개선해 이탈률 감소(수치 교체 필요)",
      "컴포넌트 재사용 구조로 신규 화면 개발 시간 단축",
      "API 응답 지연 구간 캐싱으로 체감 속도 개선"
    ],
    demoUrl: "https://example.com/demo-atlas",
    repoUrl: "https://github.com/your-username/project-atlas",
    status: "운영 중"
  },
  {
    title: "Pulse Commerce (Placeholder)",
    oneLiner: "중소상공인용 주문/재고 관리 웹앱",
    tech: "JavaScript, Express, PostgreSQL",
    highlights: [
      "주문/재고 화면 통합으로 운영 동선 단순화",
      "권한별 UI 분기로 실수 입력을 줄이는 UX 설계",
      "배포 자동화 파이프라인 구성으로 릴리즈 리드타임 단축"
    ],
    demoUrl: "https://example.com/demo-pulse",
    repoUrl: "https://github.com/your-username/pulse-commerce",
    status: "개선 중"
  },
  {
    title: "Mingle Notes (Placeholder)",
    oneLiner: "실시간 협업 노트 및 태스크 관리 서비스",
    tech: "React, Firebase, Cloud Functions",
    highlights: [
      "실시간 동기화로 팀 협업 지연 최소화",
      "검색/필터 성능 개선으로 탐색 시간 단축",
      "에러 모니터링 도입으로 장애 대응 시간 단축"
    ],
    demoUrl: "https://example.com/demo-mingle",
    repoUrl: "https://github.com/your-username/mingle-notes",
    status: "MVP"
  }
];

function createButtonLink(label, href) {
  const link = document.createElement("a");
  link.className = "btn btn-secondary";
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer noopener";
  link.textContent = label;
  return link;
}

function renderSkills(skillItems) {
  const root = document.getElementById("skills-root");
  if (!root) return;

  root.innerHTML = "";

  skillItems.forEach((groupData, index) => {
    const wrapper = document.createElement("article");
    wrapper.className = "card skill-group reveal";
    wrapper.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;

    const title = document.createElement("h3");
    title.textContent = groupData.group;

    const tagBox = document.createElement("div");
    tagBox.className = "skill-tags";

    groupData.items.forEach((skill) => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = skill;
      tagBox.appendChild(tag);
    });

    wrapper.append(title, tagBox);
    root.appendChild(wrapper);
  });
}

function renderProjects(projectItems) {
  const root = document.getElementById("projects-root");
  if (!root) return;

  root.innerHTML = "";

  projectItems.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.style.transitionDelay = `${Math.min(index * 80, 320)}ms`;

    const header = document.createElement("div");
    header.className = "project-header";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const status = document.createElement("span");
    status.className = "project-status";
    status.textContent = project.status;
    header.append(title, status);

    const description = document.createElement("p");
    description.className = "section-copy";
    description.textContent = project.oneLiner;

    const tech = document.createElement("p");
    tech.className = "project-tech";
    tech.textContent = project.tech;

    const bulletList = document.createElement("ul");
    bulletList.className = "project-highlights";
    project.highlights.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      bulletList.appendChild(item);
    });

    const links = document.createElement("div");
    links.className = "project-links";
    links.append(
      createButtonLink("Demo", project.demoUrl),
      createButtonLink("Repo", project.repoUrl)
    );

    card.append(header, description, tech, bulletList, links);
    root.appendChild(card);
  });
}

function setupRevealAnimation() {
  const targets = [...document.querySelectorAll(".reveal")];
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -7% 0px" }
  );

  targets.forEach((target) => observer.observe(target));
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!toggle || !mobileMenu) return;

  const links = mobileMenu.querySelectorAll("a");
  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => link.addEventListener("click", closeMenu));
}

function setupFooterYear() {
  const yearNode = document.getElementById("current-year");
  if (!yearNode) return;
  yearNode.textContent = String(new Date().getFullYear());
}

renderSkills(skills);
renderProjects(projects);
setupMobileMenu();
setupFooterYear();
setupRevealAnimation();
