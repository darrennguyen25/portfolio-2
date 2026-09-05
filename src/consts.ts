import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Darren Nguyen",
  DESCRIPTION: "Hello!",
  EMAIL: "darrennguyen27@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/darrennguyen25",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/darren-nguyen-181531188/",
  },
];
