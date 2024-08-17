import mongoose from 'mongoose'

const restaurantSchema = mongoose.Schema(
    {
        name:{type:String,required:true},
        registrationNo:{type:String,required:true},
        contactPerson:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        contactNo:{type:String,required:true},
        address:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        country:{type:String,required:true},
        postal:{type:String,required:true},
        password:{type:String,required:true},
        safetyCertification:String,
        website:String
    }
)

const restaurantModel=mongoose.model("ListedRestauarnts",restaurantSchema);
export default restaurantModel;