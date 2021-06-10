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
                                {/*   -------------------------------------------- Home  Routes Start --------------------------------------------- */}

                                {/*<Router>*/}
                                <div className="col-lg-9 col-md-9">
                                    <div className="menu-wrapper">
                                        <div className="main-menu">
                                            <nav className="d-none d-lg-block">
                                                <ul  style={{marginTop:"50px"}} id="navigation">
                                                    <Link to="/"><a href="#"  className="btn head-btn1">Offres</a></Link>
                                                    <Link to="/cv"><a href="#"  className="btn head-btn1">CreateCV</a></Link>
                                                    <Link to="/ranking">
                                                        <a href="#"  className="btn head-btn1">Ranking</a></Link>

                                                    {/*///////////////////// Route condionnel Start (id user connecté ou nn !:) ) ////////////////*/}
                                                    <div className=" d-none f-right d-lg-block">
                                                        {auth.isAuth ? (
                                                            <>
                                                                {/*<Link to="/profile"><a href="#"*/}
                                                                {/*                       className="btn head-btn1">Profile</a></Link>*/}
                                                                <Link onClick={() => dispatch(logoutUser())}>Log out<a href="#" className="btn head-btn1"></a></Link>

                                                                {/*<Link onClick={() => dispatch(logoutUser())}>Log out</Link>*/}
                                                            </>
                                                        ) : (
                                                            <>
                                                                {/*<Link to="/register"><a href="#"*/}
                                                                {/*                        className="btn head-btn1">Register</a></Link>*/}
                                                                <Link to="/inscription"><a href="#"
                                                                                           className="btn head-btn1">Register</a></Link>


                                                                <Link to="/login"><a href="#"
                                                                                     className="btn head-btn1">Login</a></Link>
                                                                {/*<Link to="/profile">*/}
                                                                {/*    <a href="#"*/}
                                                                {/*                       className="btn head-btn1">Profile</a></Link>*/}
                                                            </>
                                                        )
                                                        }
                                                    </div>
                                                    {/*///////////////////// Route condionnel End (id user connecté ou nn !:) ) ////////////////*/}
                                                </ul>
                                            </nav>
                                        </div>
                                        {/*<div className=" d-none f-right d-lg-block">*/}
                                        {/*    {auth.isAuth ? (*/}
                                        {/*        <>*/}
                                        {/*            <Link to="/profile"><a href="#"*/}
                                        {/*                                       className="btn head-btn1">Profile</a></Link>*/}
                                        {/*            <Link onClick={() => dispatch(logoutUser())}>Log out</Link>*/}
                                        {/*        </>*/}
                                        {/*    ) : (*/}
                                        {/*        <>*/}
                                        {/*            /!*<Link to="/register"><a href="#"*!/*/}
                                        {/*            /!*                        className="btn head-btn1">Register</a></Link>*!/*/}
                                        {/*            <Link to="/inscription"><a href="#"*/}
                                        {/*                                       className="btn head-btn1">Register</a></Link>*/}

                                        {/*            <Link to="/login"><a href="#"*/}
                                        {/*                                 className="btn head-btn1">Login</a></Link>*/}
                                        {/*            /!*<Link to="/profile">*!/*/}
                                        {/*            /!*    <a href="#"*!/*/}
                                        {/*            /!*                       className="btn head-btn1">Profile</a></Link>*!/*/}
                                        {/*        </>*/}
                                        {/*    )*/}
                                        {/*    }*/}
                                        {/*</div>*/}
                                    </div>
                                </div>

                                {/*   -------------------------------------------- Home  Routes End --------------------------------------------- */}

                            </div>
                            {/*// <!-- Collapsible wrapper -->*/}
                            {/*// <!-- Right elements -->*/}
                            <div class="d-flex align-items-center">
                                {/*// <!-- Icon -->*/}
                                {/*// <!-- Notifications -->*/}
                                { auth.isAuth && <a
                                    class="text-reset me-3 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class="fas fa-bell"></i>
                                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>}


                                {/*// <!-- Avatar -->*/}
                                { auth.isAuth && <a
                                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Link to="/profile">
                                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                             className="rounded-circle" height="25" alt="" loading="lazy"/>
                                    </Link>
                                </a>}
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
                                {/*<div className="col-lg-9 col-md-9">*/}
                                {/*    <div className="menu-wrapper">*/}
                                {/*        <div className="main-menu">*/}
                                {/*            <nav className="d-none d-lg-block">*/}
                                {/*                <ul id="navigation">*/}
                                {/*                    <Link to="/">*/}
                                {/*                        <li><a href="index.html">Offres</a></li>*/}
                                {/*                    </Link>*/}
                                {/*                    <Link style={{textDecoration: 'none'}} to="/cv">*/}
                                {/*                        <li><a>Create CV</a></li>*/}
                                {/*                    </Link>*/}
                                {/*                    <li><Link style={{textDecoration: 'none'}} to="/ranking">*/}
                                {/*                        <li><a href="#">Rankings</a></li>*/}
                                {/*                    </Link>*/}
                                {/*                    </li>*/}
                                {/*                </ul>*/}
                                {/*            </nav>*/}
                                {/*        </div>*/}
                                {/*        <div className=" d-none f-right d-lg-block">*/}
                                {/*            {auth.isAuth ? (*/}
                                {/*                <>*/}
                                {/*                    <Link to="/profile"><a href="#"*/}
                                {/*                                           className="btn head-btn1">Profile</a></Link>*/}
                                {/*                    <Link onClick={() => dispatch(logoutUser())}>Log out</Link>*/}
                                {/*                </>*/}
                                {/*            ) : (*/}
                                {/*                <>*/}
                                {/*                    /!*<Link to="/register"><a href="#"*!/*/}
                                {/*                    /!*                        className="btn head-btn1">Register</a></Link>*!/*/}
                                {/*                    <Link to="/inscription"><a href="#"*/}
                                {/*                                               className="btn head-btn1">Register</a></Link>*/}

                                {/*                    <Link to="/login"><a href="#"*/}
                                {/*                                         className="btn head-btn1">Login</a></Link>*/}
                                {/*                    /!*<Link to="/profile">*!/*/}
                                {/*                    /!*    <a href="#"*!/*/}
                                {/*                    /!*                       className="btn head-btn1">Profile</a></Link>*!/*/}
                                {/*                </>*/}
                                {/*            )*/}
                                {/*            }*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}



                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header
