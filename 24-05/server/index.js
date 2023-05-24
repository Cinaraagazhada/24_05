const express = require("express");
const app = express();
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
//data
const People = [
  {
    id: 1,
    name: "Baba",
    age: 22,
  },

  {
    id:2,
    name: "Leman",
    age: 21,
  },
  {
    id:3,
    name: "Cavidan",
    age: 20,
  }
];



app.get("/api", (req, res) => {
  res.send("Welcome to Our API!");
});



//get All people
app.get("/api/people", (req, res) => {
  const { name } = req.query;
  if (name === undefined) {
    res.status(200).send({
      data: People,
      message: "data get success!",
    });
  } else {
    res.status(200).send({
      data: People.filter(
        (x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
      ),
      message: "data get success!",
    });
  }
});
//get by ID
app.get("/api/people/:id", (req, res) => {
  const id = req.params.id;
  const people = People.find((x) => x.id === parseInt(id));
  if (!people) {
    res.status(204).send("people not found!");
    // return;
  } else {
    res.status(200).send({
      data: people,
      message: "data get success!",
    });
    // return;
  }
});
//delete by ID
app.delete("/api/people/:id", (req, res) => {
  const id = req.params.id;
  const people = People.find((x) => x.id == id);
  if (people === undefined) {
    res.status(404).send(" not found");
  } else {
    const idx = People.indexOf(people);
    People.splice(idx, 1);
    res.status(203).send({
      data: people,
      message: " deleted successfully",
    });
  }
});
//post
app.post("/api/people",(req, res) => {
  const { name, age } = req.body;
  const newPeople = {
    id: crypto.randomUUID(),
    name: name,
    age: age
  };
  People.push(newPeople);
  res.status(201).send("created");
});
//put
app.put("/api/people/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  const existedPeople = People.find((x) => x.id == id);
  if (existedPeople== undefined) {
    res.status(404).send(" not found!");
  } else {
    if (name) {
        existedPeople.name = name;
    }
    if (age) {
        existedPeople.age = age;
    }
   
    res.status(200).send(`people: ${existedPeople.name}`);
  }
});

PORT  = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});