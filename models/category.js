var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
/**
 * 书籍分类
 */
const CategorySchema = new Schema({
    name: String,
    sort: {
        type: Number,
        default: 100
    },
    pid: {
        type: ObjectId,
        ref: 'Category'
    },
    category: [{
        type: ObjectId,
        ref: 'Category'
    }],
    status: {
        type: Number,
        default: 1
    },
    create_at: {
        type: Date,
        default: Date.now,
    },
    update_at: {
        type: Date,
        default: Date.now
    },
    delete_at: {
        type: Date,
        default: null
    }
})

/**
 * 栏目实体
 */
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;