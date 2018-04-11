const bookModel = require('../models/book');
/**
 * 排行榜
 */
const Ranking = (req, res, next) =>{
    let changxiao ='';
    let newbook='';
    //最新
    bookModel.find().limit(10).sort({create_at:'desc'}).then(doc=>{
        newbook = doc ;
        //排行榜（畅销榜，新书榜）
        bookModel.find().limit(10).sort({order_cnt:'desc'}).then(doc=>{
            changxiao=doc
            res.json({
                newbook:newbook,
                changxiao:changxiao
            })
        }).catch(err=>{
            console.log(err)
        })

    }).catch(err =>{
        console.log(err11)
    })
}
module.exports = Ranking;