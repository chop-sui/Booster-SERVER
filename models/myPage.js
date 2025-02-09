const pool = require('../modules/pool');

exports.updateProfile = async (req, data)=> {
    const query = `UPDATE Booster.USER SET user_name = '${data.user_name}', univ_idx = ${data.user_university}, user_password = '${data.user_hashed}', user_salt = '${data.user_salt}' WHERE user_idx = ${req.user_idx}`;

    try {
        return await pool.queryParam(query);
    } catch (err) {
        console.log('ERROR : ', err);
        throw err;
    }
};

exports.readEngineHistory = async (req)=> {
    const query = `SELECT user_point engine_point, engine.order_idx, engine_point engine_cost, engine_time, store_name engine_store_name FROM ((Booster.ENGINE engine JOIN Booster.USER user USING(user_idx)) LEFT JOIN Booster.ORDER orders ON engine.order_idx = orders.order_idx) LEFT JOIN Booster.STORE store ON store.store_idx = orders.store_idx WHERE engine.user_idx = ${req.user_idx}`;

    try {
        return await pool.queryParam(query);
    } catch (err) {
        console.log('ERROR : ', err);
        throw err;
    }
};