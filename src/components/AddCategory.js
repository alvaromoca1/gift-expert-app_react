import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('');

    const escuchaInput =(e)=>{
        setInputValue(e.target.value);
    }

    const acccionEnvio =(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            
            setCategories((cats)=>[...cats,inputValue]);
            setInputValue('');
            console.log("Se realizo el envio corecto");
        }

    }


    return (
        <form onSubmit={acccionEnvio}>
            <input type="text" 
            value={inputValue}
            onChange={escuchaInput}/>
        </form>
    )
}
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired,
}
