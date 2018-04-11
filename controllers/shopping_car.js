const shopping_carModel = require('../models/shopping_car');

/**
 * 购物车
 */
const ShoppingCar = {
    /**
     * 购物车页
     */
    index: (req, res, next) => {
        //购物车列表
        let id = req.body.user_id;
        shopping_carModel.findOne({_id: id}).populate('book_id', 'name img author_id price num').then(doc => {
            console.log(doc);
            res.json({
                status: 1,
                result: doc
            })
        }).catch(err => {
            console.log(err)
        })
    },
    /**
     * 添加购物车
     */
    add: (req, res, next) => {
        //书籍id
        let user_id = req.session.user._id;
        let book_id = req.body.book_id;
        //数量
        let num = parseInt(req.body.num);
        //    查询数据库有没有该书籍记录
        shopping_carModel.findOne({user_id:user_id,book_id:book_id}).then(doc=>{
            if(doc){
            //    修改
                shopping_carModel.update({_id:doc._id,num:parseInt(doc.num)+num}).then(doc =>{
                    res.json({
                        status:1,
                        msg:'添加成功'
                    })
                })
            }else{
                //没有创建
                let c = new shopping_carModel({
                    user_id: user_id,
                    book_id: book_id,
                    num: num
                });
                c.save().then(doc => {
                    console.log(doc)
                    res.json({
                        status: 1,
                        msg: '保存成功'
                    })
                }).catch(err => {
                    console.log(err)
                })
            }
        })

    },
    /**
     * 更新购物车
     */
    update: (req, res, next) => {
        //购物车id/书籍id-用户id
        //数量
        let book_id = req.body.book_id;
        let user_id = req.body.user_id;
        let num = req.body.num;
        shopping_carModel.update({user_id: user_id, book_id: book_id}, {
            num: num
        }).then(doc => {
            res.json({
                status: 1,
                msg: '更新成功'
            })
        }).catch(err => {
            console.log(err)
        })
    },
    /**
     * 删除购物车
     */
    delete: (req, res, next) => {
        //购物车id/书籍id-用户id
        let user_id = req.body.user_id;
        let book_id = req.body.book_id;
        shopping_carModel.remove({user_id: user_id, book_id: book_id}).then(doc => {
            res.json({
                status: 1,
                msg: '删除成功'
            })
        }).catch(err => {
            console.log(err)
        })
    }
};


module.exports = ShoppingCar;