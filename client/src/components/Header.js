import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Payments from "./Payments";

const Header = () => {
    const auth = useSelector(state => state.auth);

    const renderContent = () => {
      switch(auth){
          case null:
              return;
          case false:
              return (
                  <li><a href={"/auth/google"}>Login With Google</a></li>
              );
          default:
              return[
                  <li key={"1"}><Payments/></li>,
                  <li style={{ margin: '0 10px'}} key={"3"}>
                      Credits: {auth.credits}
                  </li>,
                  <li key={"2"}><a href={"/api/logout"}>Logout</a></li>
              ];
      }
    };

    return (
        <nav>
            <div>
                <div className={"nav-wrapper"}>
                    <Link
                        to={auth? '/surveys': '/'}
                        className={"left brand-logo"}
                    >
                        Emaily
                    </Link>
                    <ul className={"right"}>
                        {renderContent()}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
