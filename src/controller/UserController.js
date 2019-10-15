import mongoose from 'mongoose';
import parseBody from '../utils/parseBody';

const User = mongoose.model('User');

export default {
    async findAll(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async findOne(req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    async register(req, res) {
        let body = parseBody(req.body)

        //TODO: encrypt password logic

        const user = await User.create(req.body).catch(err => {
            //DO LOGIC ABOUT ENV
            console.log(err)
            return res.send(err).status(400);
        });

        return res.json(user);
    },

    async delete(req, res) {
        const user = await User.findByIdAndDelete(req.params.id);

        return res.json(user);
    },

    async update(req, res) {
        let body = parseBody(req.body)

        const user = await User.findByIdAndUpdate(req.params.id, body, { new: true });

        return res.json(user);
    }
}