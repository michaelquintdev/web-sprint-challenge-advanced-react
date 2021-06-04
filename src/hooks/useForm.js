// write your custom hook here to control your checkout form

import React, {useState} from 'react'

export const useForm = initialValue => {
    const [value, setValue] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = updatedValue => {
        setValue(updatedValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return ([ showSuccessMessage, value, handleChanges, handleSubmit ])
}