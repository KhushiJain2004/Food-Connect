import ngoModel from "../Models/NgoModel.js"

export const ngoRegister=async (req,res)=>
{
    try {
        const ngo=new ngoModel(
            {
                name:req.name,
                registrationNo:req.registrationNo,
                ContactPerson :req.contactPerson,
                email :req.email,
                contactNo :req.contactNo,
                address :req.address,
                city :req.city,
                state :req.state,
                country :req.country,
                postal :req.postal,
                password :req.password,
                website:req.website
            }
        ) 
        const user=await ngo.save();
        res.json(user)
    } catch (error) {
        
    }
}