const slideModel = require('../models/slide');
const bookModel = require('../models/book');
const authorModel = require('../models/author');
const adModel = require('../models/ad');
const categoryModel = require('../models/category')
const evaluationModel = require('../models/evaluation')
/**
 * 首页
 */
const Home = {
    /**
     * 首页
     */
    index: (req,res,next) => {
        let slide = '';
        let tuijian='';
        let ad='';
        //幻灯
        slideModel.find().then(doc =>{
            slide = doc;

            // 推荐
            bookModel.find({is_tui:1}).populate({path: 'author_id', select: 'name -_id'}).limit(4).then(doc =>{
                tuijian = doc;
                console.log(doc)
                //广告
                adModel.find().then(doc=>{
                    ad = doc;
                    res.json({
                        slide:slide,
                        tuijian:tuijian,
                        ad:ad,
                    })
                }).catch(err=>{
                    console.log(err)
                })


            }).catch(err =>{
                console.log(err)
            });


        }).catch(err=>{
            console.log(err)
        })

    },
    /**
     * 推荐
     */
    tui: (req, res, next) => {
        //书籍列表（分页）
        //分页
        let count = 0;
        let limit = 5;
        let page = req.query.page;
        let totalPage = 0;
        let list ='';
        let changxiao ='';
        bookModel.find({is_tui:1}).count().then(doc=>{
            count = doc;
            totalPage = Math.ceil(count/limit)
            bookModel.find({is_tui:1}).skip((page-1)*limit).limit(5).sort({create_at:'desc'}).then(doc=>{
                list=doc;
                //排行榜（畅销榜，新书榜）
                bookModel.find({is_tui:1}).limit(10).sort({order_cnt:'desc'}).then(doc=>{
                    changxiao=doc
                    res.json({
                        list:list,
                        count:count,
                        page:page,
                        totalPage:totalPage,
                        changxiao:changxiao
                    })
                }).catch(err=>{
                    console.log(err)
                })


            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })

    },
    /**
     * 新书
     */
    news: (req, res, next) => {
        //书籍列表（分页）
        //分页
        let count = 0;
        let limit = 5;
        let page = req.query.page;
        let totalPage = 0;
        let list ='';

        bookModel.find().count().then(doc=>{
            count = doc;
            totalPage = Math.ceil(count/limit)
            bookModel.find().skip((page-1)*limit).limit(5).sort({create_at:'desc'}).then(doc=>{
                list=doc;
                res.json({
                    list:list,
                    count:count,
                    page:page,
                    totalPage:totalPage,
                })
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })

    },
    /**
     * 分类页
     */
    category: (req, res, next) => {
        //分类列表
       let list = '';
       let category_id=req.params.category_id;
       let way = req.query.way;
       let where = {way:'desc'};
       let booklist ='';
       if(way == 1){
           where = {create_at:'desc'};
       }else if(way == 2){
           where = {order_cnt:'desc'}
       }else if(way == 3){
           where = {price:'desc'}
       }
       console.log(where)
        categoryModel.find({},['name']).populate('category','name').then(doc=>{
           list =doc;
            //分类书籍（分页，销量，评分，时间）
            bookModel.find({category_id:category_id}).sort(where).then(doc=>{
                booklist=doc;
                res.json({
                    book:booklist,
                    category:list
                })
            }).catch(err=>{console.log(err)})
        })

    },
    /**
     * 排行榜
     */
    ranking: (req, res, next) => {
        //书籍列表(分页，畅销/新书)

        let way = req.query.name;

        let count = 0;
        let limit = 5;
        let page = req.params.page;
        let totalPage = 0;
        let where ='';

        bookModel.find().count().then(doc=>{
            count = doc;
            totalPage = Math.ceil(count/limit);
            if(way==1){
                where={order_cnt:'desc'}
            }else{
                where={create_at:'desc'}
            }
            bookModel.find().skip((page-1)*limit).limit(5).sort(where).then(doc=>{
                res.json({
                    list:doc,
                    count:count,
                    page:page,
                    totalPage:totalPage,
                })
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })
    },
    /**
     * 搜索
     */
    search: (req, res, next) => {
        //书籍列表（分页）
        let name = req.params.name;
        let book = '';
        let bookid ='';
        let evaluation='';
        let count = 0;
        let limit = 2;
        let page = req.query.page;
        let totalPage = 0;
        bookModel.find({name:name}).then(doc=>{
            book = doc;
            bookid = book._id;
            evaluationModel.find({book_id:bookid}).count().then(doc=>{
                    count=doc;
                    totalPage = Math.ceil(count/limit);
                    evaluationModel.find({book_id:bookid}).skip((page-1)*limit).limit(2).sort({create_at:'desc'}).then(doc=>{
                        res.json({
                            book:book,
                            evaluation:doc,
                            count:count,
                            totalPage:totalPage,
                            page:page
                        })
                    }).catch(err=>{
                        console.log(err)
                    })

            }
            ).catch(err =>{
                console.log(err)
            })
            }
        ).catch(err=>{console.log(err)})
    }
};
module.exports = Home;