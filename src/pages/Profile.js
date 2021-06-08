import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {loadUser} from "../actions/authActions";
import '../css/profile.css'
import {Container, Row} from "react-bootstrap";

const Profile = () => {
    const auth=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const Hello=()=>{
        console.log("hello ..................")
    }// useEffect(()=>{
    //     dispatch(loadUser())
    // },[]);

    return (
        <Container>
            <Row>
                <div>
                    <div>

                        <div className="main-container">
                            {/*HEADER */}
                            <header className="block">
                            </header>
                            {/*LEFT-CONTAINER*/}
                            {/*MIDDLE-CONTAINER */}
                            <div className="middle-container container">
                                <div className="profile block">
                                    <a className="add-button" href="#28"/><span className="icon entypo-plus scnd-font-color"/>
                                    <div className="profile-picture big-profile-picture clear">
                                        <img width="150px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"/>
                                        {/*<i className="bi bi-camera"></i>*/}
                                        {/*<i className="bi bi-camera-fill"></i>*/}

                                    </div>
                                    <div >
                                        <i  onClick={Hello} className="fas fa-camera"></i>

                                    </div>
                                    {auth.user && <h1 className="user-name">{auth.user.firstname} {auth.user.lastname}</h1>}
                                    <div className="profile-description">
                                        <p className="scnd-font-color"/>{auth.user.email}
                                    </div>
                                    <ul className="profile-options horizontal-list">
                                        <li><a className="comments" href="#40"/><p/><span
                                            className="icon fontawesome-comment-alt scnd-font-color"></span>+216 {auth.user.phone}
                                        </li>
                                        <li><a className="views" href="#41"/><p/><span
                                            className="icon fontawesome-eye-open scnd-font-color"></span>
                                            {/*841*/}
                                        </li>
                                        <li><a className="likes" href="#42"/><p/><span
                                            className="icon fontawesome-heart-empty scnd-font-color"></span>
                                            {/*49*/}
                                        </li>
                                    </ul>
                                </div>
                                {/*<div className="weather block clear">*/}
                                {/*    <h2 className="titular"><span*/}
                                {/*        className="icon entypo-location"></span><strong>CLUJ-NAPOCA</strong>/RO</h2>*/}

                                {/*</div>*/}

                            </div>
                        </div>
                        {/*end main-container */}
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Profile
