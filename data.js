/* ------------------------------------------------------------------
   Site content — edit this file to update the page.
   Anything marked TODO is a placeholder waiting for real details.
------------------------------------------------------------------- */

const SITE = {
  // TODO: replace with the real Luma event URL
  lumaUrl: "https://lu.ma/",
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
const SPEAKERS = Array.from({ length: 6 }, (_, i) => ({
  name: `Speaker Name ${i + 1}`,
  title: "Title",
  organisation: "Organisation",
  photo: "",
  links: { website: "", linkedin: "", github: "" },
  bio: "Short speaker bio goes here. Two or three sentences on their background, current work and research interests.",
  talkTitle: "Talk title",
  talkDescription: "A short description of the talk goes here.",
}));
