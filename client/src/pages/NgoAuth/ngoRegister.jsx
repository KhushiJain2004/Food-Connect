import './NgoAuth.css'

export default function NgoRegister()
{
    return(
        <div className="bg">
        <div className="ngoRegister">
            <h1>Registration Form</h1>
            <div className="generalInfo">
                <div className="box">
                    <input type="text" placeholder='Ngo Name' name="name" required/>
                    <input type="text" placeholder='Registration Number' name="registrationNo" required />
                    <input type="text" placeholder='Website' name="website" />
                </div>
            </div>
            <div className="address generalInfo">
                <div className="box set">
                    <input type="text" placeholder='address' name="address" required/>
                    <input type="text" placeholder='city' name="city" required />
                    <input type="text" placeholder='state' name="state" />
                    <input type="text" placeholder='country' name="country" />
                    <input type="text" placeholder='postal' name="postal" />
                </div>
            </div>
            <div className="contact generalInfo">
                <div className="box">
                    <input type="text" placeholder='Contact Person Name' name="contactPerson" required/>
                    <input type="text" placeholder='Contact Number' name="contactNo" required />
                    <input type="text" placeholder='email' name="email" />
                </div>
            </div>
            <div className="password generalInfo">
                <div className="box pass">
                    <input type="password" placeholder=' Enter Password' name="password" required/>
                    <input type="password" placeholder='Confirm Password' name="confirmPassword" required />
                </div>
            </div>
            <button className='submit'>Submit</button>
        </div>
        </div>
    )
}