import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

import "./LeaderboardEntry.css";

export type LeaderboardEntryProps = {
    car: string;
    name: string;
    time: string;
    weather: number;
    weatherstring: string;
    weathertrans: string;
    placing: number;
}

export type WeatherData = {
    name: string;
    icon: string;
}

const WeatherIds = [
    { name: "Extra Sonnig", icon: "sun" },
    { name: "Klar", icon: "sun" },
    { name: "Wolkig", icon: "cloud-sun" },
    { name: "Nebelig", icon: "cloud-sun" },
    { name: "Nebelig", icon: "cloud" },
    { name: "Bedekt", icon: "cloud" },
    { name: "Regnerisch", icon: "cloud-rain" },
    { name: "Gewitter", icon: "bolt" },
    { name: "Leichter Regen", icon: "cloud-rain" },
    { name: "---", icon: "cloud-rain" },
    { name: "Schnee", icon: "snowflake" },
    { name: "Blizzard", icon: "snowflake" },
    { name: "Leichter Schnee", icon: "snowflake" },
    { name: "Weihnachten", icon: "snowflake" },
    { name: "Hellowen", icon: "ghost" },
];


function getIconNameForName(name: string):IconProp {
    const weather = WeatherIds.find((entry) => entry.name === name);
    if (weather === undefined) {
        return "sun";
    }
    return weather.icon as IconProp;
}

export default function LeaderboardEntry(props: LeaderboardEntryProps) {
    const iconName = getIconNameForName(props.weathertrans);

    return <div className={"detail-leaderboard-entry fadeInLeftElement"} style={{animationDelay:props.placing*50+"ms",opacity:0}}>
        <div className={"detail-leaderboard-entry-driverbox"}>
            <div className={"detail-leaderboard-entry-driverbox-car"}>{props.car}</div>
            <div className={"detail-leaderboard-entry-driverbox-name"}>{props.name}</div>
        </div>
        <div className={"detail-leaderboard-entry-time"}>{props.time}</div>
        <div className={"detail-leaderboard-entry-weather"}><FontAwesomeIcon icon={iconName}/></div>
        <div className={"detail-leaderboard-entry-placing"}>#{props.placing}</div>
    </div>;
}