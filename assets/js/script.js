function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



/* GSAP Anumation */

gsap.from("#banner__animation", {x: '-100%', duration: 4});
gsap.fromTo("#bn_des", {opacity: 0}, {opacity: 1, duration: 5});


gsap.registerPlugin(ScrollTrigger);

var tesla = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel",
      start:"top center",
      toggleActions:'restart none restart none'
    } ,
});

tesla.from("#how_work", {
  x: "-100%",
  duration:6
});



// gsap.from("#how_work", {
//   scrollTrigger: {
//           trigger: "#how_work",
//           start:"top center",
//           toggleActions:'restart none restart none'
//         } ,

//   x: "-100%",
//   duration:4
// });


var tl = gsap.timeline({repeat: Infinity, duration:1});

tl.to("#how01", {x: 20 });
tl.to("#how01", {y: 50});
tl.to("#how01", {opacity: 0});

tl.to("#how02", {x: 20}, '<.5');
tl.to("#how02", {y: 50}, '<.5');
tl.to("#how02", {opacity: 0}, '<.5');

tl.to("#how03", {x: 20}, '<.5');
tl.to("#how03", {y: 50}, '<.5');
tl.to("#how03", {opacity: 0}, '<.5');


gsap.from("#about__des", {
  scrollTrigger: {
    trigger: "#about__des",
    start:"top center",
    toggleActions:'restart none restart none'
  } ,
  x: "80%",
  duration:2
});

/* GSAP Anumation End */
