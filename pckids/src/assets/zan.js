/**
 * Created by Administrator on 2017/9/13.
 */
// 点赞=====================================================
$(function(){
  $("#praise").click(function(){
    var praise_img = $("#praise-img");
    var text_box = $("#add-num");
    var praise_txt = $("#praise-txt");
    var num=parseInt(praise_txt.text());
    if(praise_img.attr("src") == ("./assets/images/yizan.png")){
      $(this).html("<img src='./assets/images/zan.png' id='praise-img' class='animation'/>");
      praise_txt.removeClass("hover");
      text_box.show().html("<em class='add-animation'>-1</em>");
      $(".add-animation").removeClass("hover");
      num -=1;
      praise_txt.text(num)
    }else{
      $(this).html("<img src='./assets/images/yizan.png' id='praise-img' class='animation'/>");
      praise_txt.addClass("hover");
      text_box.show().html("<em class='add-animation'>+1</em>");
      $(".add-animation").addClass("hover");
      num +=1;
      praise_txt.text(num)
    }
  });
})
