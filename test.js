let section = document.querySelector('section')
let title = document.querySelector('.title .animate')

gsap.from(title, {
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "15% top",
    scrub: true
  },
  opacity: 0,
  xPercent: -100,
  ease: 'power1'
})

gsap.to(title, {
  scrollTrigger: {
    trigger: section,
    start: "40% top",
    end: "100% bottom",
    scrub: true
  },
  opacity: 0,
  xPercent: 100,
  immediateRender: false,
  ease: 'power1.in'
})