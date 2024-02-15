const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
gsap.from(".onelink",{
    stagger:.5,
    delay:1,
    y:"10px",
    duration:.5,
    expo:Expo.easeInOut,
    opacity:0
});
  gsap.from(".anim2",{
    opacity:0,
    y:50,
    stagger:.2,
    ease:Expo.easeInOut,
    duration:2,

  });
  Shery.imageEffect(".imgs", {
    style: 3, //Select Style
    config:{"uFrequencyX":{"value":11.45,"range":[0,100]},"uFrequencyY":{"value":5.34,"range":[0,100]},"uFrequencyZ":{"value":35.11,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.79},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7501372821836668},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });
  Shery.imageEffect(".img-eff img", {
    style:5, //Select Style
    // debug:true,
    config:{"a":{"value":1.83,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6750756080234512},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });
  
  Shery.textAnimate(".headings h1" , {
    
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".imgs",{
    z:-3,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut
  })
  Shery.imageEffect(".bimg",{
    style:5,
    // debug:true,
    gooey:true,
    config:{"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0722927750128712},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":37}},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.44,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},
  })

  document.querySelector(".future-text button").addEventListener("mouseover",function(){
     gsap.to("#future video",{
      opacity:1,
      duration:1,
      ease:Expo.easeInOut,
     })
    })
    document.querySelector(".future-text button").addEventListener("mouseleave",function(){
      gsap.to("#future video",{
       opacity:0,
       duration:1,
       ease:Expo.easeInOut,
      })
      
  })
  