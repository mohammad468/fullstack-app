// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "mohammad",
      age: 22,
      description:
        "hello i am mohammad mohseni and front-end engineer and back-end developer",
    },
    {
      id: 2,
      name: "ali",
      age: 20,
      description:
        "hello i am mohammad mohseni and front-end engineer and back-end developer",
    },
    {
      id: 3,
      name: "amir",
      age: 17,
      description:
        "hello i am mohammad mohseni and front-end engineer and back-end developer",
    },
    {
      id: 4,
      name: "nikzad",
      age: 19,
      description:
        "hello i am mohammad mohseni and front-end engineer and back-end developer",
    },
  ]);
}
