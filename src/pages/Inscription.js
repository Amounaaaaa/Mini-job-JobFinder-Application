import React, {useEffect, useState} from 'react'
import {Container, Row} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerUser, registerEmployer} from "../actions/authActions";

// Sates declarations :
const Inscription = ({history}) => {

    const [employer, setEmployer    ] = useState(false)
    const [candidat, setCandidat] = useState(false)
    const [selectedd,setSelectedd]=useState(true)

    const [info, setInfo] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
    })
    const [infoemp, setInfoemp] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        companyname:"",
        website:"",
        selectedFile:''
    })
    const [errors, setErrors] = useState(null)
    const auth = useSelector(state => state.auth)
    // Rester a l'ecoute si auth.isAuth est updated or not !
    useEffect(() => {
        if (auth.isAuth) {
            history.push("/")
        }
        if (auth.errors) {
            setErrors(auth.errors)
            // setTimeout(()=>{
            //     setErrors(null)
            // },5000)
        }
    }, [auth.isAuth, auth.errors])
    // const errors=useSelector(state=>state.auth.errors)
    const dispatch = useDispatch()
    /////// Employer Form Action dispatch
    const registerEmp = (e) => {
        e.preventDefault() //utiliser avec le form et pour eviter le chargement de page
        dispatch(registerEmployer(infoemp))
        // setInfo({
        //     firstname: "",
        //     lastname: "",
        //     phone: "",
        //     email: "",
        //     password: "",
        //     companyname:"",
        //     website:"",
        // })
    }
    const registerNow = (e) => {
        e.preventDefault() //utiliser avec le form et pour eviter le chargement de page
        dispatch(registerUser(info))
        setInfo({
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            password: "",
        })
    }
    //handlechangeemp
    const handlechangeemp = (e) => {
        setInfoemp({...infoemp, [e.target.name]: e.target.value})

    }
    const handlechange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }
    const handlechangeSelect =(e)=>{
      //  console.log(e.target.value)
        let role= e.target.value
        console.log("user role is ",role)
        if (role==="Employer")
        {
            // console.log("vous ete demande l'inscrit comme Employer !")
            setEmployer(true)
            setCandidat(false)
            setSelectedd(false)
        }
        else {
            setCandidat(true)
            setEmployer(false)
            setSelectedd(false)

            // console.log("vous ete demande l'inscrit comme Candidat !")

        }
    }
    return (
        <div>
            <Container>
                <Row>
                    {selectedd && <form style={{
                        width: "672px", display: 'block',
                        margin: '0 auto'
                    }} className="form-signin">
                        <h2 className="form-signin-heading">Inscription</h2>
                        <div className="form-group">
                            <h5 style={{color: "#0f6674"}}>Inscription Tant que</h5>
                            <select onChange={handlechangeSelect} className="form-select form-select-lg mb-3"
                                    aria-label=".form-select-lg example">
                                <option selected>Choose the type of account</option>
                                <option value="Employer">Employer</option>
                                <option value="Candidat">Canditat</option>
                            </select>
                        </div>
                    </form>}
                </Row>
            </Container>
                <Container style={{width: '800px', marginTop: '100px', background: '#e8e8e4'}}>
                    {/*Candidat  form Start */}
                    { candidat && <Row>
                        <div className="w3-container">   {/* w3-blue*/}
                            <h2> </h2>
                        </div>
                        <form onSubmit={registerNow} className="w3-container w3-card-4">
                            <br></br><br></br>
                            {/*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*/}
                            {errors && errors.map(el => <span style={{color: 'red'}}> {el.msg}</span>)}
                            <br></br>
                            <br></br>
                            Enter your information here (Candidat Space) &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span
                            style={{color: 'red'}}> (*) </span> <b>Required</b> <br></br><br></br><br></br>
                            <label className="w3-text-blue">First Name <span
                                style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp; &nbsp;  </label>
                            <input onFocus={() => setErrors(null)} required name="firstname" required type="text"
                                   className="form-control "
                                   id="exampleinput  onFocus={()=>setErrors(null)} Email1" aria-describedby="emailHelp"
                                   placeholder="Enter First name"
                                   onChange={handlechange}/><br></br>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                            <label className="w3-text-blue">Last Name <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input onFocus={() => setErrors(null)} name="lastname" required type="text"
                                   className="form-control" id="exampleinput  onFocus={()=>setErrors(null)} Email"
                                   placeholder="Enter Last name" onChange={handlechange}/> <br></br>
                            <label className="w3-text-blue">Email <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input onFocus={() => setErrors(null)} name="email" required type="email"
                                   className="form-control" id="myH1"
                                   placeholder="Enter your email" onChange={handlechange}/><br></br>
                            <label className="w3-text-blue">Password <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input onFocus={() => setErrors(null)} name="password" required type="password"
                                   className="form-control"
                                   id="exampleinput  onFocus={()=>setErrors(null)} Email1" placeholder="Enter password"
                                   onChange={handlechange}/><br></br>
                            <label className="w3-text-blue">Phone <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input onFocus={() => setErrors(null)} name="phone" required type="text"
                                   className="form-control" id="exampleinput  onFocus={()=>setErrors(null)} Email1"
                                   placeholder="Enter your phone number" onChange={handlechange}/><br></br>
                            <button className="custom-btn btn-1">Save now</button>
                            <br></br>
                            <br></br>
                            <br></br>
                        </form>


                    </Row>}
                    {/*Candidat  form End */}
                {/*//////////////////////////////////////// Employer Form //////////////////////////////////////////////////////////////////////////*/}



                    {/*Employer form Start */}
                    { employer && <Row>
                        <div className="w3-container">   {/* w3-blue*/}
                            <h2>
                            </h2>
                        </div>
                        <form onSubmit={registerEmp} className="w3-container w3-card-4">
                            <br></br><br></br>
                            {/*{errors? errors.map(el=><Alert variant="danger"> {el.msg}</Alert> ) : null}*/}
                            {errors && errors.map(el => <span style={{color: 'red'}}> {el.msg}</span>)}
                            <br></br>
                            <br></br>
                            Enter your information here (Employer space ) &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span
                            style={{color: 'red'}}> (*) </span> <b>Required</b> <br></br><br></br><br></br>
                            <label className="w3-text-blue">First Name <span
                                style={{color: 'red'}}> * &nbsp; &nbsp;</span> &nbsp; &nbsp;  </label>
                            <input  required name="firstname" required type="text" className="form-control "  aria-describedby="emailHelp"
                                   placeholder="Enter First name" onChange={handlechangeemp}/><br></br>
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>

                            <label className="w3-text-blue">Last Name <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input  name="lastname" required type="text"
                                   className="form-control"  placeholder="Enter Last name" onChange={handlechangeemp}/> <br></br>
                            <label className="w3-text-blue">Email <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  name="email" required type="email"
                                   className="form-control"
                                   placeholder="Enter your email" onChange={handlechangeemp}/><br></br>
                            <label className="w3-text-blue">Password <span
                                style={{color: 'red'}}>*</span>  &nbsp; &nbsp;  </label>
                            <input  name="password" required type="password"
                                   className="form-control"
                                   placeholder="Enter password"
                                   onChange={handlechangeemp}/><br></br>

                            <label className="w3-text-blue">Phone <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  name="phone" required type="text"
                                   className="form-control" placeholder="Enter your phone number" onChange={handlechangeemp}/><br></br>
                            <label className="w3-text-blue">Company Name <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  name="companyname" required type="text"
                                    className="form-control"  placeholder="Enter company name" onChange={handlechangeemp}/><br></br>
                            <label className="w3-text-blue">website <span style={{color: 'red'}}>*</span>  &nbsp; &nbsp;
                            </label>
                            <input  name="website" required type="text"
                                    className="form-control" placeholder="Enter website" onChange={handlechangeemp}/><br></br>
                            <button className="custom-btn btn-1">Save now</button>
                            <br></br>
                            <br></br>
                            <br></br>
                        </form>
                    </Row>}
                    {/*Employer form End */}
                </Container>

        </div>
    )
}

export default Inscription
