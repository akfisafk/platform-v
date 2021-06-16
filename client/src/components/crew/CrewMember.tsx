interface Props {
    member: any;
}

export const CrewMember: React.FC<Props> = ({ member }) => {
    return (
        <div className="crew-member">
            <a className="crew-member-name" href={member[0].wikipedia} target="_blank" rel="noreferrer">{member[0].name}</a>
            <img className="crew-member-portrait" src={member[0].image} alt={member[0].name + "'s portrait"} />
        </div>
    )
}
