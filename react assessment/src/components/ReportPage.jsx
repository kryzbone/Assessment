import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'
import { User, Crosshair, Calendar, Briefcase, Settings, FileText, Printer} from "react-feather"

export default function ReportPage() {
    const {state} = useContext(MyContext)
    const { group1, group2, group3 } = state.medical
    const foodAllergies = group1.foodAllergies.status === "true"
    const bloodTest = group1.bloodTest.result


    return (
        <>
            <div className="row valign-wrapper report-head">
                <div className="col s6 heading">
                    <div className="white-text ">
                        <h2>Wayne Rooney</h2>
                        <h4>TONE UP 1400</h4>
                    </div>
                </div>
                <div className="col s6 heading">
                    <button className="btn white blue-text text-accent-3 right">Edit ProfileS</button>
                </div>
            </div>

            <div className="report-body container white">
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s2 black-text"> <a href="#user" className="black-text"> <User/> <span>User Info </span> </a></li>
                            <li className="tab col s2"> <a href="#goal" className="black-text"> <Crosshair /> Goals </a></li>
                            <li className="tab col s2"> <a href="#apt" className="black-text"> <Calendar /> Appointments </a></li>
                            <li className="tab col s2"> <a href="#selection" className="black-text"> <FileText /> Selection </a></li>
                            <li className="tab col s2"> <a href="#finance" className="black-text"> <Briefcase /> Finance </a></li>
                            <li className="tab col s2"> <a href="#settings" className="black-text"> <Settings/> Settings </a></li>
                        </ul>
                    </div>

                    <div id="user" className="col s12 ">
                        <div className="prt">
                            <div className="col s2 offset-s10">
                                <button className="btn black white-text valign-wrapper print-btn"> <Printer className="print" /> Print </button>
                            </div>
                        </div> 

                        <div className="col s10 offset-s1 personal">
                            <h3>Personal Information</h3>

                            <div className="col s10 offset-s1 sec"> 
                                <div className="col s12">
                                    <div className="col s4">
                                        <h4>Mobile</h4>
                                        <p className="grey-text">024456479</p>
                                    </div>
                                    <div className="col s4">
                                        <h4>Email</h4>
                                        <p className="grey-text">thisisme@gmail.com</p>
                                    </div>
                                    <div className="col s4">
                                        <h4>Nationality</h4>
                                        <p className="grey-text">ghananian</p>
                                    </div>                   
                                </div>

                                <div className="col s12">
                                
                                    <div className="col s4">
                                        <h4>Occupation</h4>
                                        <p className="grey-text">Diver</p>
                                    </div>
                                    <div className="col s4">
                                        <h4>Date of Birth </h4>
                                        <p className="grey-text">10/20/1990</p>
                                    </div>
                                    <div className="col s4">
                                        <h4>Gender</h4>
                                        <p className="grey-text">Ghananian</p>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        <div className="col s10 offset-s1 medical">
                            <h3>Medical Information</h3>

                            <table className="highlight z-depth-1">
                              
                                <thead>
                                    <tr>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0</th>
                                    </tr>
                                    <tr className="light-blue grey-text lighten-5">
                                        <th>SUFFER FROM</th>
                                        <th>STATUS </th>
                                        <th>YEAR OF DIAGNOSIS</th>
                                        <th>TYPE</th>
                                        <th>MEDICATION</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Object.keys(group1).filter(key => !["foodAllergies", "bloodTest"].includes(key) ).map(key => {
                                            return (
                                                <tr key={key} className="grey-text">
                                                    <td>{key}</td>
                                                    <td> {group1[key].status==="true"? "Yes" : "No" } </td>
                                                    <td> {group1[key].year || "-"} </td>
                                                    <td> {group1[key].type || "-"} </td>
                                                    <td> {group1[key].medication || "-"} </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                            <div className="">
                                <div className="col s12 section"> 
                                    <div className="col s6">
                                        <h4>Food Allergies</h4>
                                        <p className="grey-text"> {foodAllergies? "yes": "none"} </p>
                                    </div>
                            
                                    <div className="col s6">
                                        <h4>Last Blood Test</h4>
                                        <p className="grey-text"> {
                                            bloodTest? ( <a href={bloodTest} download >Download Result</a>) : "-"
                                        } </p>
                                    </div>
                                </div>                              
                            </div>

                            <table className="highlight z-depth-2">
                                <thead>
                                    <tr>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0 </th>
                                        
                                    </tr>
                                    <tr className="light-blue grey-text lighten-5">
                                        <th>SUFFER FROM</th>
                                        <th>RANGE </th>
                                        <th>MEDICATION</th>
                                    </tr>
                                </thead>

                                <tbody>
                                   
                                    {
                                        Object.keys(group2).filter(key => !["others"].includes(key) ).map(key => {
                                            return (
                                                <tr key={key} className="grey-text">
                                                    <td>{key}</td>
                                                    <td> {"-"} </td>
                                                    <td> {group2[key].medication || "-"} </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                            <div className="col s12 section">     
                                <div className="col s4">
                                    <h4>Any Other Health Deficiency</h4>
                                    <p className="grey-text"> {group2.others.extra || "none"} </p>
                                </div>   
                            </div>

                            <table className="highlight z-depth-2"> 
                                <thead>
                                    <tr>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0 </th>
                                        <th className="opacity">0</th>
                                    </tr>
                                    <tr className="light-blue grey-text lighten-5">
                                        <th>SUFFER FROM</th>
                                        <th>STATUS </th>
                                        <th>YEAR OF DIAGNOSIS</th>
                                        <th>TYPE</th>
                                        <th>MEDICATION</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    
                                    {
                                        Object.keys(group3).map(key => {
                                            return (
                                                <tr key={key} className="grey-text">
                                                    <td>{key}</td>
                                                    <td> {group3[key].status==="true"? "Yes" : "No"} </td>
                                                    <td> {group3[key].year || "-"} </td>
                                                    <td> {group3[key].type || "-"} </td>
                                                    <td> {group3[key].medication || "-"} </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>
                  
                    </div>

                </div>
            </div>
        </>
    )
}
