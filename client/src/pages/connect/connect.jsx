import './connect.css'
import { useNavigate } from 'react-router-dom'

export default function Connect()
{
    const navigate=useNavigate();
    return(
        <div className="connect">
            <h1>Join us Today!</h1>
            <div className="cards">
                <div className='card' onClick={()=>navigate('/')}>
                    <div className="image">
                        <img src="./rest.jpg" alt="" />
                    </div>
                    <div className="cardtext">
                        <h2>Restaurants</h2>
                        <p>List your excess food and help feed those in need.</p>
                    </div>
                </div>
                <div className='card' onClick={()=>navigate('/ngoRegister')}>
                    <div className="image">
                        <img src="./ngo.jpg" alt="" />
                    </div>
                    <div className="cardtext">
                        <h2>NGos</h2>
                        <p>Join us in minimizing food waste and addressing hunger.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}