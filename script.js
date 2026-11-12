(function () {
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* Shared links */
  const setHref = (sel, href, text) =>
    document.querySelectorAll(sel).forEach((a) => {
      a.href = href;
      if (text !== undefined) a.textContent = text;
    });
  setHref(".js-luma", SITE.lumaUrl);
  setHref(".js-website", SITE.website);
  setHref(".js-linkedin", SITE.linkedin);
  setHref(".js-x", SITE.x);
  document.querySelectorAll(".js-email").forEach((a) => {
    a.href = "mailto:" + SITE.contactEmail;
    if (!a.textContent.trim()) a.textContent = SITE.contactEmail;
  });

  /* Mobile nav */
  const header = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => {
      header.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
  const navInner = header.querySelector(".nav-inner");
  const setNavH = () => document.documentElement.style.setProperty("--nav-h", navInner.offsetHeight + "px");
  setNavH();
  window.addEventListener("resize", setNavH);
  document.fonts && document.fonts.ready.then(setNavH);
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Research cards */
  const researchGrid = document.getElementById("research-grid");
  if (researchGrid) researchGrid.innerHTML = RESEARCH.map((r) => {
    const tag = r.link ? "a" : "article";
    const attrs = r.link ? ` href="${esc(r.link)}" target="_blank" rel="noopener"` : "";
    return `<${tag} class="research-card${r.link ? " is-link" : ""}"${attrs}>
      <h3>${esc(r.title)}</h3>
      <p class="people"><span>Fellow</span> ${esc(r.fellow)} <span class="sep">·</span> <span>Mentor</span> ${esc(r.mentor)}</p>
      <p class="summary">${esc(r.summary)}</p>
      <div class="card-foot">
        <ul class="tags">${(r.tags || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        ${r.link ? '<span class="more">Learn more →</span>' : ""}
      </div>
    </${tag}>`;
  }).join("");

  /* Schedule */
  const KIND_LABELS = { talk: "Talk", fellows: "Fellows", session: "Plenary", break: "Break" };
  const scheduleList = document.getElementById("schedule-list");
  if (scheduleList && typeof SCHEDULE !== "undefined") scheduleList.innerHTML = SCHEDULE.map(
    (x) => `<li class="slot slot-${esc(x.kind)}">
      <p class="slot-time"><span class="slot-start">${esc(x.start)}</span><span class="slot-end">\u2013 ${esc(x.end)}</span></p>
      <div class="slot-main">
        <p class="slot-title">${esc(x.title)}</p>
        ${x.detail ? `<p class="slot-detail">${esc(x.detail)}</p>` : ""}
      </div>
      <span class="slot-kind">${esc(x.label || KIND_LABELS[x.kind] || "")}</span>
    </li>`
  ).join("");

  /* Speakers */
  const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const photo = (s, cls) =>
    s.photo
      ? `<img class="${cls}" src="${esc(s.photo)}" alt="${esc(s.name)}">`
      : `<div class="${cls} initials" aria-hidden="true">${esc(initials(s.name))}</div>`;

  const grid = document.getElementById("speaker-grid");
  grid.innerHTML = SPEAKERS.map(
    (s, i) => `<button class="speaker" data-i="${i}">
      ${photo(s, "speaker-photo")}
      <span class="speaker-name">${esc(s.name)}</span>
      <span class="speaker-org">${esc(s.title)} at ${esc(s.organisation)}</span>
    </button>`
  ).join("");

  const LINK_LABELS = { website: "Website", linkedin: "LinkedIn", github: "GitHub", x: "X", scholar: "Google Scholar" };
  const modal = document.getElementById("speaker-modal");
  const body = document.getElementById("modal-body");
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".speaker");
    if (!btn) return;
    const s = SPEAKERS[+btn.dataset.i];
    const links = Object.entries(s.links || {}).filter(([, v]) => v);
    body.innerHTML = `
      <div class="modal-top">
        ${photo(s, "modal-photo")}
        <div>
          <h3 id="modal-name">${esc(s.name)}</h3>
          <p class="modal-role">${esc(s.title)} at ${esc(s.organisation)}</p>
          ${links.length ? `<p class="modal-links">${links.map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener">${LINK_LABELS[k] || esc(k)}</a>`).join("")}</p>` : ""}
        </div>
      </div>
      <div class="modal-about">
        <p class="label">About</p>
        <p>${esc(s.bio)}</p>
      </div>
      <div class="modal-talk">
        <p class="label">Talk</p>
        <h4>${esc(s.talkTitle)}</h4>
        <p>${esc(s.talkDescription)}</p>
      </div>`;
    modal.showModal();
  });
  modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
})();
