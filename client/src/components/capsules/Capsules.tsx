export default function Capsules({ capsules }: any) {

    return (
        <div className="capsules">
            <div className="capsules-stats-container">
                <h2 className="capsules-name">{capsules[0].type}</h2>
                <div className="divider" />
                <div className="capsules-stats">
                    <div>
                        <h3>Status</h3>
                        <p className={capsules[0].status === 'active' ? 'highlight' : ''}>{capsules[0].status}</p>
                    </div>
                    <div>
                        <h3>Update</h3>
                        {capsules[0].last_update ?
                            <p className="capsules-update">{capsules[0].last_update}</p> :
                            <p className="capsules-update">No update</p>
                        }
                    </div>
                    <div>
                        <h3>Land Landings</h3>
                        <p>{capsules[0].land_landings}</p>
                    </div>
                    <div>
                        <h3>Water Landings</h3>
                        <p>{capsules[0].water_landings}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
