import React from 'react';

const Navbar = () => {
return (
<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Videogames</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" />
                    </li>
                    <li className="nav item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Search
                        </a>
                        <div className="dropdown-menu" aria-labellebdy="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another Action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else Here</a>
                        </div>
                    </li>
                </ul>
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <a className="nav-link">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Login</a>
                        </li>
                        <li className="navbar-item">
                            <a className="nav-link">Logout</a>
                        </li>

                    </ul>
            </div>
        </div>
    </nav>
</div>
);
}
export default Navbar;