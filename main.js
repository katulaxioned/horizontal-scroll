const startAnimation = {
  img1: {
    rotation: 40 * (Math.random() - 0.5),
    y: 100 * (Math.random() - 0.5) + "px",
    x: 0.1 * window.innerWidth + "px",
  },
};

const endAnimation = {
  img1: {
    rotation: 40 * (Math.random() - 0.5),
    y: 100 * (Math.random() - 0.5) + "px",
    x: -0.1 * window.innerWidth + "px",
  },
};

console.log(endAnimation.img1);

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

let img1 = document.querySelector(".three ul li:nth-child(1) img");

img1.style.cssText = `transform:translate(144px, ${startAnimation.img1.y}) rotate(${startAnimation.img1.rotation}deg);`;
// img1.style.cssText = `transform:translate(0, 0) rotate(0);`;

gsap.to(img1, {
  scrollTrigger: {
    trigger: img1,
    containerAnimation: scrollTween,
    start: "left right",
    end: () =>
      "+=" +
      document.querySelector(".three ul li:nth-child(1) img").offsetWidth,
    markers: true,
    toggleActions: "play none none reverse",
    scrub: !0,
  },
  // x: 144,
  // y: 100 * (Math.random() - 0.5),
  // rotation: 40 * (Math.random() - 0.5),
  x: 0,
  y: 0,
  rotation: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.to(img1, {
  scrollTrigger: {
    trigger: img1,
    containerAnimation: scrollTween,
    start: "left left",
    end: () =>
      "+=" + "-" +
      document.querySelector(".three ul li:nth-child(1) img").offsetWidth,
    markers: true,
    toggleActions: "play none none reverse",
    scrub: 1,
  },
  x: -144,
  y: 100 * (Math.random() - 0.5),
  rotation: 40 * (Math.random() - 0.5),
  duration: 1,
  ease: "power2.out"
});