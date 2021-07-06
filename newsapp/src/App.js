import {useState, useEffect} from 'react';
import News from './components/News';
import moment from 'moment';

function App() {

  const [activeNavLink, setNavLink] = useState("Home");
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <div className="container-scroller">
      <div className="main-panel">
        <header id="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="d-flex justify-content-between align-items-center navbar-top">
                <ul className="navbar-left">
                  <li>{moment().format("dddd, MMM DD, YYYY")}</li>
                  <li>30°C,London</li>
                </ul>
                <div>
                  <a className="navbar-brand" href="#"
                    ><img src="assets/images/logo.svg" alt=""
                  /></a>
                </div>
                <div className="d-flex">
                  <ul className="navbar-right">
                    <li>
                      <a href="#">ENGLISH</a>
                    </li>
                    <li>
                      <a href="#">ESPAÑOL</a>
                    </li>
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a href="#">
                        <i className="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-bottom-menu">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="navbar-collapse justify-content-center collapse"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navbar-nav d-lg-flex justify-content-between align-items-center"
                  >
                    <li>
                      <button className="navbar-close">
                        <i className="mdi mdi-close"></i>
                      </button>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link active" onClick={() => setNavLink("Headlines")} href="#">Headlines</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => setNavLink("World")} href="#">World</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => setNavLink("National")} href="#">National</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => setNavLink("Health")} href="#.html">Health</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => setNavLink("Business")} href="#">Business</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => setNavLink("Sports")} href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => setNavLink("Entertainment")} href="#">Entertainment</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><input onChange={(event) => setSearchText(event.target.value)} type="text" placeholder="Search"/><i onClick={() => setNavLink(searchText)}className="mdi mdi-magnify"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="container">
          <News section={activeNavLink}/>
        </div>
      </div>

      <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="d-flex justify-content-between">
                  <img src="assets/images/logo.svg" className="footer-logo" alt="" />

                  <div className="d-flex justify-content-end footer-social">
                    <h5 className="m-0 font-weight-600 mr-3 d-none d-lg-flex">Follow on</h5>
                    <ul className="social-media">
                      <li>
                        <a href="#">
                          <i className="mdi mdi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="mdi mdi-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </div>
  );
}

export default App;
