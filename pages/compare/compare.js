Page({
  data:{
    hlr:'huanglirong',
    oneNumber:'',
    twoNumber:'',
    result1:'0'
  },
  // 在加载当前页面时，上个页面中跳转的url携带参数，当前页面中的onLoad函数中的options参数就可以接收携带过来的参数
  onLoad:function(options){
    console.log(options)
  },
  // 页面事件处理函数
  // 滚动事件开发工具没有自动生成这个函数，需要自己手动添加，
  // 并且保持页面高度高于显示区域，才会出现滚动效果
  onPageScroll:function(options){
    console.log('此时用户正在滚动页面')
    console.log('滚动距离',options.scrollTop)
 },

  inputNum1:function(e){
    let v=this;
    let name = e.currentTarget.dataset.name
    let value = e.detail.value
    v.data[name] = value
    v.setData({
      oneNumber:v.data[name]
    })
  },
  inputNum2:function(e){
    let v=this;
    let name = e.currentTarget.dataset.name
    let value= e.detail.value
    v.data[name] = value
    v.setData({
      twoNumber:v.data[name]
    })
  },
  compareNumber:function(e){
    console.log(e)
    let v=this;
    let resultMax =v.data.oneNumber>v.data.twoNumber
    // let value =v.data.oneNumber + v.data.twoNumber
    let value =  resultMax?v.data.oneNumber:v.data.twoNumber
    this.setData({
      'result1':value
    })
  }
})