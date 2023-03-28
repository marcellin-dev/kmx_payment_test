import React from 'react';

const MyInputField = (props:any) => {

    const {onChange,value, label, type} = props

    function changeValue(e:any){
        let value = e.target.value;
        onChange(value)
    }

    return (
        <div className="my-input">
            <div className="label">{label}</div>
            <input onChange={changeValue} value={value}  type={type}  />
        </div>
    );
};

export default MyInputField;