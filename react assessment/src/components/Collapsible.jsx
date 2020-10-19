import React from 'react'


export default function Collapsible(props) {
    const {title, change, group, disease, status} = props
    
    
    return (
        <li>
            <div className="collapsible-header blue-grey lighten-4"> {title} </div>
            <div className="collapsible-body">
                
                <label>Status*</label>
                <select name={`${group}-${disease}-status`} className="browser-default" defaultValue="" onChange={change} required>
                    <option disabled value="">Select Status</option>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>
                <br/>

                <label>Diagnosis Year</label>
                <div className="inp-f">
                    <input 
                        type="date" 
                        name={`${group}-${disease}-year`}
                        className="browser-default" 
                        onChange={change}
                        disabled={status === "false"}
                    />
                </div>
                <br/>

                <label>Diagnosis Type</label>
                <div className={status === "false"?"inp-f grey lighten-2" : "inp-f"}>
                    <input 
                        type="text" 
                        name={`${group}-${disease}-type`}
                        className="browser-default"
                        onChange={change}
                        disabled={status === "false"}
                    />
                </div>
                <br/>

                <label>Medication</label>
                <div className={status === "false"?"inp-f grey lighten-2" : "inp-f"}>
                    <input 
                        type="text" 
                        name={`${group}-${disease}-medication`} 
                        className="browser-default"
                        onChange={change}
                        disabled={status === "false"}
                    />
                </div>

            </div>
        </li>
    )
}
