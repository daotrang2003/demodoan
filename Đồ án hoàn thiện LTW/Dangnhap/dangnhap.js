
$(document).ready(function(){
});
   $('#eye').click(function(){
    $(this).toggleClass('open');
    $(this).children('i').toggleClass('fa-eye-slash fa-eye');
    if($(this).hasClass('open')){
        $(this).prev().attr('type', 'text');
    } else{
        $(this).prev().attr('type', 'password');
    }});
var toggleIcon = document.getElementById("eye");

    toggleIcon.addEventListener("click", function() {
      if (toggleIcon.classList.contains("fa-eye-slash")) {
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
      } else {
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
      }
    });