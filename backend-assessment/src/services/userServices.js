const userQuery = require('../queries/userQueries');

const SignUp = async (body) => {
    try {
        const saveUser  = await userQuery.SignUp(body);
        return saveUser ;
    } catch (error) {
        throw error;
    }
};

const findUserByToken = async (token) => {
    return await userQuery.findUserByToken(token); 
};

module.exports = {
    SignUp,
    findUserByToken, 
};