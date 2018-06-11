$(function() {
  $(".clickwn").click(function () {
    $(".flick-menu-mask").show();
    $(".spec-menu").show();
  })

  $(".tclck").click(function () {
    $(".flick-menu-mask").hide();
    $(".spec-menu").hide();
  })
  $('#cool').bind('input propertychange', function() {
    /* alert(this.value);*/
    $('.amount').html(this.value)

  }).bind('input input', function() {

  });
  $('#color a').click(function() {
    var cook = $(this).index();
    $('#color a').eq(cook).addClass('selected').siblings().removeClass('selected');
  })
  $('#evalution a').click(function() {
    var cook = $(this).index();
    $('#evalution a').eq(cook).addClass('selected').siblings().removeClass('selected');
  })
  //加减面板
  $(function() {
    //加号
    $(".jia").click(function() {

      var $parent = $(this).parent(".num");
      var $num = window.Number($(".inputBorder", $parent).val());
      $(".inputBorder", $parent).val($num + 1);

      $('.amount').html($num + 1)

    });

    //减号
    $(".jian").click(function() {
      var $parent = $(this).parent(".num");
      var $num = window.Number($(".inputBorder", $parent).val());
      if($num > 2) {
        $(".inputBorder", $parent).val($num - 1);
        $('.amount').html($num - 1)

      } else {
        $(".inputBorder", $parent).val(1);
        $('.amount').html($num)

      }
    });
  })

})
