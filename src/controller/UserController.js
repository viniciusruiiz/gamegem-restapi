import mongoose from 'mongoose';

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
        const user = await User.create(req.body);

        return res.json(user);
    },

    async delete(req, res) {
        const user = await User.findByIdAndDelete(req.params.id);

        return res.json(user);
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(user);
    }
}