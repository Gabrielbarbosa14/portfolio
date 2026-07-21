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

gsap.to(".left-text",  {
  x: 0,
  scrollTrigger:{
    trigger: ".right-text",
    start: "top 68%",
    end: "end 28%",
    scrub: .4
  }
})

gsap.to(".right-text", {
  x: 0,
  scrollTrigger:{
    trigger: ".right-text",
    start: "top 68%",
    end: "end 28%",
    scrub: .4
  }
})

// O layout usa tamanhos fluidos (clamp/vw), então a altura do header muda
// conforme a largura da tela. Isso faz o ScrollTrigger calcular start/end
// errado se ele "nascer" com um valor desatualizado (ex: antes das fontes
// carregarem, ou em telas muito largas e curtas, onde o texto já nasce
// dentro da janela 68%-28%). Recalculamos nesses momentos:

// 1. Depois que a página e as fontes web terminarem de carregar
window.addEventListener("load", () => ScrollTrigger.refresh());
if (document.fonts) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}

// 2. Ao redimensionar a janela (com debounce pra não recalcular a cada pixel)
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 200);
});