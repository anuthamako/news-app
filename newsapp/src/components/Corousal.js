import React from 'react';

export default function Corousal(props) {

    let corousalArr = [];

    corousalArr = props.news.map((ele,index) => <CourousalItem news={ele} index={index}/>);

    return (
        <div className="row">
            <div className="col-lg-12">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner owl-carousel owl-theme" id="main-banner-carousel" >
                    {corousalArr}
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
    )
}

function CourousalItem(props) {
    let active = "";
    if(props.index == 0) active = "active";
    return (
        <a className={"carousel-item "+active} key={props.index} href={props.news.url} target="_blank">
            <div className="carousel-content-wrapper mb-2" >
                <div className="carousel-content" >
                    <h1 className="font-weight-bold" style={{backgroundColor:"black"}}>
                        {props.news.title}
                    </h1>
                    {/* <h5 className="font-weight-normal  m-0">
                        {props.news.title}
                    </h5> */}
                <p className="text-color m-0 pt-2 d-flex align-items-center" >
                    <span className="fs-10 mr-1" >2 hours ago</span>
                    <i className="mdi mdi-bookmark-outline mr-3" ></i>
                    <span className="fs-10 mr-1" >126</span>
                    <i className="mdi mdi-comment-outline" ></i>
                </p>
                </div>
                <div className="carousel-image" >
                    <img src={props.news.urlToImage} alt="" width="100%" height="100%"/>
                </div>
            </div>
        </a>
    )
}