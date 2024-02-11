import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

type OverviewTitleProps = {
    title: string;
    image: string;
    previous: number;
    next: number;
}

export default function TrackDetailTitle(props: OverviewTitleProps) {
    const navigate = useNavigate();

    function nav(page: number) {
        navigate(`/track/${page}`);
    }
    return (
        <>
            <div className={"detail-header"}>
                <div className={"detail-header-selector"}>
                    <FontAwesomeIcon icon={"chevron-left"} className={"detail-header-arrow-left"} onClick={() => nav(props.previous)}/>
                    <div className="detail-header-trackname">{props.title}</div>
                    <FontAwesomeIcon icon={"chevron-right"} className={"detail-header-arrow-right"} onClick={() => nav(props.next)}/>
                </div>
                <div className="detail-logo-spacer">
                </div>
            </div>

        </>
    );
}