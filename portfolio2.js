$(function(){
  var h = $("body").height();
  //alert($('.layer1').height());
  //alert($('.layer2').height());
  //alert(h);

  $('.menu').mouseover(function(){
    $(this).css({'background':'#fff','color':'#000'});
  })
  $('.menu').mouseout(function(){
    $(this).css({'background':'#000','color':'#fff'});
  })

  $('.mmenu').mouseover(function(){
    $(this).css({'box-shadow':'0px 0px 5px #666'});
  })
  $('.mmenu').mouseout(function(){
    $(this).css('box-shadow','1px 1px 3px #ccc');
  })

  $('.design > img').mouseover(function(){
    $(this).css({'border':'1px solid #000'});
  })
  $('.design > img').mouseout(function(){
    $(this).css({'border':'1px solid #ccc'});
  })

  $('.menu').click(function(){
    var a = $(this).attr('id').substring(1,2);
    f2(a);
  })
  $('.mmenu').click(function(){
    var a = $(this).attr('id').substring(2,3);
    f2(a);
    //$('body,html').animate({scrollTop:h*a-722},300);
  })
  $('.design > img').click(function(){
    window.open($(this).attr('src'),'','');
  })

    function f2(b){
    //$('body,html').animate({scrollTop:b},400);
    $('body,html').animate({scrollTop:$('.layer'+b).offset().top},300);
  }
});

//$(window).scroll(function(){

  //if($(window).scrollTop()>$('.layer1').height()){
    //$('.lmenu_wrap').css('display','block')
    //$('.layer1').animate({'margin-top':'-722px'},'fast');
    //$('.layer2').css({'margin-top':'0px'});
    //$('body,html').animate({'margin-top':'-722'},'fast');

  //}else if($(window).scrollTop()<$('.layer1').height()){
   // $('.lmenu_wrap').css('display','none')
 // }
//})
function popup(a,b){
  if(a == 'md'){
    window.open('../md/'+b+'/'+b+'.html','pop','');
  }else if(a == 'shoppingmall'){
    //window.open('../shoppingmall/'+b+'.html','pop','');
    window.open('https://webez1125.github.io/portfolio/shoppingmall/type1.html','pop','');
  }
}
