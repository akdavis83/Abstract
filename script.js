const stage = document.querySelector('svg');

for (let row = 0; row < 6; row++) {
  for (let i = 0; i < 76; i++) {
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    stage.appendChild(c);
    gsap.set(c, {
      x: row%2 ? -5+(i%2? i+0.6:i) : 76-((i%2? i+0.6:i)+15),
      y: 5 + row*10,
      attr:{
        class: row%2 ? 'even':'odd',
        r: 5,
        fill: i%2 ? '#fff' : '#000'
      }
    })
  }
}

const tl = gsap.timeline({
  defaults:{
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'power2.inOut'
    // ease:'elastic.inOut(1.5)'
  }
})
.to('.even', { xPercent:(i)=> gsap.utils.wrap(0,76,i)*0.6 })
.to('.odd', { xPercent:(i)=> -gsap.utils.wrap(0,76,i)*0.6 }, 0)

// click to toggle play/pause
window.onpointerup = () => gsap.to(tl, {
  duration: 1, 
  ease: 'sine.inOut',
  timeScale: tl.isActive() ? 0 : 1
})