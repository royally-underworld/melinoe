<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: The Website';
    $to = 'underworldfetnites@gmail.com';
    $subject ='A New Message from the Website';
    
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']){
        if(mail ($to, $subject, $body, $from)){
            echo '<p>Your message has been sent!</p>';
        } else {
                echo '<p>Something went wrong, please go back and try again!</p>';
            }
        }
?>