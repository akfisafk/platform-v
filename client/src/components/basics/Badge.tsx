import { motion } from 'framer-motion';

interface Props {
    src: string;
    alt: string;
    tooltip?: boolean;
}

export const Badge: React.FC<Props> = ({ src, alt, tooltip }) => {
    return (
        <motion.div className="badge-container">
            <img className="badge" src={src} alt={alt + " badge"} />
            {tooltip && (
                <span className="tooltip">{alt} </span>
            )}
        </motion.div>
    )
}
