import { useAnimation, motion } from 'framer-motion';
import { logTransition } from '../../transitions/logTransitions';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../basics/Badge';
import { styles } from '../styles/log';
import {
    crew,
    rocket,
    capsule
} from '../../images';


interface props {
    log: {
        capsules: [];
        cores: [];
        crew: [];
        date_local: string;
        date_unix: number;
        details: string;
        id: string;
        links: {
            patch: {
                small: string;
            },
            reddit: {
                campaign: string;
            }
        };
        name: string;
        rocket: string;
    };
}

const getCurrentTimeFromStamp = function (timestamp: number) {
    let d = new Date(timestamp * 1000);
    let timeStampCon = d.getMonth() + '/' + (d.getDate()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
    return timeStampCon;
};

export const Log: React.FC<props> = ({ log }) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: logTransition.slideTransition
            })
        };
        if (!inView) {
            animation.start(logTransition.slideDown)
        }
    }, [inView, animation]);

    return (
        <motion.div ref={ref} className="log"
            animate={animation}>
            <Link to={"/upcoming/" + log.id} style={styles.link}>
                <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 className="log__name">{log.name}</h2>
                    <p>{getCurrentTimeFromStamp(log.date_unix)}</p>
                    <div className="badges">
                        {log.links.patch.small && (
                            <Badge src={log.links.patch.small} alt={log.name + " official patch"} tooltip={true} />
                        )}
                        {log.rocket && (
                            <Badge src={rocket} alt="Rocket info available" tooltip={true} />
                        )}
                        {log.crew.length > 0 && (
                            <Badge src={crew} alt="Crew info available" tooltip={true} />
                        )}
                        {log.capsules.length > 0 && (
                            <Badge src={capsule} alt="Capsule info available" tooltip={true} />
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
