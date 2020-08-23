const db = require('../db/db')

class UserModel {
    constructor({email='', password='', id=0}) {
        this.email = email;
        this.password = password;
        this.id = id;
        this.createAt = new Date();
        this.updateAt = new Date();
    }

    registerUser() {
        return db.execute('INSERT INTO USER (email, password, createAt, updateAt) VALUES(?, ?, ?, ?)',
        [this.email, this.password, this.createAt, this.updateAt])
    }

    static findUserByEmail ({email=''}) {
        return db.execute('SELECT * FROM USER WHERE user.email = ?',[email])
    }

}

module.exports = UserModel;