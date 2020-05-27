//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // hello world 跳转compare页面
  bindViewTapNum: function(){
    wx.navigateTo({
      url: '../compare/compare'
    })
  },
  onLoad: function (options) {
    console.log(options,'页面加载')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady:function(){
    console.log('页面初次渲染完成')
    wx.navigateTo({
      url: '/pages/elementCeShi/ceshi?name1=hlr&name2=gm',
    })
  },
  onShow:function(){
    console.log('页面显示')
  },
  // 单击圆点，会弹出一个“查找场景值”的菜单，通过场景值可以感知用户的使用场景，
  onHide:function(){
    console.log('页面隐藏')
  },
  onUnload:function(){

  },
  // 当此函数写入，显示转发按钮
  onShareAppMessage(options){
    console.log('分享',options)
  },
  // 页面事件处理函数
  // 监听用户下拉动作
  // 监听用户下拉刷新事件。
  // 需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
  // 可以通过wx.startPullDownRefresh触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
  // 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
   onPullDownRefresh:function(){
     console.log('此时用户下拉触顶')
   },
  // 页面上拉触底事件的处理函数
  // 监听用户上拉触底事件。
  // 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
  // 在触发距离内滑动期间，本事件只会被触发一次。
   onReachBottom:function(){
    console.log('此时用户上拉触底')
   },

  // 滚动事件开发工具没有自动生成这个函数，需要自己手动添加，
  // 并且保持页面高度高于显示区域，才会出现滚动效果
  onPageScroll:function(options){
      console.log('此时用户正在滚动页面')
      console.log('滚动距离')
   },
  //  组件事件处理函数
  // 组件事件处理函数用于为组件绑定事件
  // 如：bindTap绑定事件，类似于click事件绑定




})
