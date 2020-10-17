import React, {useRef, useContext, useState} from 'react'
import { MyContext } from '../App';
import { MEDICAL } from '../reduce';

function MedicalForm() {
    const {state, dispatch} = useContext(MyContext)
    const [dragDrop, setDragDrop ] = useState({
        dOver: null,
        fileName: null
    })

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


    //save info
    const handleSave = (e) => {
        e.preventDefault()
    }

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

    const dragEnd = (e) => {
        e.preventDefault()
        setDragDrop({
            ...dragDrop,
            dOver: null
        })
    }

    const drop = (e) => {
        e.preventDefault()
        dispatch({
            type: MEDICAL,
            payload: { name:"testResult", value: e.dataTransfer.files[0]}
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
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Diabetes</div>
                                <div className="collapsible-body">

                                    <label>Status*</label>
                                    <select name="diabetesStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false} >No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="diabetesYear" 
                                            disabled={state.medical.diabetesStatus === "false"} 
                                            className="browser-default" 
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.diabetesStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            type="text" 
                                            name="diabetesType"
                                            disabled={state.medical.diabetesStatus === "false"} 
                                            className="browser-default"
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.diabetesStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            type="text" 
                                            name="diabetesMedication" 
                                            disabled={state.medical.diabetesStatus === "false"}
                                            className="browser-default"
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Blood Pressure Problems</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="bloodStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="bloodYear" 
                                            className="browser-default" 
                                            disabled={state.medical.bloodStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.bloodStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            type="text" 
                                            name="bloodType" 
                                            className="browser-default"
                                            disabled={state.medical.bloodStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.bloodStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            type="text" 
                                            name="bloodMedication" 
                                            className="browser-default"
                                            disabled={state.medical.bloodStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">thyriod Disease</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="thyriodStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="thyriodYear"
                                            className="browser-default"
                                            disabled={state.medical.thyriodStatus === "false"} 
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.thyriodStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            type="text" 
                                            name="thriodType" 
                                            className="browser-default"
                                            disabled={state.medical.thyriodStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.thyriodStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            type="text" 
                                            name="thriodMedication" 
                                            className="browser-default" 
                                            disabled={state.medical.thyriodStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Insulin Resistance</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="insulinStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            name="insulinYear" 
                                            type="date" 
                                            className="browser-default" 
                                            disabled={state.medical.insulinStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.insulinStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            type="text" 
                                            name="insulinType" 
                                            className="browser-default"
                                            disabled={state.medical.insulinStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.insulinStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            name="insulinMedication" 
                                            type="text" 
                                            className="browser-default"
                                            disabled={state.medical.insulinStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Kidney Disease</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="kidneyStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="kidneyYear" 
                                            className="browser-default" 
                                            disabled={state.medical.kidneyStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.kidneyStatus === "false"?"inp-f grey lighten-2" : "inp-f" }>
                                        <input 
                                            type="text" 
                                            name="kidneyType" 
                                            className="browser-default"
                                            disabled={state.medical.kidneyStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.kidneyStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="kidneyMedication" 
                                            className="browser-default"
                                            disabled={state.medical.kidneyStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Fatty Liver Disease</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="liverStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="liverYear" 
                                            className="browser-default" 
                                            disabled={state.medical.liverStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.liverStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="liverType" 
                                            className="browser-default"
                                            disabled={state.medical.liverStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.liverStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text"
                                            name="liverMedication" 
                                            className="browser-default"
                                            disabled={state.medical.liverStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Food Dislikes and Allergies</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="allergiesStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="allergiesYear" 
                                            className="browser-default" 
                                            disabled={state.medical.allergiesStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.allergiesStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="allergiesType" 
                                            className="browser-default"
                                            disabled={state.medical.allergiesStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.allergiesStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="allergiesMedication" 
                                            className="browser-default"
                                            disabled={state.medical.allergiesStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                        </ul>

                         {/* File upload */}
                        <div className="row file"> 
                            <div className="col s6" >
                                <label>When was you last blood test</label>
                                <div className="inp-f ">
                                    <input type="date" name="bloodTest" className="browser-default" onChange={handleChange}/>
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
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">High Cholesterol Level</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="cholesterolStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="cholesterolYear" 
                                            className="browser-default" 
                                            disabled={state.medical.cholesterolStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.cholesterolStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="cholesterolType" 
                                            className="browser-default"
                                            disabled={state.medical.cholesterolStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.cholesterolStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="cholesterolMedication" 
                                            className="browser-default"
                                            disabled={state.medical.cholesterolStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">High Triglycerides Level</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="triglyceridesStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="triglyceridesYear" 
                                            className="browser-default" 
                                            disabled={state.medical.triglyceridesStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.triglyceridesStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="triglyceridesType" 
                                            className="browser-default"
                                            disabled={state.medical.triglyceridesStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.triglyceridesStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="triglyceridesMedication" 
                                            className="browser-default"
                                            disabled={state.medical.triglyceridesStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Iron Deficiency</div>
                                <div className="collapsible-body">

                                        <label>Status*</label>
                                        <select name="ironStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                            <option disabled value="">Select Status</option>
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                        <br/>

                                        <label>Diagnosis Year</label>
                                        <div className="inp-f">
                                            <input 
                                                type="date" 
                                                name="ironYear" 
                                                className="browser-default" 
                                                disabled={state.medical.ironStatus === "false"}
                                            />
                                        </div>
                                        <br/>

                                        <label>Diagnosis Type</label>
                                        <div className={state.medical.ironStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                            <input 
                                                type="text" 
                                                name="ironType" 
                                                className="browser-default"
                                                disabled={state.medical.ironStatus === "false"}
                                            />
                                        </div>
                                        <br/>

                                        <label>Medication</label>
                                        <div className={state.medical.ironStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                            <input 
                                                type="text" 
                                                name="ironMedication" 
                                                className="browser-default"
                                                disabled={state.medical.ironStatus === "false"}
                                            />
                                        </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4"> Vitamin D Deficiency </div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="vitaminStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="vitaminYear" 
                                            className="browser-default" 
                                            disabled={state.medical.vitaminStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.vitaminStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="vitaminType" 
                                            className="browser-default"
                                            disabled={state.medical.vitaminStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.vitaminStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="vitaminMedication" 
                                            className="browser-default"
                                            disabled={state.medical.vitaminStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                        </ul>


                        {/* Other Deficiency */}
                        <div className="row file"> 
                            <div className="col s12" >
                                <label>Any other deficiencies?</label>
                                <div className="inp-f ">
                                    <input type="text" name="otherDeficiency" className="browser-default" onChange={handleChange}/>
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
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Constipation</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="constipationStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="constipationYear" 
                                            className="browser-default" 
                                            disabled={state.medical.constipationStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.constipationStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="constipationType" 
                                            className="browser-default"
                                            disabled={state.medical.constipationStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.constipationStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="constipationMedication" 
                                            className="browser-default"
                                            disabled={state.medical.constipationStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4">Bloading</div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="bloatingStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="bloatingYear" 
                                            className="browser-default" 
                                            disabled={state.medical.bloatingStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.bloatingStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="bloatingType" 
                                            className="browser-default"
                                            disabled={state.medical.bloatingStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.bloatingStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="bloatingMedication" 
                                            className="browser-default"
                                            disabled={state.medical.bloatingStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4"> Gluten Intolerance </div>
                                <div className="collapsible-body">

                                    <label>Status*</label>
                                    <select name="glutenStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option value="" disabled>Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="glutenYear" 
                                            className="browser-default" 
                                            disabled={state.medical.glutenStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.glutenStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="glutenType" 
                                            className="browser-default"
                                            disabled={state.medical.glutenStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.glutenStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="glutenMedication" 
                                            className="browser-default"
                                            disabled={state.medical.glutenStatus === "false"}
                                        />
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className="collapsible-header blue-grey lighten-4"> Lactose Intolerance </div>
                                <div className="collapsible-body">
                                    
                                    <label>Status*</label>
                                    <select name="LactoseStatus" className="browser-default" defaultValue="" onChange={handleChange} required>
                                        <option disabled value="">Select Status</option>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                    <br/>

                                    <label>Diagnosis Year</label>
                                    <div className="inp-f">
                                        <input 
                                            type="date" 
                                            name="LactoseYear" 
                                            className="browser-default" 
                                            disabled={state.medical.LactoseStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Diagnosis Type</label>
                                    <div className={state.medical.LactoseStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="LactoseType" 
                                            className="browser-default"
                                            disabled={state.medical.LactoseStatus === "false"}
                                        />
                                    </div>
                                    <br/>

                                    <label>Medication</label>
                                    <div className={state.medical.LactoseStatus === "false"?"inp-f grey lighten-2" : "inp-f"}>
                                        <input 
                                            type="text" 
                                            name="LactoseMedication" 
                                            className="browser-default"
                                            disabled={state.medical.LactoseStatus === "false"}
                                        />
                                    </div>

                                </div>
                            </li>
                            
                        </ul>
                    </div>

                    {/* Other Deficiency */}
                    <div className="row save"> 
                        <div className="col s3 offset-s9" >
                            <button className="btn waves-effect waves-teal grey-text text-darhen-3  white prev" onClick={handlePrev}> Previous </button>
                            <button className="btn waves-effect waves-light light-blue accent-3" onClick={handleSave}> Save </button>
                        </div>
                    </div>

                    {/* ============================= End of Section 3 ====================================== */}
                    
                </form>
            </div>
        </div>
    )
}

export default MedicalForm
