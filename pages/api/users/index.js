// users

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "mohammad",
      age: 22,
      description:
        "hello i am mohammad mohseni and front-end engineer and back-end developer",
      href: "http://localhost:3000/users/mohammad",
    },
    {
      id: 2,
      name: "ali",
      age: 20,
      description:
        "hello i am ali shishegar and best footbalist and best footbalist and best footbalist",
      href: "http://localhost:3000/users/ali",
    },
    {
      id: 3,
      name: "amir",
      age: 17,
      description:
        "hello i am alirhoosein khalaf and best footbalist and best footbalist and best footbalist",
      href: "http://localhost:3000/users/amir",
    },
    {
      id: 4,
      name: "nikzad",
      age: 19,
      description:
        "hello i am Nikzad chegeni and i am mene maghzom gie & live in ghal nafahm var falake basij",
      href: "http://localhost:3000/users/nikzad",
    },
  ]);
}
