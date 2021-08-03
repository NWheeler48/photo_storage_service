const admin = require('firebase-admin')
const serviceAccount = require('../photolibrary-63c50-e0c58a0c213b.json');
const logger = require('../utils/logger.cjs');

const dataBaseURL = 'https://photolibrary-63c50-default-rtdb.firebaseio.com';

exports.initializeApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: dataBaseURL
});


exports.createUserInDB = (userId, userData) => {
    var db = admin.database();
    var ref = db.ref('users/');
    return ref.child(userId).set(userData);
}

exports.createUser = (email, password) => {
    return admin.auth().createUser({
            email: email,
            password: password
    });
}