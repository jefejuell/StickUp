<!-- From https://html.form.guide/email-form/php-form-to-email/ -->
<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $comment = $_POST['comment'];

    $email_from = 'Email from: ' $visitor_email;

    $email_subject = "New Form submission";

    $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $comment".
    
    $to = "jefejuell@yahoo.com";

    $headers = "From: $email_from \r\n";
                          
    $headers .= "Reply-To: $visitor_email \r\n";
                          
    mail($to,$email_subject,$email_body,$headers);
?>