const smallBall = document.querySelector("#small-ball-div");
const body = document.querySelector("body");

body.addEventListener(`mousemove`, (move) => {
  console.log(move);
  gsap.to(smallBall, {
    x: move.x-30,
    y: move.y-30,
    ease: "back.out(1.5)"
  });
});
