import React from 'react'

export const CardGift = ({id,title,url}) => {
    return (
        <div className="card">
            <img src={url}/>
            <p>{title}</p>
        </div>
    )
}
