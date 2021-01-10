import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs=(category,apiKey)=>{

    const [state, setState]=useState({
        date:[],
        loading:true,
    });

    useEffect(()=>{
        getGifs(category, apiKey)
        .then(imgs => {
            setState({
                data: imgs,
                loading:false,
            })
        });
    },[category])

    return state;
}