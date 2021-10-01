import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import design from '../components/design.css'

const Botcard = ({D}) => {
    const dispatch = useDispatch();
    return (
        (
            <div className="rendering-bots">
            
                <div className='Bot-Name'>{D.bot}</div>
                <div className='Index-value'>Index: <br /> {D.index_value}</div>
                <div className='CAGR'><p className="CAGR-TEXT">CAGR : <br /> {D.cagr}%</p></div>
                <div className='Button-Area'>
                    <Link to={`/Individualbots/${D.id}`} exact>
                        <button >View Algo</button>
                        </Link> <br />
                        {/* <Switch>
                            <Route path='/Individualbots.js' exact >< Individualbots/></Route>
                        </Switch> */}
                    <button onClick={()=>dispatch({type:'ADD'})}>Buy</button>
                </div>
            </div>)
    )
}

export default Botcard
