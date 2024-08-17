import './Home.css'
// import Footer from '../../components/Footer/Footer'

export default function Home()
{
    return(
        <div className="home">
            <div className="hero">
                <div className="text">
                    <div className="tag">
                        <h1>Where Every Meal Matters!</h1>
                        <h2>Connect , Donate and Nourish :)</h2>
                    </div>
                    <div className='connect'>
                        <button>Get Started!</button>
                    </div>
                </div>
                <div className="img">
                <img src="/home3.png" alt="" />
                </div>
            </div>
            <div className="intro">
                <div className="introLeft">
                    {/* <h2>Serving Communities , Reducing Waste!</h2> */}
                    <h2>Connecting Restaurants and NGOs</h2>
                    <h3>Reducing waste and fighting Hunger!</h3>
                    <img src="/image.png" className="imageFixed" alt="" />
                    {/* <h3></h3> */}
                    <div className='bottomImages'>
                        <img src="/food.jpg" alt="" className='bottomImage' />
                        <img src="/food3.jpg" alt="" className='bottomImage' />
                    </div>
                </div>
                <div className="introRight">
                    <div className='introText'>
                        <p><b>Harvest-Hope</b> is a platform dedicated to bridging the gap between restaurants with surplus food
                            and NGOs striving to address hunger in our communities. Our mission is to reduce food waste while providing 
                            much-needed support to those in need.</p>
                        <p> If you are a <b>restaurant</b> you can join us and effortlessly list available food items, ensuring that no meal at your place goes to waste.
                            If you are <b>NGO</b> you can simply browse these listings and request donations. 
                            This collaborative approach not only helps reduce food waste but also supports the fight against hunger!.</p>
                        <p> What are you waiting for JOIN NOW!</p>
                        </div>
                </div>
            </div>
            <div className="work">
                    <h1>How It Works!</h1>
                    <div className="flowContainer">
                    <div className="flow">
                            <h1>1</h1>
                            <img src="/icon1.png" alt="" />
                            <div className="flowText">
                            <h2>Restaurants List excess food For Donation</h2>
                            </div>
                        </div>
                        <div className="flow">
                            <h1>2</h1>
                            <img src="/icon2.png" alt="" />
                            <h2>Ngos view and accept the donation</h2>
                        </div>
                        <div className="flow">
                            <h1>3</h1>
                            <img src="/icon3.png" alt="" />
                            <h2>Pickup and distribution </h2>
                        </div>
                    </div>
            </div>
        </div>
    )
}