import { useEffect, useReducer } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../transitions/pageTransition';
import { Log } from '../components/log/Log';

const reducer = (items: any, action: any) => {
    switch (action.type) {
        case 'add-upcoming':
            return [addUpcoming(action.payload)]
        default:
            return items;
    }
}

function addUpcoming(payload: any) {
    return payload.upcoming;
}

export const Upcoming = () => {
    const [upcoming, dispatchUpcoming] = useReducer(reducer, []);

    useEffect(() => {
        async function getUpcoming() {
            const response: any = await fetch('/apis/upcoming', {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
                .then((result) => result.json());

            // Handle dispatch
            dispatchUpcoming(
                { type: 'add-upcoming', payload: { upcoming: await response } }
            );
        }
        getUpcoming();
    }, []);

    return (
        <>
            <motion.div className="upcoming"
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition.transitionDelay}
                variants={pageTransition}>
                <div className="container">
                    <main className="content">
                        <motion.h1>
                            {/* initial={textTransition.out}
                            animate={textTransition.in}
                            exit={textTransition.out}
                            transition={textTransition.transition} */}
                            Upcoming</motion.h1>
                        {upcoming[0] && (
                            <div className="logs">
                                {upcoming[0].map((log: any) => {
                                    return <Log key={Math.random()} log={log} />
                                })}
                            </div>
                        )}
                    </main>
                </div>
            </motion.div>
            <motion.div className="transition"
                initial={pageTransition.boxOut}
                animate={pageTransition.boxIn}
                transition={pageTransition.boxTransition}>
            </motion.div>
            <motion.div className="transition2"
                initial={pageTransition.boxOut}
                animate={pageTransition.boxIn}
                transition={pageTransition.boxTransition2}>
            </motion.div>
        </>
    )
}
