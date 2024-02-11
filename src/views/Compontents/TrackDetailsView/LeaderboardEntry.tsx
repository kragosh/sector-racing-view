import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type LeaderboardEntryProps = {
    car: string;
    name: string;
    time: string;
    weather: number;
    placing: number;
}


function getIconNameForNumber(number: number):IconProp {
    if (number === 1) {
        return "sun";
    }
    if (number === 2) {
        return "cloud-rain";
    }
    if (number === 3) {
        return "snowflake";
    }
    return "circle";
}

export default function LeaderboardEntry(props: LeaderboardEntryProps) {
    const iconName = getIconNameForNumber(props.weather);

    return <div className={"detail-leaderboard-entry"}>
        <div className={"detail-leaderboard-entry-driverbox"}>
            <div className={"detail-leaderboard-entry-driverbox-car"}>{props.car}</div>
            <div className={"detail-leaderboard-entry-driverbox-name"}>{props.name}</div>
        </div>
        <div className={"detail-leaderboard-entry-time"}>{props.time}</div>
        <div className={"detail-leaderboard-entry-weather"}><FontAwesomeIcon icon={iconName}/></div>
        <div className={"detail-leaderboard-entry-placing"}>{props.placing}</div>
    </div>;
}