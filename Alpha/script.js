const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function cursor(){
    window.addEventListener("mousemove", function (dets) {
    document.querySelector('#cursor').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
})
}
cursor();

function firstpageAnimate() {
    var tl = gsap.timeline();
    
    tl.from("#nav",
    {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",
    {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        stagger: .2
    })
    .from("#herofooter",
    {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
        
    })
}
 firstpageAnimate();