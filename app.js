//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 在app.js里获取用户的openid和userinfo，并存储为全局变量
  // 然而当在index中调用getApp().globalData.userInfo时却返回为空值。
  // 如上所示：
  // 原因：因为wx.getUserInfo为异步获取的信息。
  // 解决方式：将getuserInfo改为回调函数
  // 如下所示：
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
        typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
        wx.getUserInfo({
            success: function (res) {
                console.log('用户信息', res.userInfo)
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
          })
      }
  },
  globalData: {
    userInfo: null
  }
})