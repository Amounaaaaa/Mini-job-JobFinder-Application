import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "./components/componentsTemplates/Header";
import store from "./store/store";
import {Provider} from "react-redux";
import UploadCv from "./pages/UploadCv";
import PrivateRoute from "./components/PrivateRoute";
import TestimonialShareExperince from "./components/componentsTemplates/TestimonialShareExperince";
import Contact from './components/componentsTemplates/Contact';
import FindAJob from './components/componentsTemplates/FindAJob';
import Profile from "./pages/Profile";
import Inscription from "./pages/Inscription";

ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
           <BrowserRouter>
               <Header/>
               <Switch>
                   <PrivateRoute exact path="/uploadCv" component={UploadCv} />
                   <PrivateRoute exact path="/profile" component={Profile} />
                   <Route exact path="/shareexperience" component={TestimonialShareExperince} />
                   <Route exact path="/" component={App} />
                   <Route exact path="/contact" component={Contact} />
                   <Route exact path="/finajob" component={FindAJob} />
                   <Route exact path="/register" component={Register} />
                   <Route exact path="/inscription" component={Inscription} />
                   <Route exact path="/login" component={Login} />
                   <Route exact path="/profile" component={Profile} />


               </Switch>
           </BrowserRouter>
       </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
