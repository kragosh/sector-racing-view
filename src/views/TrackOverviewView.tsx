import OverviewTitle from "./Compontents/TrackOverview/OverviewTitle";
import {useEffect, useState} from "react";
import {TrackType} from "../types/TrackType";
import OverViewTrackRow from "./Compontents/TrackOverview/OverviewTrackRow";
import "./TrackOverviewView.css";


export default function TrackOverviewView() {
    const [state, setState] = useState<TrackType[]>([]);

    useEffect(() => {
        fetch("tracks.json")
            .then(response => response.json())
            .then(state => setState(state));
    })

    return (
        <div className="board">
            <OverviewTitle title="Racing Dashboard" image="https://via.placeholder.com/800x600"/>

            <div className="overview-content">
                {state.map((track, index) => (
                    <OverViewTrackRow track={track} index={index}/>)
                )}
            </div>
        </div>
    )
}