import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    plataform: {
        type: String,
        enum: ['PS4', 'PS3', 'PS2', 'PSVita', 'PSP', 'PS1', 'Xbox One', 'Xbox 360', 'Xbox', 'PC', 'Nintendo Wii', 'Nintendo Switch', 'Nintendo WiiU'],
        required: true
    },
    ratingUS: {
        type: String,
        enum: ['eC', 'E', 'E10+', 'T', 'M', 'Ao'],
        required: false
    },
    ratingBR: {
        type: String,
        enum: ['L', '10', '12', '14', '16', '18'],
        required: false
    },
    description: {
        type: String,
        required: false
    },
    releaseDate: {
        type: Date,
        required: false
    },
    gamePicUrl: {
        type: String,
        default: '/game/default.png'
    }
}, {
    timestamps: true
});

GameSchema.plugin(mongoosePaginate);

mongoose.model('Game', GameSchema);