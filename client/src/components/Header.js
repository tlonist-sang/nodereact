import React from "react";

const Header = () => {
    return (
        <nav>
            <div>
                <div className={"nav-wrapper"}>
                    <a className={"left brand-logo"}>
                        Emaily
                    </a>
                    <ul className={"right"}>
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;