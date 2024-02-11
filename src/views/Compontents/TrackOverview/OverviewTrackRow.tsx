import {TrackType} from "../../../types/TrackType";
import { useNavigate } from "react-router-dom";

type OverviewTrackRowProps = {
    index: number;
    track: TrackType;
}

export default function OverViewTrackRow(props: OverviewTrackRowProps) {
    const navigate = useNavigate();
    function handleClick(track:number) {
        navigate(`/track/${track}`);
    }

    return (
        <div key={props.index} className="overview-track-card" onClick={() => handleClick(props.track.id)}>
            <img src={props.track.image} alt={props.track.name} className="overview-track-card-image"/>
            <div className="overview-track-card-content">
                <p className="overview-track-card-name">{props.track.name}</p>
                <p className="overview-track-card-driver">{props.track.driver}</p>
                <p className="overview-track-card-time">{props.track.time}</p>
            </div>
        </div>
    );
}