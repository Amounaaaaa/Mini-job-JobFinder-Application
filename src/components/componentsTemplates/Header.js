import {useState} from 'react'
import {Button, Modal} from 'react-bootstrap';
import '../../css/header.css';
// import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'


import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "../../pages/Login";
import Preloader from "./Preloader";
import Feed from "../../pages/Feed";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../actions/authActions";

const Header = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const auth = useSelector(state => state.auth)


    return (
        <div>
            {/*preloader start */}
            <Preloader/>
            {/*preloader end */}
            <header>
                <div>
                    {/*// <!-- Navbar -->*/}
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        {/*// <!-- Container wrapper -->*/}
                        <div class="container-fluid">
                            {/*// <!-- Toggle button -->*/}
                            {/*// <!-- Collapsible wrapper -->*/}
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                {/*// <!-- Navbar brand -->*/}
                                <div className="col-lg-3 col-md-2">
                                    <div className="logo">
                                        <a href="index.html"/>
                                        <img src="assets/img/logo/logo.png" alt=""/>
                                    </div>
                                </div>

                                {/*// <!-- Left links -->*/}
                                {/*<div className="col-lg-9 col-md-9">*/}
                                {/*    <ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
                                {/*        <Link to="/">*/}
                                {/*            <li><a href="index.html">Offres</a></li>*/}
                                {/*        </Link>*/}
                                {/*        <li className="nav-item">*/}
                                {/*            <a className="nav-link" href="#">Dashboard</a>*/}
                                {/*        </li>*/}
                                {/*        <li className="nav-item">*/}
                                {/*            <a className="nav-link" href="#">Team</a>*/}
                                {/*        </li>*/}
                                {/*        <li className="nav-item">*/}
                                {/*            <a className="nav-link" href="#">Projects</a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}

                                {/*// <!-- Left links -->*/}
                            </div>





                            {/*// <!-- Collapsible wrapper -->*/}

                            {/*// <!-- Right elements -->*/}


                            <div class="d-flex align-items-center">
                                {/*// <!-- Icon -->*/}
                                {/*// <!-- Notifications -->*/}
                                <a
                                    class="text-reset me-3 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="fas fa-bell"></i>
                                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>


                                {/*// <!-- Avatar -->*/}
                                <a
                                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                        class="rounded-circle"
                                        height="25"
                                        alt=""
                                        loading="lazy"
                                    />
                                </a>
                            </div>



                            {/*// <!-- Right elements -->*/}
                        </div>
                        {/*// <!-- Container wrapper -->*/}
                    </nav>
                    {/*// <!-- Navbar -->*/}
                </div>
                <div className="header-area header-transparrent">
                    <div className="headder-top header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-2">
                                    {/*<div className="logo">*/}
                                    {/*    <a href="index.html"/>*/}
                                    {/*    <img src="assets/img/logo/logo.png" alt=""/>*/}
                                    {/*</div>*/}
                                </div>

                          {/*//////////////////// Nav 1 End     ////////////////////////  */}
                                {/*<Router>*/}
                                <div className="col-lg-9 col-md-9">
                                    <div className="menu-wrapper">
                                        <div className="main-menu">
                                            <nav className="d-none d-lg-block">
                                                <ul id="navigation">
                                                    <Link to="/">
                                                        <li><a href="index.html">Offres</a></li>
                                                    </Link>
                                                    <Link style={{textDecoration: 'none'}} to="/cv">
                                                        <li><a>Create CV</a></li>
                                                    </Link>
                                                    <li><Link style={{textDecoration: 'none'}} to="/ranking">
                                                        <li><a href="#">Rankings</a></li>
                                                    </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className=" d-none f-right d-lg-block">
                                            {auth.isAuth ? (
                                                <>
                                                    <Link to="/profile"><a href="#"
                                                                           className="btn head-btn1">Profile</a></Link>
                                                    <Link onClick={() => dispatch(logoutUser())}>Log out</Link>
                                                </>
                                            ) : (
                                                <>
                                                    {/*<Link to="/register"><a href="#"*/}
                                                    {/*                        className="btn head-btn1">Register</a></Link>*/}
                                                    <Link to="/inscription"><a href="#"
                                                                               className="btn head-btn1">Register</a></Link>

                                                    <Link to="/login"><a href="#"
                                                                         className="btn head-btn1">Login</a></Link>
                                                    <Link to="/profile"><a href="#"
                                                                           className="btn head-btn1">Profile</a></Link>
                                                </>
                                            )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header
