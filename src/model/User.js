import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
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
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', userSchema);