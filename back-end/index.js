import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const PORT = 3333;

const users = [
  { name: "John", age: 30 },
  { name: "Paul", age: 28 },
];

app.get("/users", (request, response) => {
    
    
  response.send(users);
});

app.post("/users", (request, response) => {
    console.log(request.body);
  response.send("Hello post huselt avlaa");
});

app.put("/users", (request, response) => {
  response.send("Hello put huselt avlaa");
});

app.delete("/users", (request, response) => {
  response.send("Hello delete huselt avlaa");
});

app.listen(PORT, () => {
  console.log("server is working");
});

// import http from "http";
// const server = http.createServer((request, response) => {
//   response.end("Hello world");
// });

// server.listen(3333);
