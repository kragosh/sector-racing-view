import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type OverviewTitleProps = {
    title: string;
    image: string;
    previous: number;
    next: number;
}

export default function TrackDetailTitle(props: OverviewTitleProps) {
    return (
        <>
            <div className={"detail-header"}>
                <div className={"detail-header-selector"}>
                    <FontAwesomeIcon icon={"chevron-left"} className={"detail-header-arrow-left"}/>
                    <div className="detail-header-trackname">{props.title}</div>
                    <FontAwesomeIcon icon={"chevron-right"} className={"detail-header-arrow-right"}/>
                </div>
                <div className={"detail-logo-box"}>
                    <img className="detail-logo-img" src={props.image} alt="sponsor-logo"/>
                </div>
            </div>


        </>
    );
}