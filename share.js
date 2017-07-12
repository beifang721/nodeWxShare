function share_fn(title,imgurl){
		$.ajax({
	        url: 'http://test.html.huanbay.com/wx-jssdk-node',//签名服务器地址
	        type: 'get',
	        data: {
	            url: location.href.split('#')[0] // 将当前URL地址上传至服务器用于产生数字签名
	        }
	    }).done(function(r) {
	        // 返回了数字签名对象
	        console.log(r);
	        console.log(r.appId);
	        console.log(r.timestamp);
	        console.log(r.nonceStr);
	        console.log(r.signature);
	
	        // 开始配置微信JS-SDK
	        wx.config({
	            debug: false,//调试弹框
	            appId: r.appId,//必要 唯一标识
	            timestamp: r.timestamp,//签名时间戳
	            nonceStr: r.nonceStr,//签名随机串
	            signature: r.signature,//签名
	            jsApiList: [
	                'checkJsApi',
	                'onMenuShareTimeline',
	                'onMenuShareAppMessage',
	                'onMenuShareQQ',
	                'onMenuShareWeibo',
	                'hideMenuItems',
	                'chooseImage'
	            ]
	        });
	
	        // 调用微信API
	        wx.ready(function() {
                wx.onMenuShareTimeline({
                    title: ''+title+'', // 分享标题
                    link: ''+location.href+'', // 分享链接
                    imgUrl: ''+imgurl+'', // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: ''+title+'', // 分享标题
                    desc: '', // 分享描述
                    link: ''+location.href+'', // 分享链接
                    imgUrl: ''+imgurl+'', // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQQ({
				    title: ''+title+'', // 分享标题
				    desc: '', // 分享描述
				    link: ''+location.href+'', // 分享链接
				    imgUrl: ''+imgurl+'', // 分享图标
				    success: function () { 
				       // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				       // 用户取消分享后执行的回调函数
				    }
				});
				wx.onMenuShareQZone({
				    title: ''+title+'', // 分享标题
				    desc: '', // 分享描述
				    link: ''+location.href+'', // 分享链接
				    imgUrl: ''+imgurl+'', // 分享图标
				    success: function () { 
				       // 用户确认分享后执行的回调函数
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				    }
				});
	        });
	
	    });
		
	}
