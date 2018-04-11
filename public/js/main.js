/* *
* The css file of Beijing Jinjiuyuan Technology Co. Ltd..
*
* @copyright   Copyright 2009-2018 北京金九源科技有限公司(Beijing Jinjiuyuan Technology Co. Ltd.)
* @license
* @author      北京金九源科技有限公司
* @package     Beijing Jinjiuyuan Technology Co. Ltd.
* @version     $Id$
* @link
* */

$(function(){	

	// SyntaxHighlighter.all();

	var M = {

	}


	// 个人中心我的图书删除按钮
	$(document).delegate(".alert-btn3",'click',function(){
		if(M.dialog3){
			return M.dialog3.show();
		}
		M.dialog3 = jqueryAlert({
			'title'   : '删除图书',
			'content' : '删除《百家小集——找灵魂补遗》 ...',
			'modal'   : true,
			'buttons' :{
				'取消' : function(){
					M.dialog3.close();
				},
				'确定' : function(){
					if(M.dialog31){
						return M.dialog31.show();
					}
					M.dialog31 = jqueryAlert({
						'content' : '删除成功...'
					})
				}
			}
		})
	})
	//个人中心我的订单评价

	$(document).delegate(".alert-btn6",'click',function(){
		
		M.dialog6 = jqueryAlert({
			'style'   : 'pc',
			'title'   : '评论',
			'content' :  $("#alert-blockquote"),
			'modal'   : true,
			'contentTextAlign' : 'left',
			'width'   : 'auto',
			'animateType' : 'linear',
			

		})
		$('.my-rating').html('');
		$(".my-rating").starRating({
		    starSize: 25,
		    disableAfterRate:false,
		    callback: function(currentRating, $el){
		        // make a server call here
		        // alert(222);
		    }
		});
	})
	//个人中心个人设置编辑

	$(document).delegate(".alert-btn5",'click',function(){
		
		M.dialog6 = jqueryAlert({
			'style'   : 'pc',
			'title'   : '编辑资料',
			'content' :  $("#alert-blockquote1"),
			'modal'   : true,
			'contentTextAlign' : 'left',
			'width'   : 'auto',
			'animateType' : 'linear',
			

		})
		$('.my-rating').html('');
		$(".my-rating").starRating({
		    starSize: 25,
		    disableAfterRate:false,
		    callback: function(currentRating, $el){
		        // make a server call here
		        // alert(222);
		    }
		});
	})
	//个人中心个人设置编辑

	$(document).delegate(".alert-btn4",'click',function(){
		
		M.dialog6 = jqueryAlert({
			'style'   : 'pc',
			'title'   : '新增地址',
			'content' :  $("#alert-blockquote2"),
			'modal'   : true,
			'contentTextAlign' : 'left',
			'width'   : 'auto',
			'animateType' : 'linear',
			

		})
		$('.my-rating').html('');
		$(".my-rating").starRating({
		    starSize: 25,
		    disableAfterRate:false,
		    callback: function(currentRating, $el){
		        // make a server call here
		        // alert(222);
		    }
		});
	})
	
	
	


})