import express from "express";
import heroesRouter from "./routes/heroes.js";
import hobbitsRouter from "./routes/hobbits.js";
import path from "path";

const app = express();
const port = 3002;

// Get the current directory path of the module
const __dirname = path.resolve();

// (OPTIONAL) 
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/home.ejs", {
    myTitle: "Welcome to Lord of the Ring!",
    subTitle: "THE RING POWER"
  });
});

app.use("/heroes", heroesRouter);
app.use("/hobbits", hobbitsRouter);

app.listen(port, () => {
  console.log(`Server is on and listening to ${port}`);
});
