import { useEffect, useReducer } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../transitions/pageTransition';
import { Log } from '../components/log/Log';

const reducer = (items: any, action: any) => {
    switch (action.type) {
        case 'add-archive':
            return [addArchive(action.payload)]
        default:
            return items;
    }
}

function addArchive(payload: any) {
    return payload.archive;
}

export const Archive = () => {
    const [archive, dispatchArchive] = useReducer(reducer, []);

    useEffect(() => {
        async function getArchive() {
            const response: any = await fetch('/apis/archive', {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
                .then((result) => result.json());

            // Handle dispatch
            dispatchArchive(
                { type: 'add-archive', payload: { archive: await response } }
            );
        }
        getArchive();
    }, []);

    return (
        <>
            <motion.div className="archive"
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition.transitionDelay}
                variants={pageTransition}>
                <div className="container">
                    <main className="content">
                        <motion.h1>
                            Archive</motion.h1>
                        {archive[0] && (
                        <>
                            <div className="logs">
                                {archive[0].reverse().map((log: any) => {
                                    return <Log key={Math.random()} log={log} />
                                })}
                            </div>
                        </>
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
