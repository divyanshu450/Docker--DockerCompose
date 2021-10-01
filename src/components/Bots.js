import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import design from '../components/design.css'
import Botcard from './Botcard'

//import { Individualbots } from './Individualbots'

export const Bots = () => {
    //const dispatch = useDispatch();
    const data = useSelector(state => state.bots);
    //console.log(data)
    // const viewalgo=(event)=>
    // {
    //     event.preventDefault();
    //     <Link to="/" />
    //     dispatch({
    //         type:
    //     })
    // }
   
    return (
        <div className='Bot-Container'>
            <h5>Select the best suited Algorithm </h5>
            {data.map((D, I) => {
                return (
                    
                        <Botcard key={I} D={D}/>
                    )
            })}


        </div>
    )
}
