const app=getApp()
Page({
  data:{
    startpoint:[],
    dellStyle:'',
    userName:'',
    userOpenid:''

  },
  onLoad:function(options){
    var that = this
        getApp().getUserInfo(function (openid) {
            that.setData({
                userName: getApp().globalData.userInfo.nickName,
                userOpenid: openid
            })
            console.log('用户openid', that.data.userOpenid)
        })
  },
    // 组件事件处理函数  
    // e表示事件的对象，可以获取一些事件发生时的相关信息，
    // 如：type：事件类型，
        // timestamp：事件生成时的时间戳（需要的），
        // target：触发事件的组件的一些属性值集合，
        // datail：额外的信息等
    // e.target 和e.currentTarget 区别
    // target.id 是子元素的属性值集合
    // e.currentTarget.id 获取的是父元素的属性值集合
  viewTap:function(e){
    //单击父元素：outer outer;单击子元素：outer inner
    console.log(e.currentTarget.id,e.target.id) 
  },
  // 常用事件:
  // 小程序有明显的视图层和逻辑层的划分，前者使用wxml和wxss编写，由组件进行展示
  // 后者使用JavaScript编写，它不是运行在浏览器环境中，
  // 因此没有DOM 和BOM,只能通过事件来实现视图层到逻辑层的通信

  //事件分类:(都是冒泡事件，冒泡事件：当一个组件上的事件被触发后，事件会向父节点传递，非冒泡事件不会)
  // 1、touchstart 手指触摸
  // 2、touchmove 手指触摸后移动
  // 3、touchcancel 手指触摸动作被打断，如弹窗和来电提醒
  // 4、touchend 手指触摸动作结束
  // 5、tap 手指触摸后离开
  // 6、longtap 手指触摸后后，超过350ms离开

  //事件绑定:
  // 事件绑定的写法同组件的属性，以 key、value 的形式。
  // key 以bind或catch开头，然后跟上事件的类型，如bindtap, catchtouchstart
  // value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。
  //  bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。

  // 上面简单介绍了小程序事件基础，是时候彰显"事件"的威力：
  // 1、单击(tap)
  // 2、双击(dbtap)
  // 3、长按(longtap)
  // 4、滑动
  // 5、多点触控

  mytouchStart:function(e){
    // console.log(e,'手指触摸动作')
  },
  mytouchend:function(e){
    // console.log(e,'手指触摸动作结束')
  },
  mytouchmove:function(e){
    // console.log(e,'手指触摸后移动')
  },
  mytouchcancel :function(e){
    // console.log(e,'手指触摸动作被打断，如弹窗和来电提醒')
  },
  mytap:function(e){
    // console.log(e,'手指触摸后离开')
  },
  mylongtap :function(e){
    // console.log(e,'手指触摸后后，超过350ms离开')
  },

  // 注：单击、双击、长按属于点触事件，会触发touchstart、touchend、tap事件，touchcancel事件只能在真机模拟
  // 单击(touchstart → touchend → tap)
  // 单击事件由touchstart、touchend组成,touchend后触发tap事件。

  // 双击(touchstart → touchend → tap → touchstart → touchend → tap)
  // 双击事件由两个单击事件组成，两次间隔时间小于300ms认为是双击；微信官方文档没有双击事件，需要开发者自己定义处理。

  // 长按(touchstart → longtap → touchend → tap)
  // 长按事件手指触摸后，超过350ms再离开。

  // 滑动
  // 手指触摸屏幕并移动，为了简化起见，下面以水平滑动和垂直滑动为例。 滑动事件由touchstart、touchmove、touchend组成


  // 活动实例
  mytouchstart: function (e) {
		var that = this;
		//开始触摸，获取触摸坐标
		console.log(e)
		that.setData({ startpoint: [e.touches[0].pageX, e.touches[0].pageY] });
	},
	//触摸点移动
	mytouchmove: function (e) {
		//当前触摸点坐标
		var that = this;
		var curPoint = [e.touches[0].pageX, e.touches[0].pageY];
		var startpoint = that.data.startpoint;
		console.log(startpoint)
		console.log(curPoint)
		//比较pagex值
		if (curPoint[0] < startpoint[0]) {
			if (Math.abs(curPoint[0] - startpoint[0]) >= Math.abs(curPoint[1] - startpoint[1])) {
				console.log(e.timeStamp + '-touch left move')
				that.setData({
					dellStyle: "red"
				})
			} else {
				if (curPoint[1] >= startpoint[1]) {
					console.log(e.timeStamp + '-touch down move')
				} else {
					console.log(e.timeStamp + '-touch up move')
				}
			}
		} else {
			if (Math.abs(curPoint[0] - startpoint[0] >= Math.abs(curPoint[1] - startpoint[1]))) {
				console.log(e.timeStamp + '-touch right move')
				that.setData({
					dellStyle: "yellow"
				})
			} else {
				if (curPoint[1] >= startpoint[1]) {
					console.log(e.timeStamp + '-touch down move')
				} else {
					console.log(e.timeStamp + '-touch up move')
				}
			}
		}
  },
  
  // 事件绑定和冒泡
  // 绑定事件有两种方式：
  // 1、bind事件类型：它不会阻止冒泡事件向上冒泡
  // 2、catch事件类型：可以阻止冒泡事件向上冒泡
})