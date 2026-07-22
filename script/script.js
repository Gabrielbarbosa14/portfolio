const navToggle = document.querySelector("#nav-toggle");
const navList = document.querySelector("#nav-list");

navToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("active");
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// fecha o menu ao clicar em um link (evita ficar aberto ao navegar)
navList.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    navToggle.setAttribute("aria-expanded", false);
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

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
    backgroundColor: "#F4F4F6",
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
        boxShadow: "0px 0px 30px #f5f5f5e2",
        backgroundColor: "white"
      });

      const loader = document.querySelector("#load-screen-div");
      gsap.to(loader, {
        y: -1000,
        display: "none",
        duration: 1.5,
        delay: 1
      });
    },
  });
});

gsap.fromTo(".text-left1", {
  opacity: 0,
  x: -900,
},{
  opacity: 1,
  x: 0,
  duration: .8,
  scrollTrigger:{
    trigger: ".text-left1",
    // markers: true,
    start: "top 88%",
    end: "top 55%",
    scrub: 2
  }
})

gsap.fromTo(".text-left2", {
  opacity: 0,
  x: -900,
},{
  opacity: 1,
  x: 0,
  duration: .8,
  scrollTrigger:{
    trigger: ".text-left2",
    // markers: true,
    start: "top 92%",
    end: "top 59%",
    scrub: 2
  }
})

gsap.fromTo(".text-right1", {
  opacity: 0,
  x: 900,
},{
  opacity: 1,
  x: 0,
  duration: .8,
  scrollTrigger:{
    trigger: ".text-right1",
    // markers: true,
    start: "top 90%",
    end: "bottom 64%",
    scrub: 2
  }
})

gsap.fromTo(".text-right2", {
  opacity: 0,
  x: 900,
},{
  opacity: 1,
  x: 0,
  duration: .8,
  scrollTrigger:{
    trigger: ".text-right2",
    // markers: true,
    start: "top 84%",
    end: "top 51%",
    scrub: 2
  }
})