const { error } = require('console');
const User = require('../models/User');

exports.getAllUsers = async (req, res) =>{
  try {
    const users = await User.find();
    res.status(200).json(users);
    
  } catch(error) {
    res.status(400).json({message: error.message});
  }
};

exports.createUser = async (req, res) =>{
  const user = new User(req.body);
  try{
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  }catch(error) {
    res.status(400).json({message: error.message});
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedUser);
  }
    catch(error){
    res.status(400).json({ message: error.message });
    }
    
};

exports.deleteUser = async (req, res) => {
  try{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({message: 'User deleted successfully'});
    
  }catch (error){
    res.status(400).json({message: error.message});
  }
};
