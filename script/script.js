const smallBall = document.querySelector("#small-ball-div");
const body = document.querySelector("body");

body.addEventListener("mousemove", (move) => {
  gsap.to(smallBall, {
    x: move.x - 30,
    y: move.y - 30,
    ease: "back.out(1.5)",
  });
});

const smallBalls = document.querySelectorAll(".balls-of-loading-div");
const smallBallsArray = Array.from(smallBalls);

smallBallsArray.forEach((ball, index) => {
  gsap.to(ball, {
    y: -30,
    backgroundColor: "white",
    duration: 0.63,
    ease: "sine.inOut",
    repeat: 5,
    yoyo: true,
    delay: index * 0.19,
    onComplete: () => {
      gsap.to(ball, {
        scale: 1.2,
        duration: 0.5,
        ease: "back.out(1.4)",
        boxShadow: "0px 0px 30px white",
        backgroundColor: "white"
      });

      const loader = document.querySelector("#load-screen-div");
      gsap.to(loader, {
        y: -1000,
        ease: "circ.out",
        duration: 1.5,
        delay: 0.9,
      });
    },
  });
});

window.addEventListener("load", () => {});
