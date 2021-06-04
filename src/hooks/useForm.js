// write your custom hook here to control your checkout form
import React, {useState} from 'react'


export const useForm = initialValue => {
    //setting state
    const [value, setValue] = useState(initialValue); 
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

    // Event Handlers
    const handleChanges = updatedValue => {
        setValue(updatedValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    // returning array of values to be accessed by form
    return ([ showSuccessMessage, value, handleChanges, handleSubmit ])
}