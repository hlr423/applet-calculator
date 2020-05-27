Page({
  data: {
    num: '',
    op: '',
  },
  result: null,
  isClear: false,
  numBtn(e) {
    let num = e.target.dataset.val
    if (this.data.num === '0' || this.isClear) {
      this.setData({
        num: num
      })
      this.isClear = false;
    } else {
      this.setData({
        num: this.data.num + num
      })
    }
  },
  opBtn(e) {
    let op = this.data.op;
    let num = Number(this.data.num);
    this.setData({
      op: e.target.dataset.val
    })
    if (this.isClear) {
      return
    }
    this.isClear = true;
    if (this.result === null) {
      this.result = num;
      return
    }
    if (op === '+') {
      this.result = this.result + num;
    } else if (op === '-') {
      this.result = this.result - num

    } else if (op === '*') {
      this.result = this.result * num

    } else if (op === '/') {
      this.result = this.result / num

    } else if (op === '%') {
      this.result = this.result % num
    }
    this.setData({
      num: this.result + ''
    })
  },
  dotBtn(e) {
    if (this.isClear) {
      this.setData({
        num: '0.'
      })
      this.isClear = false;
      return
    }
    if(this.data.num.indexOf('.')>=0){
      return
    }
    this.setData({num:this.data.num + '.'})
  },
  delBtn(e){
    let num=this.data.num.substr(0,this.data.num.length-1)
    this.setData({num:num===''?'0':num})
  },
  resetBtn() {
    this.result=null;
    this.isClear=false;
    this.setData({num:'0',op:''})
  },
})