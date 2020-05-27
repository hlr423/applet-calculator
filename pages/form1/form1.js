Page({
  data:{
    name:'黄利蓉',
    sex:'0',
    design:'html',
    idea:'我的意见是哪个啥'

  },
  submitForm(e){
    console.log(e)
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  }
})