import express from "express";
const heroesRouter = express.Router();

heroesRouter.get("/", (req, res) => {
  res.render("pages/heroes.ejs", {
    myHero: "THE HERO IS ISILDUR",
    className: "heroes",
    story: heroesStory,
    elf : theElf,
  });
});

let heroesStory = " The Insane story of Lord of The Ring started with ..... "
let theElf = ["Legolas", "His Elfic girlfriend", "Some Random Elf Dude"]; 
export default heroesRouter;
