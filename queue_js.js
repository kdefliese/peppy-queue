var $email1 = $('#email1');
var $email2 = $('#email2');
var $email3 = $('#email3');
var $email4 = $('#email4');
var $email5 = $('#email5');
var emailQueue = [];

$(document).ready(function() {
  emailQueue.push($email1);
  emailQueue.push($email2);
  emailQueue.push($email3);
  emailQueue.push($email4);
  emailQueue.push($email5);
  console.log(emailQueue);
});

var $response = $('#response');
console.log($response);
 $('#button').on('click',function() {
    if (emailQueue[0] != null) {
      emailQueue.splice(0,1);
      console.log(emailQueue);
      $response.removeClass('hidden').addClass('.visible');
    }
    else {
     alert('All finished!');
    }
  });

