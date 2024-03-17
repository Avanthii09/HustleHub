import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/habitTopNav.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const TopNav = () => {
  const d = new Date();
  const d1 = d.toDateString();

  return (
    <div>
      <div className="topnav">
        <div className="navLeft">
          <div className="navLeftElem">
            <Link className="decorationLogo" to='/habittracker'>
              <i className="fas fa-leaf"></i> HABIT TRACKER
            </Link>
          </div>

          <div className="navLeftElem">
            <Link className="decoration" to='/habittracker'>
              <i className="fas fa-home"></i> HOME
            </Link>
          </div>

          <div className="navLeftElem">
            <Link className="decoration" to='/weekly'>
              <i className="far fa-calendar-alt"></i> WEEKLY
            </Link>
          </div>
        </div>

        <div className="navRightElem">
          <i className="far fa-clock"></i> {`${d1}`}
        </div>
      </div>


    </div>
  );
};

export default TopNav;