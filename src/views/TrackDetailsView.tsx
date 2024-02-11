import TrackDetailTitle from "./Compontents/TrackDetailsView/TrackDetailTitle";

import "./TrackDetailsView.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LeaderboardEntry, {LeaderboardEntryProps} from "./Compontents/TrackDetailsView/LeaderboardEntry";
import {useNavigate} from "react-router-dom";
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
    const [data , setData] = useState<TrackDetailsViewProps>();

    function backbutton() {
        navigate(`/`);
    }

    useEffect(() => {
        fetch('track-1.json')
            .then(response => response.json())
            .then(data => setData(data));
    });

    if (data === undefined) {
        return <div>Loading...</div>;
    }
    return (
        <div className={"details-board"}>
            <div className={"detail-logo-box"}>
                <img className="detail-logo-img" src={"https://via.placeholder.com/800x600"} alt="sponsor-logo"/>
            </div>
            <div className={"detail-body"}>
                <TrackDetailTitle title={"Track Details"} image={"https://via.placeholder.com/800x600"}
                                  previous={data.previous}
                                  next={data.next }/>
                <div className={"detail-content"}>
                    <div className={"detail-leaderboard-week fadeInElement"}>
                        <div className={"detail-leaderboard-week-header"}>
                            <div className={"detail-leaderboard-week-title"}>Leaderboard (diese Woche)</div>
                        </div>
                        <div className={"detail-leaderboard-week-content"}>
                            {data.week.map((entry) => (
                                <LeaderboardEntry car={entry.car} name={entry.name} time={entry.time} placing={entry.placing} weather={entry.weather}/>
                                ))}
                        </div>

                    </div>
                    <div className={"detail-leaderboard-overall fadeInElement"}>
                        <div className={"detail-leaderboard-overall-header"}>
                            <div className={"detail-leaderboard-overall-header-title"}>Leaderboard</div>
                        </div>
                        <div className={"detail-leaderboard-overall-content"}>
                            {data.overall.map((entry) => (
                                <LeaderboardEntry car={entry.car} name={entry.name} time={entry.time} placing={entry.placing} weather={entry.weather}/>
                            ))}                        </div>
                    </div>
                </div>
                <div className={"detail-leaderboard-bottom"}>
                    <div className={"detail-leaderboard-bottom-back"} onClick={backbutton}>
                        <FontAwesomeIcon icon={"arrow-left"} className={"detail-leaderboard-bottom-icon"}/>
                        <div className={"detail-leaderboard-bottom-text"}>
                            Übersicht
                        </div>
                    </div>
                    <div className={"detail-leaderboard-bottom-filter"}>
                    </div>
                </div>
            </div>

        </div>
    );

}