import {useState} from 'react'
import { Button,Modal} from 'react-bootstrap';
import '../../css/header.css';
// import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'


import {BrowserRouter as Router,Route, Link,Switch} from "react-router-dom";
import Login from "../../pages/Login";
import Preloader from "./Preloader";
import Feed from "../../pages/Feed";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../actions/authActions";

const Header = () => {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const auth=useSelector(state=>state.auth)


    return (
        <div>
            {/*preloader start */}
            <Preloader/>
            {/*preloader end */}

            <header>
                <div className="header-area header-transparrent">
                    <div className="headder-top header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-2">
                                    <div className="logo">
                                        <a href="index.html"/>
                                        <img src="assets/img/logo/logo.png" alt=""/>
                                    </div>
                                </div>

                                {/*<Router>*/}
                                    <div className="col-lg-9 col-md-9">
                                        <div className="menu-wrapper">
                                            <div className="main-menu">
                                                <nav className="d-none d-lg-block">
                                                    <ul id="navigation">


                                                        <Link  to="/">
                                                            <li><a href="index.html">Home</a></li>
                                                        </Link>

                                                        {/*<Link  style={{textDecoration: 'none'}} to="/"> <li><a>Home</a></li></Link>*/}
                                                        {/*<li><a href="index.html">Home</a></li>*/}
                                                        <Link style={{textDecoration: 'none'}}   to="/finajob"> <li><a>Find a job</a></li></Link>
                                                        <li>    <Link  style={{textDecoration: 'none'}}  to="/finajob"> <li> <a href="#">Page</a>  </li></Link>
                                                            <ul className="submenu">
                                                                <li><a href="blog.html">Blog</a></li>
                                                                <li><a href="single-blog.html">Blog Details</a></li>
                                                                <li><a href="elements.html">Elements</a></li>
                                                                <li><a href="job_details.html">job Details</a></li>
                                                            </ul>
                                                        </li>
                                                        <Link  style={{textDecoration: 'none'}}  to="/contact"> <li><a href="contact.html">Contact</a></li></Link>
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className=" d-none f-right d-lg-block">

                                                {/*<a href="#" className="btn head-btn1">Register</a>*/}
                                                {auth.isAuth ? (
                                                    <>
                                                        <Link to="/profile"><a href="#" className="btn head-btn1">Profile</a></Link>
                                                        <Link onClick={()=>dispatch(logoutUser())} >Log out</Link>

                                                    </>
                                                ) : (
                                                    <>
                                                        <Link to="/register"><a href="#" className="btn head-btn1">Register</a></Link>
                                                        <Link to="/inscription"><a href="#" className="btn head-btn1">Inscription.........</a></Link>

                                                        <Link to="/login"><a href="#" className="btn head-btn1">Login</a></Link>
                                                        <Link to="/profile"><a href="#" className="btn head-btn1">Profile</a></Link>

                                                    </>
                                                )
                                                }
                                                {/*<Link to="/profile"><a href="#" className="btn head-btn1">Profile</a></Link>*/}
                                                {/*<a href="#" onClick={handleShow} className="btn head-btn2">Login</a>*/}
                                                {/*<Link to="/register">Register</Link>*/}
                                                {/*<Link  style={{textDecoration: 'none'}}  to="/register">*/}
                                                {/*    <li><a href="contact.html">Register</a></li>*/}

                                                {/*    /!*<button className="custom-btn btn-9">Register</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*!/*/}
                                                {/*</Link>*/}
                                                {/*<Link style={{textDecoration: 'none'}} to="/login">*/}
                                                {/*    <li><a href="contact.html">Login</a></li>*/}

                                                {/*    /!*<button className="custom-btn btn-11">Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*!/*/}
                                                {/*</Link>*/}


                                                {/*<button className="custom-btn btn-9">Register</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                                {/*<button className="custom-btn btn-11">Login*/}
                                                {/*    <div className="dot"></div>*/}
                                                {/*</button>*/}
                                            </div>




                                        </div>
                                    </div>
                                    {/*<Route path="/register" exact component={Register}/>*/}
                                    {/*<Route path="/feed" exact component={Feed}/>*/}
                                    {/*<Route path="/login" exact component={Login}/>*/}
                                    {/*    <Switch>*/}
                                    {/*        <Route  exact path="/" component={Home}/>*/}
                                    {/*        <Route  exact path="/register" component={Register}/>*/}
                                    {/*        <Route  exact path="/login" component={Login}/>*/}
                                    {/*        <Route  exact path="/feed" component={Feed}/>*/}

                                    {/*    </Switch>*/}

                                {/*</Router>*/}

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

  {/*Modale For Login Start !*/}

            {/*<Modal show={show} onHide={handleClose}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Modal heading</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={handleClose}>*/}
            {/*            Close*/}
            {/*        </Button>*/}
            {/*        <Button variant="primary" onClick={handleClose}>*/}
            {/*            Save Changes*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}


  {/*Modale For Login End !*/}

        </div>
    )
}

export default Header
