const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

/**
 * 购物车模型
 */
const ShoppingCarSchema = new Schema({
    user_id: {
        type: ObjectId,
        ref: 'User'
    },
    book_id: {
        type: ObjectId,
        ref: 'Book'
    },
    num: {
        type: Number,
        default: 1
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
    update_at: {
        type: Date,
        default: Date.now,
    }
});

const ShoppingCar = mongoose.model('ShoppingCar', ShoppingCarSchema);
module.exports = ShoppingCar;