/* ------------------------------------------------------------------
   Site content — edit this file to update the page.
   Anything marked TODO is a placeholder waiting for real details.
------------------------------------------------------------------- */

const SITE = {
  lumaUrl: "https://luma.com/tivp43yk",
  contactEmail: "sash.aisafety.symposium@gmail.com",
  website: "https://www.aisafety.sg/",
  linkedin: "https://www.linkedin.com/company/singapore-ai-safety-hub/",
  x: "https://x.com/aisafetysg",
};

/* Fellows' research — 18 cards (2 columns × 9 rows).
   link: optional URL to a poster / GitHub / write-up. Leave "" for no link. */
const RESEARCH = Array.from({ length: 18 }, (_, i) => ({
  title: `Research project title ${i + 1}`,
  fellow: "Fellow name",
  mentor: "Mentor name",
  summary:
    "A two to three sentence plain-language summary of the project goes here. It should say what question the project asks and what the fellow found or built.",
  tags: ["Tag one", "Tag two"],
  link: "",
}));

/* Speakers.
   photo: image URL or path (e.g. "images/jane.jpg"). Leave "" to show initials.
   links: any of website / linkedin / github / x / scholar.
   role: optional; replaces the "title at organisation" line under the name.
   shortOrg: optional short organisation name used in the schedule. */
const SPEAKERS = [
  { name: "Jess Bergs", title: "Engineering Lead", organisation: "UK AI Security Institute", shortOrg: "UK AI Security Institute", photo: "images/speakers/jess-bergs.jpg" },
  { name: "Zhengyuan Liu", title: "Team Lead", organisation: "A*STAR Centre for Frontier AI Research", shortOrg: "A*STAR", photo: "images/speakers/zhengyuan-liu.jpg" },
  { name: "Lukas Struppek", title: "Research Scientist", organisation: "FAR.AI", role: "Research Scientist at FAR.AI and mentor of SASH Fellowship", shortOrg: "FAR.AI", photo: "images/speakers/lukas-struppek.jpg" },
  { name: "Shaun Khoo", title: "Staff Data Scientist", organisation: "GovTech Singapore", shortOrg: "GovTech", photo: "images/speakers/shaun-khoo.jpg" },
  { name: "Tan Zhi Xuan", title: "Assistant Professor", organisation: "NUS Department of Computer Science", shortOrg: "NUS", photo: "images/speakers/tan-zhi-xuan.jpg" },
].map((s) => ({
  // TODO: replace placeholder bio and talk details for each speaker
  links: {},
  bio: "Speaker bio coming soon.",
  talkTitle: "Talk title to be announced",
  talkDescription: "Talk details will be shared closer to the event.",
  ...s,
}));

/* Schedule.
   kind: "talk" | "fellows" | "session" | "break" (controls styling).
   tag: optional small label above the title (e.g. "Invited talk").
   detail: optional second line under the title.
   speakers: list of names shown on the right. If it matches a name in SPEAKERS above, their photo
   and organisation are filled in automatically. Leave out for no speaker. */
const SCHEDULE = [
  { start: "12:00pm", end: "1:00pm", title: "AI Safety Research Showcase & Networking Lunch", kind: "break" },
  { start: "1:00pm", end: "1:15pm", title: "Welcome Talk", kind: "session" },
  { start: "1:15pm", end: "2:15pm", title: "Research Talks by Fellows", detail: "4 \u00d7 15-minute talks", kind: "fellows" },
  { start: "2:15pm", end: "2:45pm", tag: "Invited talk", title: "Talk by Lukas Struppek", kind: "talk", speakers: ["Lukas Struppek"] },
  { start: "2:45pm", end: "3:15pm", tag: "Invited talk", title: "Talk by Jess Bergs", kind: "talk", speakers: ["Jess Bergs"] },
  { start: "3:15pm", end: "4:00pm", title: "AI Safety Research Showcase & Networking Coffee Break", kind: "break" },
  { start: "4:00pm", end: "5:00pm", tag: "Presentations + panel", title: "AI Safety Research in Singapore", detail: "Presentations from three Singapore research groups, followed by a 30-minute panel discussion", kind: "talk", speakers: ["Shaun Khoo", "Tan Zhi Xuan", "Zhengyuan Liu"] },
  { start: "5:00pm", end: "5:10pm", title: "Closing and Photo Taking", kind: "session" },
  { start: "5:10pm", end: "6:00pm", title: "Networking Reception", kind: "break" },
];
