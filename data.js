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

/* Schedule.
   kind: "talk" | "fellows" | "session" | "break" (controls styling).
   detail: optional second line under the title.
   speaker: shown on the right. If it matches a name in SPEAKERS above, their photo
   and organisation are filled in automatically. Leave out for no speaker. */
const SCHEDULE = [
  { start: "9:30am", end: "10:00am", title: "Registration", kind: "break" },
  { start: "10:00am", end: "10:15am", title: "Welcome talk by SASH", detail: "About our fellowship and the research symposium", kind: "session" },
  { start: "10:15am", end: "10:30am", title: "Singapore\u2019s role in the global AI safety ecosystem", kind: "session", speaker: "Speaker TBC" },
  { start: "10:30am", end: "11:00am", title: "First Talk", kind: "talk", speaker: "Speaker 1" },
  { start: "11:00am", end: "11:30am", title: "Second Talk", kind: "talk", speaker: "Speaker 2" },
  { start: "11:30am", end: "12:00pm", title: "Third Talk", kind: "talk", speaker: "Speaker 3" },
  { start: "12:00pm", end: "1:00pm", title: "Lunch + Poster session", kind: "break" },
  { start: "1:00pm", end: "2:00pm", title: "Fellows\u2019 Research Presentations", kind: "fellows" },
  { start: "2:00pm", end: "3:00pm", title: "Fellows\u2019 Research Presentations", kind: "fellows" },
  { start: "3:00pm", end: "4:00pm", title: "Coffee break + Poster session", kind: "break" },
  { start: "4:00pm", end: "4:30pm", title: "Fourth Talk", kind: "talk", speaker: "Speaker 4" },
  { start: "4:30pm", end: "5:00pm", title: "Fifth Talk", kind: "talk", speaker: "Speaker 5" },
  { start: "5:00pm", end: "5:30pm", title: "Sixth Talk", kind: "talk", speaker: "Speaker 6" },
  { start: "5:30pm", end: "6:00pm", title: "Closing remarks and photo taking", kind: "session" },
];
