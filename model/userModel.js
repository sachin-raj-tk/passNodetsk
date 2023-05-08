const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String
  },
  phone:{
    type:Number
  },
  password:{
    type:String,
    required:true
  },
  status:{
    type:Boolean,
    default:true
  }
},{timestamps:true})

UserSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,12);
    next()
});

const User = mongoose.model("User",UserSchema);

module.exports = User;