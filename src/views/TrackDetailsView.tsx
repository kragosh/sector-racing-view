import TrackDetailTitle from "./Compontents/TrackDetailsView/TrackDetailTitle";

import "./TrackDetailsView.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LeaderboardEntry from "./Compontents/TrackDetailsView/LeaderboardEntry";
import {useNavigate} from "react-router-dom";

export default function TrackDetailsView() {
    const navigate = useNavigate();

    function backbutton() {
        navigate(`/`);
    }

    let leaderBoardEntryProps = {
        car: "Ferrari",
        name: "Sebastian Vettel",
        time: "1:23:456",
        weather: 1,
        placing: 1
    }

    return (
        <div className={"details-board"}>
            <div className={"detail-logo-box"}>
                <img className="detail-logo-img" src={"https://via.placeholder.com/800x600"} alt="sponsor-logo"/>
            </div>
            <div className={"detail-body"}>
                <TrackDetailTitle title={"Track Details"} image={"https://via.placeholder.com/800x600"}
                                  previous={4}
                                  next={3}/>
                <div className={"detail-content"}>
                    <div className={"detail-leaderboard-week fadeInElement"}>
                        <div className={"detail-leaderboard-week-header"}>
                            <div className={"detail-leaderboard-week-title"}>Leaderboard (diese Woche)</div>
                        </div>
                        <div className={"detail-leaderboard-week-content"}>
                            <LeaderboardEntry car={leaderBoardEntryProps.car} name={leaderBoardEntryProps.name} time={leaderBoardEntryProps.time} placing={leaderBoardEntryProps.placing} weather={leaderBoardEntryProps.weather}/>
                            <LeaderboardEntry car={leaderBoardEntryProps.car} name={leaderBoardEntryProps.name} time={leaderBoardEntryProps.time} placing={leaderBoardEntryProps.placing} weather={leaderBoardEntryProps.weather}/>
                            <LeaderboardEntry car={leaderBoardEntryProps.car} name={leaderBoardEntryProps.name} time={leaderBoardEntryProps.time} placing={leaderBoardEntryProps.placing} weather={leaderBoardEntryProps.weather}/>
                            <LeaderboardEntry car={leaderBoardEntryProps.car} name={leaderBoardEntryProps.name} time={leaderBoardEntryProps.time} placing={leaderBoardEntryProps.placing} weather={leaderBoardEntryProps.weather}/>
                            <LeaderboardEntry car={leaderBoardEntryProps.car} name={leaderBoardEntryProps.name} time={leaderBoardEntryProps.time} placing={leaderBoardEntryProps.placing} weather={leaderBoardEntryProps.weather}/>
                        </div>

                    </div>
                    <div className={"detail-leaderboard-overall fadeInElement"}>
                        <div className={"detail-leaderboard-overall-header"}>
                            <div className={"detail-leaderboard-overall-header-title"}>Leaderboard</div>
                        </div>
                        <div className={"detail-leaderboard-overall-content"}>
                            <LeaderboardEntry car={leaderBoardEntryProps.car} name={leaderBoardEntryProps.name} time={leaderBoardEntryProps.time} placing={leaderBoardEntryProps.placing} weather={leaderBoardEntryProps.weather}/>
                            <LeaderboardEntry car={leaderBoardEntryProps.car} name={leaderBoardEntryProps.name} time={leaderBoardEntryProps.time} placing={leaderBoardEntryProps.placing} weather={leaderBoardEntryProps.weather}/>
                        </div>
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