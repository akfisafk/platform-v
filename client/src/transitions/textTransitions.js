export const textTransition = {
    in: {
        opacity: 1,
        scaleY: 1
    },
    out: {
        opacity: 0,
        scaleY: 0
    },
    transition: {
        type: "tween",
        duration: .8,
        ease: "easeInOut"
    },
    fadeIn: {
        opacity: 1
    },
    fadeOut: {
        opacity: 0
    },
    fadeTransition: {
        type: "tween",
        delay: .3,
        duration: 1,
        ease: "easeInOut"
    },
    slideUp: {
        opacity: 1,
        y: 0
    },
    slideDown: {
        opacity: 0,
        y: "1vh"
    },
    slideTransition: {
        type: "tween",
        delay: .5,
        duration: 1,
        ease: "easeInOut"
    }
}