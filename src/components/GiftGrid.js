import React from 'react'
import {CardGift} from './CardGift'
//import {getGifs} from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GiftGrid = ({category}) => {
    const apiKey="MeRwwQIvvD3vJ224ARE3psjpLoiXC2GK";

    const {data,loading}=useFetchGifs(category, apiKey);

    return (
        <div>
            <h3>{ category }</h3>
            {
                loading ? ('cargando...'):(
                    <div  className="card-grid">
                    {
                        data.map(image =>(
                            <CardGift 
                            key={ image.id }
                            {...image}/>
                        ))
                    }
                    </div>
                )
            }
            
        </div>
    )
}
