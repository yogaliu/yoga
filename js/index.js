/*关闭函数*/
function closeParent(element){
var close=document.getElementsByClassName(element)
for (var i = 0; i < close.length; i++) {
// 获取每个close的父级元素
//让每个父级元素消失
      close[i].onclick=function(){
      var clearWarp=this.parentNode
      clearWarp.style.display="none";
}
}}
 closeParent("icon-close")  //调用closeParent
/**/
function inputWarp(){
var contentBox=document.getElementsByClassName("container")[0]
var warpBox=contentBox.getElementsByClassName("warp")
var textTitle=document.getElementById("text-title")
var textContent=document.getElementById("text-content")
var textBtn=document.getElementById("text-btn")
     textBtn.onclick=function(){
        var textTitleValue=textTitle.value
        var textContentValue=textContent.value
        var createWarp=document.createElement("div")
        if(textTitleValue===''||textContentValue===''){
            return alert("请输入！")
        } 
        else {  
        createWarp.className=' warp clearfix'
        createWarp.innerHTML='<a href="#"><img src="img/maidi.jpg" class="warp-img fl"></a><i class="icon-close"></i><div class="warp-r fl clearfix"><h3><a href="#" class="type">作品展示</a><a href="#" >'+textTitleValue+'</a></h3><ul class="fl"><li><span class="icon1"></span>2016-01-01</li><li><span class="icon2"></span><a href="#">栋球帝</a></li><li><span class="icon3"></span>阅读(780)</li><li><span class="icon4"></span><a href="#">评论(125)</a></li></ul><p><a href="">'+textContentValue+'</a></p></div>'
        contentBox.appendChild(createWarp)
        closeParent("icon-close")
     }
     textContent.value='';
     textTitle.value='';
}
};
inputWarp()