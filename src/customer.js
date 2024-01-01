// 这是一个构造参数函数 WechatMarkdownEdit ()，
function WechatMarkdownEdit () {

}

// js启动入口，负责调用其他的方法，是一个启动函数
WechatMarkdownEdit.prototype.init = function () {
  let that = this;

  that.copy();
}


// 2-复制排版好的内容
WechatMarkdownEdit.prototype.copy = function () {
  // 2.1-初始化clipboard------https://clipboardjs.com/
  let clipboard = new ClipboardJS('#copy');

  clipboard.on('success', function (e) {
    // tata是弹窗属性
    tata.success('复制成功', '', {
      position: 'tm',
      duration: 1500,
	  color:'#ffffff'
    });

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    tata.text('复制失败', '请重新尝试复制。', {
      position: 'tm',
      duration: 1500
    });
  });
}



window.onload = function () {
  new WechatMarkdownEdit().init();
}