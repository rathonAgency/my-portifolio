"use client";
import { Calendar, Globe } from "lucide-react";
import { siteConfig } from "./site";
export function useProjects() {
  return [
    {
      title: "Rathon",
      subtitle: "Agency",
      description: "Web design and development agency",
      fullDescription:
        "A full-service agency specializing in website and software design, development, and hosting.",
      image: "/projects/rathon.png",
      links: {
        demo: "https://rathon.agency",
      },
      icon: Calendar,
    },
    {
      title: "KuluChat",
      subtitle: "Ai",
      description: "Finding restaurants made easy",
      fullDescription:
        "An ai platform that help you find and orders on menu from best best restaurants around you.",
      image: "/projects/kuluchat.png",
      links: {
        demo: "https://kuluchat.com",
      },
      icon: Calendar,
    },
    {
      title: "This portfolio",
      subtitle: "founder.rathon.agency",
      description:
        "Personal site built with Next.js and Tailwind: projects, blog, stack, and photos.",
      fullDescription:
        "My personal site runs on Next.js and Tailwind. I use it for project write-ups, blog posts, and my photography. Source is on GitHub.",
      image: "/projects/cover.webp",
      links: {
        github: `${siteConfig.links.github}/lecon.com`,
      },
      icon: Globe,
    },
  ];
}
