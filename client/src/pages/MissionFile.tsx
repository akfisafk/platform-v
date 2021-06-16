import { useEffect, useReducer, useState } from 'react';
import Crew from '../components/crew/Crew';
import Rocket from '../components/rocket/Rocket';
import Capsules from '../components/capsules/Capsules';

const reducer = (items: any, action: any) => {
    switch (action.type) {
        case 'add-launch':
            return [addLaunch(action.payload)]
        case 'add-rocket':
            return [addRocket(action.payload)]
        case 'add-crew':
            return [...items, [addCrew(action.payload)]]
        case 'add-capsule':
            return [...items, [addCapsule(action.payload)]]
        default:
            return items;
    }
}

function addLaunch(payload: any) {
    return payload.launch;
}

function addRocket(payload: any) {
    return payload.rocket;
}

function addCrew(payload: any) {
    return payload.crew;
}

function addCapsule(payload: any) {
    return payload.capsule;
}

interface Props {
    id: string;
}

export const MissionFile: React.FC<Props> = ({ id }) => {
    const [launch, dispatchLaunch] = useReducer(reducer, []);
    const [rocketData, dispatchRocketData] = useReducer(reducer, []);
    const [crewData, dispatchCrewData] = useReducer(reducer, []);
    const [capsuleData, dispatchCapsuleData] = useReducer(reducer, []);
    const [rocketId, setRocketId] = useState();
    const [crewIds, setCrewIds] = useState([]);
    const [capsuleIds, setCapsuleIds] = useState([]);
    const [activeTab, setActiveTab] = useState('rocket');

    useEffect(() => {
        async function getLaunch() {
            const response: any = await fetch('/apis/launchdata', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
                .then((result) => result.json());

            // Handle dispatch
            dispatchLaunch(
                { type: 'add-launch', payload: { launch: await response } }
            );
        }
        getLaunch();
    }, [id]);

    useEffect(() => {
        async function getRocket() {
            const response: any = await fetch('/apis/rocket', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ rocketId })
            })
                .then((result) => result.json());

            // Handle dispatch
            dispatchRocketData(
                { type: 'add-rocket', payload: { rocket: await response } }
            );
        }
        getRocket();
    }, [rocketId]);

    useEffect(() => {
        async function getCrewMember() {
            for (let id of crewIds) {
                const response: any = await fetch('/apis/crew', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ id })
                })
                    .then((result) => result.json());

                // Handle dispatch
                dispatchCrewData(
                    { type: 'add-crew', payload: { crew: await response } }
                );
            }
        }
        getCrewMember();
    }, [crewIds])

    useEffect(() => {
        async function getCapsule() {
            for (let id of capsuleIds) {
                const response: any = await fetch('/apis/capsule', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ id })
                })
                    .then((result) => result.json());

                // Handle dispatch
                dispatchCapsuleData(
                    { type: 'add-capsule', payload: { capsule: await response } }
                );
            }
        }
        getCapsule();
    }, [capsuleIds])

    useEffect(() => {
        if (launch[0]) {
            setRocketId(launch[0].rocket);
            setCrewIds(launch[0].crew);
            setCapsuleIds(launch[0].capsules);
        }
    }, [launch])

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    }
 
    return (
        <div className="no-width-container">
            <main className="content" style={{width: '100%'}}>
                {launch[0] && (
                    <div className="file">
                        <div className="file-header">
                            <h1 className="file-name">Mission file: {launch[0].name}</h1>
                            <p className="file-details">{launch[0].details}</p>
                        </div>
                        <div className="file-content">
                            <div style={{ width: '100%', height: '2rem', display: 'flex' }}>
                                {rocketData[0] && (
                                    <div
                                        className={activeTab === 'rocket' ? 'file-tab-active' : 'file-tab'}
                                        onClick={() => handleTabChange('rocket')}>
                                        Rocket
                                    </div>
                                )}
                                {crewData.length > 0 && (
                                    <div
                                        className={activeTab === 'crew' ? 'file-tab-active' : 'file-tab'}
                                        onClick={() => handleTabChange('crew')}>
                                        Crew
                                    </div>
                                )}
                                {capsuleData.length > 0 && (
                                    <div
                                        className={activeTab === 'capsules' ? 'file-tab-active' : 'file-tab'}
                                        onClick={() => handleTabChange('capsules')}>
                                        Capsules
                                    </div>
                                )}
                            </div>
                            {rocketData[0] && activeTab === 'rocket' && (
                                <Rocket rocket={rocketData[0]} />
                            )}
                            {crewData.length > 0 && activeTab === 'crew' && (
                                <Crew crew={crewData} />
                            )}
                            {capsuleData[0] && activeTab === 'capsules' && (
                                <Capsules capsules={capsuleData[0]}/>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
