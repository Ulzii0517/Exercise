import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const PORT = 3333;

let users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Paul", age: 28 },
  { id: 3, name: "George", age: 27 },
  { id: 4, name: "Ringo", age: 30 },
];

app.get("/users", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;
  const number = Math.random() * 100;
  const result = Math.floor(number);

  try {
    if (!name || !age) {
      return response.send("Ner esvel nas dutuu bn.");
    } else {
      if (typeof name !== "string") {
        return response.send("Ner temdeg bish bn.");
      }
      if (typeof age !== "number") {
        return response.send("Nas too bish bn.");
      }
      const newUser = {
        id: result,
        name: name,
        age: age,
      };

      users.push(newUser);
      response.send(users);
    }
  } catch (error) {
    throw new Error(error);
  }
});

app.put("/users", (request, response) => {
  const { id, updatedName, updatedAge } = request.body;
  if (!id) {
    return response.send("Id not found");
  }
  if (!updatedName && !updatedAge) {
    return response.send("Name and age are both not found");
  }

  users.find((user) => {
    if (user.id == id) {
      if (updatedName) {
        user.name = updatedName;
      }
      if (updatedAge) {
        user.age = updatedAge;
      }
      return user;
    }
  });
//   users.find((user) => {
//     if (user.id == id) {
//         user.name = updatedName ? updatedName : user.name;
//         user.age = updatedAge ? updatedAge : user.age;
//         return user;
//     }
//   })
});

app.delete("/users", (request, response) => {
  const { id } = request.body;

  const filteredUsers = users.filter((user) => {
    if (user.id !== id) {
      return user;
    }
  });

  if (filteredUsers.length == users.length) {
    return response.send("User is not exist");
  }

  users = filteredUsers;
  response.send(users);
});

app.listen(PORT, () => {
  console.log("server is working");
});

// import http from "http";
// const server = http.createServer((request, response) => {
//   response.end("Hello world");
// });

// server.listen(3333);
