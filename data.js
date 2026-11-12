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
   links: any of website / linkedin / github / x / scholar. */
const SPEAKERS = [
  { name: "Jess Bergs", title: "Engineering Lead", organisation: "UK AI Security Institute", photo: "images/speakers/jess-bergs.jpg" },
  { name: "Zhengyuan Liu", title: "Team Lead", organisation: "A*STAR Centre for Frontier AI Research", photo: "images/speakers/zhengyuan-liu.jpg" },
  { name: "Lukas Struppek", title: "Research Scientist", organisation: "FAR.AI", photo: "images/speakers/lukas-struppek.jpg" },
  { name: "Shaun Khoo", title: "Staff Data Scientist", organisation: "GovTech Singapore", photo: "images/speakers/shaun-khoo.jpg" },
  { name: "Tan Zhi Xuan", title: "Assistant Professor", organisation: "NUS Department of Computer Science", photo: "images/speakers/tan-zhi-xuan.jpg" },
].map((s) => ({
  // TODO: replace placeholder bio and talk details for each speaker
  links: {},
  bio: "Speaker bio coming soon.",
  talkTitle: "Talk title to be announced",
  talkDescription: "Talk details will be shared closer to the event.",
  ...s,
}));
