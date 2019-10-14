import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const gameSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

gameSchema.plugin(mongoosePaginate);

mongoose.model('Game', gameSchema);