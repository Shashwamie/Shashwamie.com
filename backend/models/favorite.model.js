import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    },
    description: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
},{
    timestamps: true, // createdAt, updatedAt
});

const favoriteItem = mongoose.model('FavoriteItem', favoriteSchema);
export default favoriteItem;