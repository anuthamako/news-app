import React, {useState, useEffect} from 'react';

import Corousal from './Corousal';
import Actions from '../fetch/actions';

export default function News(props) {

    const [newsData, setNewsData] = useState([]);
    const [headlineData, setheadlineData] = useState([]);
    const [displayLoader, setdisplayLoader] = useState(false);


    useEffect(async () => {
        setdisplayLoader(true);
        let json = await Actions.get(props.section);
        if(json && json.news && json.news.articles){
            setheadlineData(() => json.news.articles.splice(0, 4));
            setNewsData(() => json.news.articles);
        } else {
            setheadlineData(() => []);
            setNewsData(() => []);
        }
        setdisplayLoader(false);
    }, [props.section]);

    useEffect(async () => {
        setdisplayLoader(true);
        let json = await Actions.get(props.section);
        if(json && json.news && json.news.articles){
            setheadlineData(() => json.news.articles.splice(0, 4));
            setNewsData(() => json.news.articles);
        } else {
            setheadlineData(() => []);
            setNewsData(() => []);
        }
        setdisplayLoader(false);
    }, []);

    return (
        <div>
            {(displayLoader)?<div className="d-flex justify-content-center" id="loadingModal" >
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div> : null}
            <Corousal news={headlineData} />
            <div className="world-news">
                <div className="row">
                <div className="col-sm-12">
                    <div className="d-flex position-relative  float-left">
                    <h3 className="section-title">{props.section} News</h3>
                    </div>
                </div>
                </div>
                <div className="row">
                    {newsData.map((ele,index) => <NewsCard key={index+2} news={ele}/>)}
                </div>
            </div>
        </div>
    )
}

function NewsCard(props) {
    return (
        <div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
            <div className="position-relative image-hover">
            <div style={{"height": "200px"}}>
                <img
                    src={props.news.urlToImage}
                    className="img-fluid"
                    alt="world-news"
                    style={{height:"inherit"}}
                />
                <span className="thumb-title">{props.news.source.name||"News"}</span>
            </div>
            </div>
            <h5 className="font-weight-bold mt-3">
            {props.news.title}
            </h5>
            <p className="fs-15 font-weight-normal">
                <span dangerouslySetInnerHTML={{__html: props.news.description}} />
            </p>
            <a href={props.news.url} target="_blank" className="font-weight-bold text-dark pt-2"
            >Read Article</a
            >
        </div>
    );
}