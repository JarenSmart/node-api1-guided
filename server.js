//this import is pulling from node_modules now
const express = require("express");
const db = require("./database.js");

const server = express();

server.get("/", (req, res) => {
  const users = db.getUsers();
  res.json(users);
});

server.get("/users/:id", (req, res) => {
  // the param variable matches up to the name of our URL param above
  const user = db.getUserById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
});

server.listen(8080, () => {
  console.log("server started on port 8080");
});
