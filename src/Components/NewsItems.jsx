import noImage from './images/noImage.png';

const NewsItems = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;

    return (
        <div className="my-3">
            <div className={`card bg-${props.mode} border-${props.mode==='light'?'dark':'light'}`}>
            <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger"> {source} </span>
            </div>
            <img src={!imgUrl?noImage:imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className={`card-title text-${props.mode==='light'?"dark":"light"}`}>{title}</h5>
                <p className={`card-text text-${props.mode==='light'?"dark":"light"}`}>{description}</p>
                <p className={`card-text d-flex justify-content-end text-${props.mode==='light'?"dark":"light"}`}>
                    <small>
                        <b>- By {!author ? "UnKnown" : author} on{" "} {new Date(date).toGMTString()}</b>
                    </small>
                </p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
        </div>
    );
}

export default NewsItems;
