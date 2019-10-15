import mongoose from 'mongoose';
import parseBody from '../utils/parseBody';

const Game = mongoose.model('Game');

export default {
    async findAll(req, res) {
        const { page = 1, limit = 10 } = req.query

        const games = await Game.paginate({}, { page, limit });

        return res.json(games);
    },

    async findOne(req, res) {
        const game = await Game.findById(req.params.id);

        return res.json(game);
    },

    async add(req, res) {
        let body = parseBody(req.body)

        const game = await Game.create(body);

        return res.json(game);
    },

    async delete(req, res) {
        const game = await Game.findByIdAndDelete(req.params.id);

        return res.json(game);
    },

    async update(req, res) {
        let body = parseBody(req.body)

        const game = await Game.findByIdAndUpdate(req.params.id, body, { new: true });

        return res.json(game);
    }
}