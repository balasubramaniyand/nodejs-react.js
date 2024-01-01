const express = require("express");
const app = express();

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Adjust this response as needed
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

