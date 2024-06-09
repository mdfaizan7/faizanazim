import type { ProjectCardProps } from "../ProjectCard";

export const PROJECT_DATA_LIST: ProjectCardProps[] = [
  {
    name: "Sorting Visualizer",
    description:
      "A sorting visualizer. You can run this app to see how different sorting techniques work. Implemented Merge Sort, Heap Sort, Quick Sort, Insertion Sort, Bubble Sort and Selection Sort.",
    link: "https://github.com/mdfaizan7/sorting-visualizer",
    img: "/sorting_visualizer.png"
  },
  {
    name: "ls-tree",
    description:
      "A CLI command which will output the directory hierarchy in a tree structure.",
    link: "https://github.com/mdfaizan7/ls-tree",
    img: "/ls_tree.png"
  },
  {
    name: "Chary",
    description: `Chary is an anti-predator chat app which detects predators and filter toxic messages. This was my team's submission for the Software India Hackathon which had the problm statement of: Detection of child predators/cyber harassers on social media.`,
    link: "https://github.com/mdfaizan7/anti-predator-chat-app",
    img: "/chary.png"
  },
  {
    name: "GoPong",
    description: "The original pong game made with Go.",
    link: "https://github.com/mdfaizan7/go-pong",
    img: "/go_pong.png"
  }
];
