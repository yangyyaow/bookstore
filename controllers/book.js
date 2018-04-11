const bookModel= require('../models/book')

/**
 * 书籍
 */

const Book = {
    /**
     * 书籍详情
     */
    get: (req, res, next) => {
        //书籍ID
        let bookid = req.params.id;
        let book ='';
        //书籍详情
            bookModel.findOne({_id:bookid}).populate({path:'category_id',populate:{path:'pid'}}).then(doc =>{
            console.log(doc);
            book=doc;
            res.json({doc:doc})
        }).catch(err=>{
            console.log(err)
        })
        //书籍分类畅销榜
        //作者书籍
        //书籍评论
    }
}
module.exports = Book