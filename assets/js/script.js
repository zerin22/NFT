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

// var tl = gsap.timeline({repeat: Infinity, repeatDelay: 0});
var tl = gsap.timeline({repeat: Infinity, duration:1});

tl.fromTo("#how_work", { opacity: 0, scale: 0, rotation:720 }, {  opacity: 1, scale: 1, rotation:0 });


tl.to("#how01", {x: 20 });
tl.to("#how01", {y: 50});
tl.to("#how01", {opacity: 0});

tl.to("#how02", {x: 20}, '<.5');
tl.to("#how02", {y: 50}, '<.5');
tl.to("#how02", {opacity: 0}, '<.5');

tl.to("#how03", {x: 20}, '<.5');
tl.to("#how03", {y: 50}, '<.5');
tl.to("#how03", {opacity: 0}, '<.5');




// gsap.to(#, { duration: 2.5, ease: "bounce.out", y: -500 });

/* GSAP Anumation End */
