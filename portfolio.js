$(function(){
  var top_h = $(".top").height();

  //$('.show').css('display','none')
  //$('#md_supersale').css('display','block')

  $('.list').css('display','none')
  $('#m3page').css('display','block')
  //$('.title2').mouseover(function(){
//      $('.title2').css('background','#666')
  //})
  //$('.title2').mouseout(function(){
    //$('.title2').css('background','#fff')
  //})
//    $('.btn_more').click(function(){
//      location.href = 'img/md/md.jpg';
//      window.open('popup.html','popup','width=1000,height=700,top=10,left=100,toolbars=no,scrollbars=yes,status=no,menubar=no');
  //})


  //$('.viewClose').click(function(){
//      $('.show').css('display','none')
    //$('body,html').animate({scrollTop:0},500);
  //})
  $('.listSmall').click(function(){
    //$('.show').css('display','block')
    //location.hash ='#md_'+ $(this).attr('id');
    //$('body,html').animate({scrollTop:top_h+70},400);
    $('body,html').animate({scrollTop:top_h+40},400);
    $('.show').css('display','none')
    $('#md_'+ $(this).attr('id')).css('display','block')
    //$('#md_supersale').animate({'marginTop':'-1000px'},400);
    //$('#md_tsushima').css('display','block').animate({'marginTop':'248px'},400);
  })
  $('.menu').click(function(){
    $('body,html').animate({scrollTop:top_h+40},400);
    $('.list').css('display','none')
    $('#'+$(this).attr('id')+'page').css('display','block')
  })
  $('.s3').click(function(){
    $('body,html').animate({scrollTop:top_h+40},400);
    $('.list').css('display','none')
    $('#'+$(this).attr('id').substring(1,3)+'page').css('display','block')
  })



  $('.s1,.s3').mouseover(function(){
    $(this).css('border-bottom','2px solid #DF3A01')
  })
  $('.s1,.s3').mouseout(function(){
    $(this).css('border-bottom','0px solid #DF3A01')
    //$(this).text('작업물');
  })
});

$(window).scroll(function(){
  if($(window).scrollTop()>306){
    $('.title2').css({'display':'block','position':'fixed','top':'0px','margin':'0px','border-bottom':'1px solid #000'});
    $('.block').css({'display':'block'})
    //$('.listgroup').css({'display':'block','position':'fixed','top':'0px'});
  }else if($(window).scrollTop()<306){
    $('.title2').css({'position':'relative','margin':'10px 0 10px 0','border-bottom':'0px solid #000'});
    $('.block').css({'display':'none'})
    //$('.listgroup').css({'position':'relative','top':'0px'});
  }
})

function popup(a,b){
  if(a == 'md'){
    window.open('md/'+b+'/'+b+'.html','pop','');
  }else if(a == 'shoppingmall'){
    window.open(b+'.html','pop','');
  }
  //window.open(a+'.html','pop','');
}
