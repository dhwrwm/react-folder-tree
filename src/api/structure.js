import { FOLDER, FILE } from "../constants/";
const structure = [
  {
    type: FOLDER,
    title: "Clothes",
    root: true,
    childs: [
      {
        type: FOLDER,
        title: "Shirts",
        childs: [
          {
            type: FOLDER,
            title: "T-shirts",
            childs: [
              {
                type: FOLDER,
                title: "Round neck",
                childs: [
                  {
                    type: FILE,
                    title: "Avengers",
                  },
                  {
                    type: FILE,
                    title: "Jack Daniels",
                  },
                ],
              },
              {
                type: FOLDER,
                title: "Sleeveless",
                childs: [
                  {
                    type: FILE,
                    title: "Pokemon",
                  },
                  {
                    type: FILE,
                    title: "Royal Club",
                  },
                ],
              },
              {
                type: FOLDER,
                title: "Crew neck",
                childs: [
                  {
                    type: FILE,
                    title: "Grey",
                  },
                  {
                    type: FILE,
                    title: "Jack Black",
                  },
                ],
              },
            ],
          },
        ],
      },
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
  {
    type: FOLDER,
    title: "Summer",
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
  {
    type: FOLDER,
    title: "Winter",
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
  {
    type: FOLDER,
    title: "Random Hobbies",
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
  {
    type: FOLDER,
    title: "Bike Trips",
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
  {
    type: FOLDER,
    title: "Mountaineering",
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
  {
    type: FOLDER,
    title: "Football",
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
  {
    type: FOLDER,
    title: "Travelling",
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
