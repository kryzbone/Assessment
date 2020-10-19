import React, {useRef, useContext, useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import { MyContext } from '../App';
import { MEDICAL } from '../reduce';
import Collapsible from './Collapsible';
import M from "materialize-css";

function MedicalForm() {
    const {state, dispatch} = useContext(MyContext)
    const [dragDrop, setDragDrop ] = useState({
        dOver: null,
        fileName: null
    })

    useEffect(() => {
        M.AutoInit();
    }, [])

    //ref init
    const fileInput = useRef();
    const dropBox = useRef()


    //file upload
    const handleUpload = () => {
        fileInput.current.click()
    }

    const handleChange  = (e) => {
        const {name, value} = e.target;
        
        dispatch({
            type: MEDICAL,
            payload: { name, value }
        })
    }

    //Previous btn
    const handlePrev = (e) => {
        e.preventDefault() 
    }

    //Drag n Drop
    const dragOver = (e) => {
        e.preventDefault()
        setDragDrop({
            ...dragDrop,
            dOver: true
        })
    }

    //when drag ends
    const dragEnd = (e) => {
        e.preventDefault()
        setDragDrop({
            ...dragDrop,
            dOver: null
        })
    }

    //when file is dropped
    const drop = (e) => {
        e.preventDefault()
        dispatch({
            type: MEDICAL,
            payload: { name:"group1-bloodTest-result", value: e.dataTransfer.files[0]}
        })
        setDragDrop({
            ...dragDrop,
            fileName: e.dataTransfer.files[0].name
        })
    }


    return (
        <div className="col s9"> 
            <div className="main white">
                <form>
                    <div className="group">
                        <p className="group-title">Do You suffer fron any of the following?</p>
                        <ul className="collapsible">
                            <Collapsible 
                                title="Diabetes" 
                                change={handleChange} 
                                group="group1" 
                                disease="diabetes" 
                                status={state.medical.group1.diabetes.status} 
                            />

                            <Collapsible 
                                title="Blood Pressure Problems" 
                                change={handleChange} 
                                group="group1" 
                                disease="hypertension" 
                                status={state.medical.group1.hypertension.status} 
                            />

                            <Collapsible 
                                title="Thyriod Disease" 
                                change={handleChange} 
                                group="group1" 
                                disease="thyriod" 
                                status={state.medical.group1.thyriod.status}
                            />

                            <Collapsible 
                                title="Insulin Resistance" 
                                change={handleChange} 
                                group="group1" 
                                disease="insulinResistance" 
                                status={state.medical.group1.insulinResistance.status} 
                            />

                            <Collapsible 
                                title="Kidney Disease" 
                                change={handleChange} 
                                group="group1" 
                                disease="kidney" 
                                status={state.medical.group1.kidney.status} 
                            />

                            <Collapsible 
                                title="Fatty Liver Disease" 
                                change={handleChange} 
                                group="group1" 
                                disease="fattyLiver" 
                                status={state.medical.group1.fattyLiver.status}
                            />

                            <Collapsible 
                                title="Food Dislikes and Allergies" 
                                change={handleChange} 
                                group="group1" 
                                disease="foodAllergies" 
                                status={state.medical.group1.foodAllergies.status} 
                            />

                        </ul>

                         {/* File upload */}
                        <div className="row file"> 
                            <div className="col s6" >
                                <label>When was you last blood test</label>
                                <div className="inp-f ">
                                    <input type="date" name="group1-bloodTest-date" className="browser-default" onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="col s6" >
                                <label>Upload Test Results</label>
                                <div 
                                    className={dragDrop.dOver? "dragbox solid": "dragbox"} 
                                    ref={dropBox} 
                                    onClick={handleUpload} 
                                    onDragEnd={dragEnd} 
                                    onDragLeave={dragEnd}
                                    onDragOver={dragOver} 
                                    onDrop={drop}
                                >
                                    <span className="grey-text">{dragDrop.fileName? dragDrop.fileName : "Drag n Drop or Click to Add File"}</span>
                                    <input type="file" ref={fileInput} className="browser-default file-input"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                   {/* =============================== End of Section 1 ======================================= */}
                    
                    <hr/>

                    {/* ============================= Start of Section 2 ====================================== */}

                    <div className="group">
                        <p className="group-title">Do You suffer fron any of the following?</p>
                        <ul className="collapsible">
                            <Collapsible 
                                title="High Cholesterol Level" 
                                change={handleChange} 
                                group="group2" 
                                disease="cholesterol" 
                                status={state.medical.group2.cholesterol.status} 
                            />

                            <Collapsible 
                                title="High Triglycerides Level" 
                                change={handleChange} 
                                group="group2" 
                                disease="triglycerides" 
                                status={state.medical.group2.triglycerides.status}  
                            />
                            <Collapsible 
                                title="Iron Deficiency" 
                                change={handleChange} 
                                group="group2" 
                                disease="iron" 
                                status={state.medical.group2.iron.status} 
                            />

                            <Collapsible 
                                title="Vitamin D Deficiency" 
                                change={handleChange} 
                                group="group2" 
                                disease="vitaminD" 
                                status={state.medical.group2.vitaminD.status}  
                            />

                        </ul>


                        {/* Other Deficiency */}
                        <div className="row file"> 
                            <div className="col s12" >
                                <label>Any other deficiencies?</label>
                                <div className="inp-f ">
                                    <input type="text" name="group2-others-extra" className="browser-default" onChange={handleChange}/>
                                </div>
                            </div>
                        </div>

                    </div>

                     {/* =============================== End of Section 2 ======================================= */}
                    
                     <hr/>

                    {/* ============================= Start of Section 3 ====================================== */}


                    <div className="group">
                        <p className="group-title">Do You suffer fron any of the following?</p>
                        <ul className="collapsible">
                            <Collapsible 
                                title="Constipation" 
                                change={handleChange} 
                                group="group3" 
                                disease="constipation" 
                                status={state.medical.group3.constipation.status} 
                            />

                            <Collapsible 
                                title="Bloating" 
                                change={handleChange} 
                                group="group3" 
                                disease="bloating" 
                                status={state.medical.group3.bloating.status} 
                            />

                            <Collapsible 
                                title="Gluten Intolerance" 
                                change={handleChange} 
                                group="group3" 
                                disease="glutenIntolerance" 
                                status={state.medical.group3.glutenIntolerance.status}  
                            />

                            <Collapsible 
                                title="Lactose Intolerance" 
                                change={handleChange} 
                                group="group3" 
                                disease="lactoseIntolerance" 
                                status={state.medical.group3.lactoseIntolerance.status}  
                            />
                            
                        </ul>
                    </div>

                    {/* Other Deficiency */}
                    <div className="row save"> 
                        <div className="col s6 offset-s6" >
                            <div className="right"> 
                                <button className="btn waves-effect waves-teal grey-text text-darhen-3  white prev" onClick={handlePrev}> Previous </button>
                                <Link to="/report">
                                    <button className="btn waves-effect waves-light light-blue accent-3"> Save </button>
                                </Link>
                            </div> 
                        </div>
                    </div>

                    {/* ============================= End of Section 3 ====================================== */}
                    
                </form>
            </div>
        </div>
    )
}

export default MedicalForm
