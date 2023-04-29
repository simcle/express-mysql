const dbPool = require('../config/database');
const moment = require('moment');
const getAllusers = () => {
    const sql = 'SELECT * FROM users'
    
    return dbPool.execute(sql)
}

const createUser = (data) => {
    const sql = `   INSERT INTO users (name, email, password, role)
                    VALUES ('${data.name}', '${data.email}', '${data.password}', '${data.role}')`
    return dbPool.execute(sql)
}

const getUser = (email) => {
    const sql = `SELECT * FROM users WHERE email='${email}'`
    return dbPool.execute(sql)
}

const updateToken = (data) => {
    const updatedAt = moment().utc().format('YYYY-MM-DD hh:mm:ss')
    const sql = `UPDATE users SET refresh_token='${data.refreshToken}', updated_at='${updatedAt}' WHERE id='${data.id}'`
    return dbPool.execute(sql)
} 

const refreshToken = (token) => {
    const sql = `SELECT * FROM users WHERE refresh_token='${token}'`
    return dbPool.execute(sql)
}
const deleteToken = (token) => {
    const sql = `UPDATE users SET refresh_token='' WHERE refresh_token='${token}'`
    return dbPool.execute(sql)
}
module.exports = {
    getAllusers,
    createUser,
    getUser,
    updateToken,
    refreshToken,
    deleteToken
}