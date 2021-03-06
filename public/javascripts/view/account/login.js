$(document).ready(function () {
  var lan = localStorage.getItem('siteLanguage');
  if(lan){
    $('#languanes').val(lan);
  }
  // lan ="cn"
  $('#languanes').change(function(){
    // console.log($(this).val())
     lan = $(this).val()
     localStorage.setItem('siteLanguage',lan); //
     initPage();
    if(lan === 'cn'){
      //$(this).val("cn")
      // $('.header .switch-language span.language').text('中文');
      $('.lan-en').addClass('hidden');
      $('.lan-cn').removeClass('hidden');
    }else{
      //$(this).val()=="en"
      // $('.header .switch-language span.language').text('English');
      $('.lan-cn').addClass('hidden');
      $('.lan-en').removeClass('hidden');
    }
  })
  var msg = '';
  function initPage() {
    if(lan === 'cn'){
      $('#user-name').attr('placeholder', '用户名/手机号/邮箱');
      $('#password').attr('placeholder', '密码');
    }else{
      $('#user-name').attr('placeholder', 'Email/Account');
      $('#password').attr('placeholder', 'Password');
    }
  }

  function loginProcess() {
    if(!checkData()){
      return false;
    }
    login();
  }

  function checkData() {
    var userName = $.trim($('#user-name').val());
    var password = $.trim($('#password').val());
    if(userName.length === 0){
      msg = lan === 'cn' ? '请输入登陆账号。' : 'Please enter account.';
      layer.msg(msg);
      $('#user-name').focus();
      return false;
    }
    if(password.length === 0){
      msg = lan === 'cn' ? '请输入密码。' : 'Please enter password.';
      layer.msg(msg);
      $('#password').focus();
      return false;
    }
    return true;
  }

  function login() {
    var userName = $.trim($('#user-name').val());
    var password = $.trim($('#password').val());
    var target = $('#hidden-target').val();
    $.ajax({
      url: '/login/userInfo?userName=' + userName + '&password=' + password,
      type: 'get',
      success: function (res) {
        if(res.error){
          msg = lan === 'cn' ? '服务器异常，暂时无法登陆，请稍后再试。' : 'Service error, please try again later.';
          layer.msg(msg);
          return false;
        }
        if(res.data === null || res.data.length === 0){
          msg = lan === 'cn' ? '用户名或者密码不存在。' : 'Account or password invalid.';
          layer.msg(msg);
          $('#user-name').focus();
          return false;
        }
        if(res.data.frozen){
          msg = lan === 'cn' ? '您的账户已冻结，请联系客服。' : 'Your account has been frozen.';
          layer.msg(msg);
          return false;
        }
        var loginCustomer = JSON.stringify(res.data);
        setCookie('loginCustomer', loginCustomer);
        setCookie('loginCustomerID', res.data.customerID);
        location.href = target;
      },
      error: function(XMLHttpRequest, textStatus){
        layer.msg('无法连接网络，请检查网络设置。');
      }
    });
  }

  $(document).keydown(function (e) {
    if(e.keyCode === 13){
      loginProcess()
    }
  });

  $('.btn-login').click(function () {
    loginProcess();
  });

  initPage();
});