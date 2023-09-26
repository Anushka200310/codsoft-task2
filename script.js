const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
navList.classList.toggle('active');
});

/* gsap animation */

gsap.registerPlugin(ScrollTrigger);

gsap.from(".about h2",{
    y: 100,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: "h2",
        scroller: "body",
        start: "top center",
        end: "center center"
    }
})

gsap.from(".content", {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".content",
        scroller: "body",
        start: "top center",
        end: "center center"
    }
}) 

gsap.from(".skills h2", {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".skills", 
        start: "top center", 
        end: "center center",
        scroller: "body"
    }
});

gsap.from(".skill-content img", {
    opacity: 0,
    y: 200,
    scrollTrigger: {
        trigger: ".skills", 
        start: "top center", 
        end: "center center",
        scroller: "body"
    }
});

gsap.from(".project-heading", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: ".projects", 
        start: "top center", 
        end: "center center",
        scroller: "body"
    }
});

gsap.from(".projects-container .show-project", {
    opacity: 0,
    y: 100,
    stagger: 0.6,
    scrollTrigger: {
        trigger: ".projects-container", 
        start: "top center", 
        end: "center center",
        scroller: "body"
    }
});





