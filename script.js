var timeline = gsap.timeline();

timeline.from(".nav-continer", {
  y: -90,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.8,
});

timeline.from(".hading ",{
  x: -90,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.8,
})

timeline.from(".left ",{
    x: 120,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.8,
  })

  timeline.from(".rightt ",{
    x: -90,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.8,
  })

  timeline.from(".leftt ",{
    x: 120,
    opacity: 0,
    duration: 0.8,
    delay: 0.1,
    stagger: 0.8,
  })
