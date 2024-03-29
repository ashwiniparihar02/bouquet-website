gsap.from(".main1,.h1",{
    y:-100,
    duration:1.6,
    delay:0.4,
    opacity:0,
    stagger:0.5
})
gsap.from(".card",{
    y:-70,
    duration:2,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        // markers:true,
        start:"top 65%",
        trigger:".section2",
        scroller:"body",
                 // ( scrolling trigger for checking points , remove comments to check in website)
    },
})