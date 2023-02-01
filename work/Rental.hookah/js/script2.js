$(document).ready(function(){$("#contactForm2").submit(function(){var th=$(this);
    $.ajax({type:"POST",url:"https://кальян-на-дом.com.ua/js/mail.php",data:th.serialize()}).done(function(){$('#order').modal('hide');
alert("С Вами свяжуться в самое ближайшее время. Хорошего дня!");
setTimeout(function(){th.trigger("reset");},1000);});return false;});
$('.portfolio-modal').on('show.bs.modal',function(e){$('.navbar').addClass('d-none');});});