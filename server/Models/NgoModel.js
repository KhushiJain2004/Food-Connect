import mongoose from 'mongoose'

const ngoSchema = mongoose.Schema(
    {
        name:{type:String , required:true},
        registrationNo:{type:String , required:true},
        ContactPerson :{type:String , required:true},
        email :{type:String , required:true,unique:true},
        contactNo :{type:String , required:true},
        address :{type:String , required:true},
        city :{type:String , required:true},
        state :{type:String , required:true},
        country :{type:String , required:true},
        postal :{type:String , required:true},
        password :{type:String , required:true},
        website :{type:String },
        
    },
    {
        timestamps:true
    }
);
        // ngoType :{type:String , required:true},
const ngoModel = mongoose.model("ListedNgo",ngoSchema);
export default ngoModel;