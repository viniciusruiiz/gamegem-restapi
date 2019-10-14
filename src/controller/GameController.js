import mongoose from 'mongoose';

const Game = mongoose.model('Game');

export default {
    async findAll(req, res) {
        const games = await Game.find();

        return res.json(games);
    },

    async findOne(req, res) {
        const game = await Game.findById(req.params.id);

        return res.json(game);
    },

    async add(req, res) {
        const game = await Game.create(req.body);

        return res.json(game);
    },

    async delete(req, res) {
        const game = await Game.findByIdAndDelete(req.params.id);

        return res.json(game);
    },

    async update(req, res) {
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(game);
    }
}