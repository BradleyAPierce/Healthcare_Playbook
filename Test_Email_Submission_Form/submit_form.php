
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "bpierce@kmbs.konicaminolta.us, bradleyapierce@me.com, bradleyapierce@me.com";
    $subject = "Dealer Channel Playbook - Learning and Development Form Submission";
    $body = "Name of Requestor: " . $_POST["name"] . "\n"
          . "Audience: " . $_POST["audience"] . "\n"
          . "Outcomes: " . $_POST["outcomes"] . "\n"
          . "Number of Learners: " . $_POST["learners"] . "\n"
          . "Time Frame: " . $_POST["timeframe"] . "\n"
          . "Challenges: " . $_POST["challenges"] . "\n"
          . "Follow-Up: " . $_POST["followup"];

    $headers = "From: bradleyapierce@me.com\n";

    mail($to, $subject, $body, $headers);
    echo "Form submitted successfully.";
}
?>
