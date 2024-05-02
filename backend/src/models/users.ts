import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Users = db.define('users', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Users;