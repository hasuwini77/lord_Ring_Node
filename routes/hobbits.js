import express from "express";

const hobbitsRouter = express.Router();

hobbitsRouter.get("/", (req, res) => {
  res.render("pages/heroes.ejs", {
    myHero: "THE HERO IS FRODON",
    className: "hobbits",
    story: hobbitsStory,
          elf : undefined,
  });
});

let hobbitsStory = "The insane story of the hobbits started a while back with Bilbo, bilbo the hobbit! "
export default hobbitsRouter;
