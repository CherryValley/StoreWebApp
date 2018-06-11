$(function(){



  function loginProcess() {
    if(!checkData()){
      return false;
    }
    login();
  }
  $(document).keydown(function (e) {
    if(e.keyCode === 13){
      loginProcess()
    }
  })

  $('.btn-login').click(function () {
    loginProcess();
  });




})





