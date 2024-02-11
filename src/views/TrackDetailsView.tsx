import TrackDetailTitle from "./Compontents/TrackDetailsView/TrackDetailTitle";

import "./TrackDetailsView.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LeaderboardEntry, {LeaderboardEntryProps} from "./Compontents/TrackDetailsView/LeaderboardEntry";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

type TrackDetailsViewProps = {
    name: string;
    image: string;
    previous: number;
    next: number;
    overall: LeaderboardEntryProps[];
    week: LeaderboardEntryProps[];
}

export default function TrackDetailsView() {
    const navigate = useNavigate();
    const [data, setData] = useState<TrackDetailsViewProps>();
    const [loading, setLoading] = useState<boolean>(true);
    let {id} = useParams();


    useEffect(() => {
        setLoading(true);
        fetch(`track-${id}.json`)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false);
            });
    }, [id]);

    if (data === undefined) {
        return (
            <div className={"details-board"}>
                <div className={"detail-body"}>
                    <div>Loading...</div>
                </div>
            </div>
        )
    }
    return (
        <div className={"details-board"}>
            <div className={"detail-inner"}>
                <div className={"detail-logo-box"}>
                    <img className="detail-logo-img" src={"https://via.placeholder.com/800x600"} alt="sponsor-logo"/>
                </div>
                <div className={"detail-body"}>

                    <TrackDetailTitle title={data.name} image={data.image}
                                      previous={data.previous}
                                      next={data.next}/>
                    <div className={"detail-content"}>
                        <div className={"detail-leaderboard-week fadeInElement"}>
                            <div className={"detail-leaderboard-week-header"}>
                                <div className={"detail-leaderboard-week-title"}>Leaderboard (diese Woche)</div>
                            </div>
                            <div className={"detail-leaderboard-week-content"}>
                                {(loading) ?
                                    <div className={"detail-leaderboard-entry-driverbox-name"}>Loading...</div>
                                    :
                                    data.week.map((entry) => (
                                        <LeaderboardEntry car={entry.car} name={entry.name} time={entry.time}
                                                          placing={entry.placing} weather={entry.weather}/>
                                    ))}
                            </div>

                        </div>
                        <div className={"detail-leaderboard-overall fadeInElement"}>
                            <div className={"detail-leaderboard-overall-header"}>
                                <div className={"detail-leaderboard-overall-header-title"}>Leaderboard</div>
                            </div>
                            <div className={"detail-leaderboard-overall-content"}>
                                {(loading) ?
                                    <div className={"detail-leaderboard-entry-driverbox-name"}>Loading...</div>
                                    :
                                    data.overall.map((entry) => (
                                        <LeaderboardEntry car={entry.car} name={entry.name} time={entry.time}
                                                          placing={entry.placing} weather={entry.weather}/>
                                    ))}                        </div>
                        </div>
                    </div>
                </div>
                <div className={"slideInFromLeft detail-background"}>
                    <img className={"detail-background"} src={data.image} alt="background"/>
                </div>
            </div>
        </div>
    );

}