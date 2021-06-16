import React from 'react';
import { CrewMember } from './CrewMember';

export default function Crew({ crew }: any) {
    return (
            <div className="rocket">
                <div className="rocket-stats-container">
                    <h2 className="rocket-name">Crew</h2>
                    <div className="divider" />
                    <div className="rocket-stats">
                            {Object.entries(crew).map(member =>
                                <CrewMember key={Math.random()} member={member[1]} />
                            )}
                    </div>
                </div>
            </div>
    )
}
