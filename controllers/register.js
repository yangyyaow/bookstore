const UserModel = require('../models/user');
const md5 = require('md5');
/**
 * 注册
 */
const Register = {
    /**
     * 注册页面
     */
    index: (req, res, next) => {
        res.render('register');
    },
    /**
     * 注册操作
     */
    register: (req, res, next) => {
        //邮箱
        //昵称
        //密码
        //确认密码
        let email = req.body.email;
        let nickname = req.body.nickname;
        let password = req.body.password;
        let repassword = req.body.repassword;

        if (!email) {

        }
        if (!nickname) {

        }
        if (!password) {

        }
        if (password != repassword) {

        }
        //邮箱是否重复
        UserModel.findOne({email:email}).then(doc=>{
            if(doc){
                req.flash('err','注册失败');
                res.redirect('/register')
            }else{

            }
            }
        ).catch(err =>{

        })


        req.flash('err', '注册失败');
        res.redirect('/register');



        //登录操作
    }
}
module.exports = Register;