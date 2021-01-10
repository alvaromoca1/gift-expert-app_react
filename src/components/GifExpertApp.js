import React, {useState} from 'react'
import {AddCategory} from './AddCategory'
import {GiftGrid} from './GiftGrid'

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['One punch']);
    
    return (
        <div className="container">
            <h2>GiftExpertApp</h2>   
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => {
                        return (
                            <GiftGrid 
                            key={category}
                            category={category}/>
                        );
                    })
                }
            </ol>   
        </div>
    )
}

export default GifExpertApp
