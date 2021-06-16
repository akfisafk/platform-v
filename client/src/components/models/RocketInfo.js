import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { pageTransition } from '../../transitions/pageTransition';

export const RocketInfo = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, [])

    return (
        <>
            <div className="grid"></div>
            {windowSize >= 1100 && (
                <>
                    <div className="visualizer__rocket-info">
                        <div className="info-node"><h1>Meet Falcon 9</h1></div>
                        <div className="connector"></div>
                        <div className="info-node"><p>A reusable two-stage rocket for transporting people and payloads.</p></div>
                        <div className="connector"></div>
                        <div className="info-node"><p>Over 120 historical launches.</p></div>
                        <div className="connector"></div>
                        <div className="info-node"><p>Height: 70 meters</p></div>
                        <div className="connector"></div>
                        <div className="info-node"><p>Diameter: 3.7 meters</p></div>
                        <div className="connector"></div>
                        <div className="info-node"><p>Mass: 549,000 kg.</p></div>
                        <div className="connector"></div>
                        <div className="info-node"><p>$50m per launch</p></div>
                    </div>
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
            )}
        </>
    )
}
