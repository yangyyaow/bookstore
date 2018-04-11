const userModel = require('../models/user');
const bookModel = require('../models/book')
/**
 * 结算
 */
const Clean = {
    /**
     * 结算页
     */
    index: (req, res, next) => {
        let book =[];
        let booknumber =[];
        let address = [];
        let user_id = req.body.user_id
        //书籍数量（数组）

        //书籍id（数组）
        let book_id = req.body.book_id;
        for (let i=0;i<book_id.length;i++){
            bookModel.find({_id: book_id}).then(doc => {
                console.log(doc);
                doc.booknumber=booknumber;
                 book[i]= doc;
            }).catch(
                err => {
                    console.log(err)
                }
            )
        }
        //用户地址
        userModel.find({_id:user_id}).then(doc =>{
            console.log(doc);
            address = doc.address
            res.json({
                book:book,
                address:address
            })
        }).catch(err => {
             console.log(err)
        })


    }
}
module.exports = Clean;