var tl = gsap.timeline();

tl.from('.logo img, ul.headerNav li, .btn-wrapper a', {
    y: -90,
    // delay:0.25,
    stagger: 0.05,
    duration: 1,
    opacity: 0
})

tl.from('.img_wrapper img', {
    opacity: 0,
    scale: 0.75,
    stagger: 0.10
})

tl.from('h1.bannerHeding', {
    y: 150,
    opacity: 0,
    duration: 2
})