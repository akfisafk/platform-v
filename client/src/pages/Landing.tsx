import { motion } from 'framer-motion';
import { pageTransition } from '../transitions/pageTransition';
import { textTransition } from '../transitions/textTransitions';
import { Button } from '../components/basics/Button';

export const Landing = () => {

    return (
        <>
            <motion.div className="landing"
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition.transition}
                variants={pageTransition}>
                <div className="container">
                    <main className="content">
                        <motion.h1
                            initial={textTransition.fadeOut}
                            animate={textTransition.fadeIn}
                            exit={textTransition.fadeOut}
                            transition={textTransition.fadeTransition}>
                            SpaceX Logs</motion.h1>
                        <motion.p
                            initial={textTransition.slideDown}
                            animate={textTransition.slideUp}
                            exit={textTransition.slideDown}
                            transition={textTransition.slideTransition}>
                            Tracking upcoming and historical SpaceX launches</motion.p>
                        <Button text="// Access logs" link="/upcoming" />
                    </main>
                </div>
            </motion.div>
        </>
    )
}
