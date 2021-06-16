import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hamburger } from './Hamburger';
import {CloseHamburger} from './CloseHamburger';
import { Modal } from './Modal';


export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerClick = () => {
        if (!isOpen) setIsOpen(true);
        else setIsOpen(false);
    }

    return (
        <>
            <div className="nav">
                <div className="nav-container">
                    <div className="nav-menu">
                        <ul className="nav-left">
                            <li><Link to="/">Platform V</Link></li>
                        </ul>
                        <ul className="nav-mid">
                            <li><Link to="/upcoming">Upcoming</Link></li>
                            <li><Link to="/archive">Archive</Link></li>
                            <li><Link to="/visualizer">Visualizer</Link></li>
                        </ul>
                        <ul className="nav-right">
                            <li><a href="http://spacex.com" target="_blank" rel="noreferrer">SpaceX</a></li>
                        </ul>
                        <ul className="nav-hamburger" onClick={handleHamburgerClick}>
                            {!isOpen ? <Hamburger /> : <CloseHamburger/>}
                        </ul>
                    </div>
                </div>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div>
                    <ul>
                        <Link to="/upcoming">Upcoming</Link>
                        <Link to="/archive">Archive</Link>
                        <Link to="/visualizer">Visualizer</Link>
                        <a href="http://spacex.com" target="_blank" rel="noreferrer">SpaceX</a>
                    </ul>
                </div>
            </Modal>
        </>
    )
}