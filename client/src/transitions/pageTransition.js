export const pageTransition = {
    initial: {
        opacity: 0,
        x: "-.6vw",
        scaleX: 1,
        scaleY: 1,
    },
    in: {
        opacity: 1,
        x: 0,
        scaleY: 1,
    },
    out: {
        opacity: .5,
        x: ".6vw",
        y: "1vw",
        scaleX: .7,
        originX: 5,
        scaleY: 1.05,
    },
    transition: {
        type: "tween",
        duration: .4,
        ease: "easeInOut"
    },
    transitionDelay: {
        type: "tween",
        duration: .4,
        delay: .3,
        ease: "easeInOut"
    },
    boxOut: {
        x: "-100vw",
    },
    boxIn: {
        x: "105vw",
        transitionEnd: {
            display: "none"
        }
    },
    boxTransition: {
        type: "tween",
        duration: .7,
        ease: "easeInOut",
    },
    boxTransition2: {
        type: "tween",
        delay: .2,
        duration: .5,
        ease: "easeInOut",
    }
};