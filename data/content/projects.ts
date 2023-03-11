import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Image-OpenAI",
    desc: "Build and deploy application generating image via OPENAI and share it with community.",
    img: "/static/projects/images-openai.png",
    link: "",
    github: "https://github.com/Kumarsidd/AI-Image-Generation-using-OpenAI",
    tags: ["React", "MongoDB", "TailwindCSS", "Express", "OpenAI"],
  },
  {
    id: 2,
    title: "React Emoji Search",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/react-emoji-search.png",
    link: "",
    github: "https://github.com/Kumarsidd/Emoji-Search",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 1,
    title: "Fashion Lama",
    desc: "An E-commerce webiste with real time dashboard and querying.",
    img: "/static/projects/lama.png",
    github: "",
    tags: ["MERN", "JWT", "Stripe", "Redux"],
  },
  {
    id: 3,
    title: "Travel Agency",
    desc: "A website to guide users for travelling.",
    img: "/static/projects/travel.png",
    link: "",
    github: "https://github.com/Kumarsidd/Travel-Agency",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    id: 4,
    title: "Web Scrapper",
    desc: "Generate price alert for a specific product from prominents e-commerce websites!",
    img: "/static/projects/scrapper.png",
    github: "https://github.com/Kumarsidd/Price-Tracker",
    tags: ["Python", "Python-Tkinter"],
  },
  {
    id: 5,
    title: "TextMania",
    desc: "Text-Mania gives you a way to analyze your text quickly and efficiently.",
    img: "/static/projects/textmania.png",
    link: "",
    github: "https://github.com/Kumarsidd/Text-Mania",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    title: "Natural-Language-Processing-using-Python",
    desc: "A simple NLP which performs grammar correction, text classification, text correction using Happy Transformer API .",
    img: "/static/projects/nlp.png",
    link: "",
    github: "https://github.com/Kumarsidd/Natural-Language-Processing-using-Python",
    tags: ["Javascript", "NPM"],
  },
  {
    id: 7,
    title: "Custom E-commerce",
    desc: "Creating customizable clothes using plain HTML, CSS, JS",
    img: "/static/projects/male.png",
    link: "",
    github: "https://github.com/Kumarsidd/Custom-E-commerce-Website",
    tags: ["HTML", "CSS", "Javascript", "fabricJS", "dom-to-image"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects