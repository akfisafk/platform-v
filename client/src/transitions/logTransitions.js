export const logTransition = {
    slideUp: {
        opacity: 1,
        y: 0
    },
    slideDown: {
        opacity: 0,
        y: "5vh"
    },
    slideTransition: {
        type: "tween",
        duration: .6,
        ease: "easeInOut"
    }
}