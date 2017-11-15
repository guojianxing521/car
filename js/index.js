$(function(){

//全屏切换的初始化
$('.container').fullpage({
  //初始化添加颜色
  sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
  
  //是否显示项目导航
  navigation:true,
  //设置内容不是默认居中
  verticalCentered: false,
  //滚动到某一屏后的回调函数，
  //接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
  afterLoad:function(link,index){

  	 $('.section').eq(index-1).addClass('now');

  },
  // 离开某一屏触发的事件
// 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号
// ，从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，
// 值是 up 或 down。

  onLeave:function(index,nextIndex,direction){

  	// if(index==2&&nextIndex==3){

       $('.section').eq(index-1).addClass('leave');
  	// }else if (index==3&&nextIndex==4) {
  	  // $('.section').eq(index-1).addClass('leave');
  	// }
     if(index==5&&nextIndex==6){

       $('.screen06').addClass('show');

     }
     if(index==6&&nextIndex==7){

       $('.screen07 .star img').each(function(i,item){
            
            $(this).delay(i*500).fadeIn();
       });
       $('.screen07').addClass('show');


     }

  },
  // afterRender页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
  afterRender:function(){
       
  	 $('.more').on('click',function(){
      
      $.fn.fullpage.moveSectionDown();

  	 });
  	 /*当第四屏的购物车动画结束之后执行收货地址的动画*/
  	 $('.screen04 .cart').on('transitionend',function(){
  	 	// console.log(1);
  	  	$('.screen04 .address').show().find('img:last').fadeIn(1000);
  	  	$('.screen04').addClass('show');
  	  });
     
     $('.screen08').on('mousemove',function(e){
            e = e ||event;
       $('.screen08 .hand').css({
        left:e.clientX-250,
        top:e.clientY-60
       })

     });
  

      $('.screen08 .again').on('click',function(){
         // console,log(this);
          $('.leave,.show,.now').removeClass('now').removeClass('leave').removeClass('show');
          $('.content[style]').removeAttr('style');
          $.fn.fullpage.moveTo(1);
       })


  },
    /*页面切换的时间 默认是700*/
   scrollingSpeed:1000
  



})

})