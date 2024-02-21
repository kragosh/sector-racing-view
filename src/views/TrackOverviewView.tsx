import OverviewTitle from "./Compontents/TrackOverview/OverviewTitle";
import {useEffect, useState} from "react";
import {TrackType} from "../types/TrackType";
import OverViewTrackRow from "./Compontents/TrackOverview/OverviewTrackRow";
import "./TrackOverviewView.css";


export default function TrackOverviewView() {
    const [state, setState] = useState<TrackType[]>([]);

    useEffect(() => {
        fetch("https://api.bitdevil2k16.net/demo/racerOverview/tracks")
            .then(response => response.json())
            .then(state => setState(state));
    }, [])

    return (
        <div className="board">
            <OverviewTitle title="Racing Dashboard" image="https://cdn.sektorhud.win/racing%2Fsprunkx.png"/>

            <div className="overview-content">
                {state.map((track, index) => (
                    <OverViewTrackRow track={track} index={index}/>)
                )}
            </div>
            <img className={"detail-background"} src="images/overview-back.jpg" alt="background"/>
        </div>
    )
}