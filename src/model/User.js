import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    fname: {
        type: String,
        required: [true, "frist name is required"]
    },
    lname: {
        type: String,
        required: [true, "last name is required"]
    },
    phone: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: true //TODO: Email verification
    },
    isActive: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    birthDate: {
        type: Date,
        required: true
    },
    games: {
        type: Array,
        default: []
    },
    profilePicUrl: {
        type: String,
        default: '/user/default.png'
    }
}, {
    timestamps: true
});

mongoose.model('User', UserSchema);