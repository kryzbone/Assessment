import React from 'react'
import FormSwitch from './FormSwitch'

function FormPage(props) {
    return (
      <div className="container">
        <div className="row">
            <div className="col s12">
              <div className="white head">
                <h3>Add Customer</h3>
              </div>   
            </div>
          
            <div className="col s3"> 
              <div className="side white">
                <div className="collection"> 
                  <a href="/hello" className="collection-item grey-text link">Login Information</a>
                  <a href="/" className="collection-item grey-text">Personal Information</a>
                  <a href="/" className="collection-item grey-text">Delivery information</a>
                  <a href="/" className="collection-item grey-text active">Medical Information</a>
                  <a href="/" className="collection-item grey-text">Lifestyle Information</a>
                  <a href="/" className="collection-item grey-text">Goal Settings</a>
                  <a href="/" className="collection-item grey-text">Subscription</a>
                </div>
              </div>
            </div>

            <FormSwitch />
            
        </div>
      </div>
    )
}

export default FormPage

