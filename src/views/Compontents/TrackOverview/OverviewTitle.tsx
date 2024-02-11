type OverviewTitleProps = {
    title: string;
    image: string;

}

export default function OverviewTitle(props: OverviewTitleProps){
    return (
        <>
            <div className="overview-title-box">
                <div className="overview-title-text">{props.title}</div>
            </div>
            <img className="overview-title-image" src={props.image} alt="sponsor-logo"/>
        </>
    );
}