import React, { useState } from "react";
import { Card } from "@/components/ui/card";

const coreValues = [
  {
    id: 1,
    title: "Drive to Inspire",
    logo: "assets/values/inspire.png",
    description:
      "We strive to inspire not just our clients, but the entire tech community. Through thought leadership, open-source contributions, and participation in tech conferences, we aim to push the boundaries of what's possible in software development",
  },
  {
    id: 2,
    title: "Customer Focus",
    logo: "assets/values/focus.png",
    description:
      "We don't just build software; we craft solutions that address specific business challenges. Our agile development process ensures constant communication and feedback loops with clients, allowing us to adapt quickly to changing requirements",
  },
  {
    id: 3,
    title: "Integrity",
    logo: "assets/values/integrity.png",
    description:
      "We adhere to the highest ethical standards in every aspect of our work, from code quality to data security. Our developers follow strict coding practices, ensuring clean, maintainable, and secure code.",
  },
  {
    id: 4,
    title: "Teamwork",
    logo: "assets/values/teamwork.png",
    description:
      "We believe that the best software is created through collaboration. Our cross-functional teams bring together diverse skills and perspectives, from front-end developers to DevOps specialists, ensuring a holistic approach to software development.",
  },
  {
    id: 5,
    title: "Passion",
    logo: "assets/values/passion.png",
    description:
      "We approach each project with enthusiasm, leveraging cutting-edge technologies and methodologies to create innovative solutions. Our team is committed to continuous learning, staying ahead of industry trends to deliver state-of-the-art software. ",
  },
  {
    id: 6,
    title: "Transparency",
    logo: "assets/values/accountability.png",
    description:
      "We maintain open lines of communication throughout the software development lifecycle, providing clients with regular updates and insights into our processes. Our project management tools allow stakeholders to track progress in real-time.",
  },
];

export { coreValues };
