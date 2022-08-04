gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".section");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: () => "+=3000",
  },
});

const tl = gsap.timeline();

document.querySelectorAll(".three ul li img").forEach(img => {
  tl.from(img, {
    scrollTrigger: {
      trigger: img,
      containerAnimation: scrollTween,
      start: "left right",
      end: () =>
        "+=" +
        document.querySelector(".three ul li:nth-child(1) img").offsetWidth,
      toggleActions: "play none none reverse",
      scrub: 1,
    },
    immediateRender: false,
    x: 144,
    y: 100 * (Math.random() - 0.5),
    rotation: 40 * (Math.random() - 0.5),
    duration: 1,
    ease: "power2.out"
  });

  tl.fromTo(img, {x: 0, y: 0, rotation: 0}, {
    scrollTrigger: {
      trigger: img,
      containerAnimation: scrollTween,
      end: "left left",
      start: () =>
        "+=" + "-" +
        document.querySelector(".three ul li:nth-child(1) img").offsetWidth,
      toggleActions: "play none none reverse",
      scrub: 1,
    },
    immediateRender: false,
    x: -144,
    y: 100 * (Math.random() - 0.5),
    rotation: 40 * (Math.random() - 0.5),
    duration: 1,
    ease: "power2.out"
  });
});