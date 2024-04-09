// repositories/UserRepository.js
const IUserRepository = require('./IUserRepository');
const User = require('../models/User'); // Supondo que você tenha um modelo de usuário

module.exports = class UserRepository extends IUserRepository {
    create(user) {
        return User.create(user);
    }
    
}
