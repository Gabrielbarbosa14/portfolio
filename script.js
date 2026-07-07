const header = document.querySelector(`header`)
const rosto = document.querySelector(`#rosto`)
const ola = document.querySelector(`#ola`)

header.addEventListener(`mousemove`, (rastreio) => {
    gsap.to(rosto, {
        x: rastreio.x/26,
        y: rastreio.y/14
    })
})

gsap.from(`header nav`,{
    opacity: 0,
    y: -100,
    duration: 0.7
})

gsap.from(`#ola`, {
    opacity: 1,
    fontSize: `7vw`,
    duration: 0.7
})

gsap.from(`#meio p`, {
    x: -280,
    opacity: 0,
    duration: 0.7
})

gsap.from(`#div-contato1`, {
    x: 280,
    opacity: 0,
    duration: 0.7
})