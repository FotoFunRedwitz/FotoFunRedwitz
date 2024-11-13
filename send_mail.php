<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = htmlspecialchars($_POST['first-name']);
    $lastname = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $street = htmlspecialchars($_POST['street']);
    $housenumber = htmlspecialchars($_POST['house-number']);
    $zip = htmlspecialchars($_POST['zip']);
    $city = htmlspecialchars($_POST['city']);
    $eventstreet = htmlspecialchars($_POST['event-street']);
    $eventhousenumber = htmlspecialchars($_POST['event-house-number']);
    $eventzip = htmlspecialchars($_POST['event-zip']);
    $eventcity = htmlspecialchars($_POST['event-city']);
    $message = htmlspecialchars($_POST['message']);


    $to = "fotofunredwitz@gmail.com";  // Deine E-Mail-Adresse
    $subject = "Neue Anfrage via Kontaktformular";
    $body = "Name: $firstname\nE-Mail: $lastname\nNachricht:\n$email\nNachricht:\n$phone\nNachricht:\n$street\nNachricht:\n$housenumber\nNachricht:\n$zip\nNachricht:\n$city\nNachricht:\n$eventstreet\nNachricht:\n$message\nNachricht:\n$eventhousenumber\nNachricht:\n$eventzip\nNachricht:\n$eventcity\nNachricht:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht gesendet!";
    } else {
        echo "Fehler beim Senden. Bitte versuche es erneut oder kontaktiere uns direkt.";
    }
}
?>
