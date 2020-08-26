import { FOLDER, FILE } from "../constants/";
const structure = [
  {
    type: FOLDER,
    title: "Clothes",
    root: true,
    childs: [
      {
        type: FILE,
        title: "Denim",
      },
      {
        type: FILE,
        title: "Linen",
      },
    ],
  },
  {
    type: FOLDER,
    title: "Courses",
    root: true,
    childs: [
      {
        type: FOLDER,
        title: "Engineering",
        childs: [
          {
            type: FILE,
            title: "Quantum Computing",
          },
          {
            type: FILE,
            title: "Virtual Reality",
          },
        ],
      },
      {
        type: FILE,
        title: "Essay Writing",
      },
    ],
  },
  {
    type: FOLDER,
    title: "Blog",
    root: true,
    childs: [
      {
        type: FOLDER,
        title: "Engineering",
        childs: [
          {
            type: FOLDER,
            title: "Computer Science",
            childs: [
              {
                type: FILE,
                title: "Quantum Computing",
              },
              {
                type: FILE,
                title: "Virtual Reality",
              },
            ],
          },
          {
            type: FOLDER,
            title: "Mechanical Engineering",
            childs: [
              {
                type: FOLDER,
                title: "Robotic Science",
                childs: [
                  {
                    type: FILE,
                    title: "Quantum Computing",
                  },
                  {
                    type: FILE,
                    title: "Laws of Motion",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: FOLDER,
        title: "Art & Hobbies",
        childs: [
          {
            type: FILE,
            title: "Wall Painting",
          },
          {
            type: FILE,
            title: "Drawing",
          },
        ],
      },
    ],
  },
];

export default structure;
