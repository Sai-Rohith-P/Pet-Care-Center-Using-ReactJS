import React, {useState} from 'react'
import './Products.css'
import grainfreerecipe from '../imges/Productitems/grainfreerecipe.png'
import grainfreerecipe2 from '../imges/Productitems/grainfreerecipe2.png'
import naturedomain from '../imges/Productitems/naturalDomain.png'

import cartimg from '../imges/Productitems/cart.svg';
import eyeimg from '../imges/Productitems/eye.svg';

function Products() {
    const data = [
        {
            id: 11,
            img: naturedomain,
            name: "Nature's Domain",
            cost: "$200.00"
        },
        {
            id: 12,
            img: grainfreerecipe,
            name: "Grain's Natural Free",
            cost: "$140.00"
        },
        {
            id: 13,
            img: grainfreerecipe2,
            name: "Grain's Natural Free",
            cost: "$140.00"
        },
        {
            id: 14,
            img: naturedomain,
            name: "Nature's Domain",
            cost: "$200.00"
        }
        ,{
            id: 15,
            img: grainfreerecipe2,
            name: "Grain's Natural Free",
            cost: "$140.00"
        },
        {
            id: 16,
            img: naturedomain,
            name: "Nature's Domain",
            cost: "$200.00"
        },
        {
            id: 17,
            img: grainfreerecipe2,
            name: "Grain's Natural Free",
            cost: "$140.00"
        },
        {
            id: 18,
            img: naturedomain,
            name: "Nature's Domain",
            cost: "$200.00"
        }
    ]
    return (
        <div className='productpage'>
            <div className='productitemsbar'>
            {data.map((e1) => {
                let { img, name, cost,id } = e1;
                return <Productitems key={id} imgurl={img} names={name} costs={cost} />
            })}
        </div>
        </div>
    )
}


function Productitems({ imgurl, names, costs }) {
    const [showCartItem,setShowCartItem] = useState(false);

    const showcartblock = () =>{
        setShowCartItem(!false)
    }
    const hidecartblock = ()=>{
        setShowCartItem(!true)
    }
    return ( 
        <div onMouseOver={showcartblock} onMouseOut={hidecartblock} className='itemone'>
            <img src={imgurl}></img>
            <h3>{names}</h3>
            <p>{costs}</p>
         {
            showCartItem && ( <div  className='cartbox'>
                <div className='cartone'>
                    <img className='cartimg' src={cartimg}></img>
                </div>
                <div className='carttwo'>
                <img className='cartimg1' src={eyeimg}></img>
                </div>
            </div>)
         }
        </div>
    )
}
export default Products
