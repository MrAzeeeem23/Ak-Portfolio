import gsap from 'gsap';

// defualt means only one value excute
export const animationFedeIn = (element) => {
    gsap.from(element, {
        x: 70,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.easeInOut",
      })

      
}

export const staggeredFadeIn = (element) => {
    gsap.from(element,{
        y: 20,
        opacity: 0,
        duration: 0.4,
        delay: 0.8,
        stagger: 0.2,
        ease: "power1.easeInOut",
      })
}
