var $email1 = $('#email1');
var $email2 = $('#email2');
var $email3 = $('#email3');
var $email4 = $('#email4');
var $email5 = $('#email5');
var emailQueue = [];

$(document).ready(function() {
  emailQueue.push($email1);
  $email1.delay(500).queue(function(){
      $(this).removeClass('hidden').addClass('email').dequeue();
      });
  emailQueue.push($email2);
  $email2.delay(1000).queue(function(){
      $(this).removeClass('hidden').addClass('email').dequeue();
      });
  emailQueue.push($email3);
  $email3.delay(1500).queue(function(){
      $(this).removeClass('hidden').addClass('email').dequeue();
      });
  emailQueue.push($email4);
  $email4.delay(2000).queue(function(){
      $(this).removeClass('hidden').addClass('email').dequeue();
      });
  emailQueue.push($email5);
 $email5.delay(2500).queue(function(){
      $(this).removeClass('hidden').addClass('email').dequeue();
      });
  console.log(emailQueue);
});


var $response = $('#response');
var $responsecontent = $('#responsecontent');
console.log($response);
 $('#button').on('click',function() {
    if (emailQueue[0] != null) {
      $response.addClass("visible").delay(800).queue(function(){
      $(this).removeClass("visible").dequeue();
      });
      $responsecontent.addClass("visible").delay(800).queue(function(){
      $(this).removeClass("visible").dequeue();
      });
      var firstEmail = emailQueue[0];
      firstEmail.addClass('hidden');
      emailQueue.splice(0,1);
      console.log(emailQueue);
    }
    else {
     alert('All finished! Do you think penguins drink beer?');
    }
  });

