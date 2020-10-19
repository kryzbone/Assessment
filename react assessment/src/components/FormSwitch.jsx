import React from 'react'
import MedicalForm from './MedicalForm';

function FormSwitch({form}) {
    
   switch (form) {
       case "medical":
           return <MedicalForm />
   
       default:
           return <MedicalForm />;
   }
}

export default FormSwitch
