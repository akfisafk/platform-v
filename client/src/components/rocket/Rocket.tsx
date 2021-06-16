export default function Rocket({ rocket }: any) {

    const randomImg = (length: number) => {
        const random = Math.floor(Math.random() * length);
        return rocket.flickr_images[random];
    }

    return (
            <div className="rocket">
                <div className="rocket-stats-container">
                    <h2 className="rocket-name">{rocket.name}</h2>
                    <div className="divider" />
                    <div className="rocket-stats">
                        <div>
                            <h3>Height(m)</h3>
                            <p>{rocket.height.meters}</p>
                        </div>
                        <div>
                            <h3>Diameter(m)</h3>
                            <p>{rocket.diameter.meters}</p>
                        </div>
                        <div>
                            <h3>Mass(kg)</h3>
                            <p>{rocket.mass.kg}</p>
                        </div>
                        <div>
                            <h3>Cost per launch</h3>
                            <p>${rocket.cost_per_launch}</p>
                        </div>
                    </div>
                <img className="rocket-img" src={randomImg(rocket.flickr_images.length)} alt={rocket.name} />
                </div>
            </div>
    )
}
