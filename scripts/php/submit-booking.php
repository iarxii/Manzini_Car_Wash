<?php
require("config.php");
require("functions.php");

//Initialize variable
$outcome_title = "Outcome Pending";
$outcome_body = "Outcome Pending";

//DB Connection Test============================================>
if ($dbconn->connect_error) { //die("Fatal Error: Could not connect to database. Please contact the system administrator, call 081 811 8095. Go to <a href='../../index.html'>Home page</a>");
    $outcome_title = "Can't connect to database.";
    $outcome_body = <<<_END
    <h1 class="caeser-dressing-font mt-4 text-danger" style="font-size: 100px;">Error!</h1>
    <h4 class="mb-4 fw-bold">Oh no... An Error has occured whilst processing your request.</h4>
    <p>
        The system is unable to connect to the database. Please contact the system administrator.<br><br>
        Call 081 811 8095 or send an email to <a href="mailto:admin@adaptivconcept.co.za">admin@manzinicarwash.co.za</a>.
    </p>
    _END; 
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputFName = sanitizeMySQL($dbconn, $_POST['inputFName']);
    $inputLName = sanitizeMySQL($dbconn, $_POST['inputLName']);
    $inputContact = sanitizeMySQL($dbconn, $_POST['inputContact']);
    $inputEmail = sanitizeMySQL($dbconn, $_POST['inputEmail']);
    $inputResArea = sanitizeMySQL($dbconn, $_POST['inputArea']);

    $inputValet = sanitizeMySQL($dbconn, $_POST['inputValet']);
    $inputBookingDate = sanitizeMySQL($dbconn, $_POST['inputBookingDate']);
    $inputBookingTime = sanitizeMySQL($dbconn, $_POST['inputBookingTime']);
    $inputMessage = sanitizeMySQL($dbconn, $_POST['inputMessage']);

    $date_now = date("Y-m-d H:i:s");

    try {
        $insertquery = "INSERT INTO `clients`(`client_id`, `first_name`, `last_name`, `email_address`, `contact_number`, `residential_area`) 
        VALUES (null, '$inputFName', '$inputLName', '$inputEmail', '$inputContact', '$inputResArea')";
    
        //die($insertquery . "<br>");
        $result = $dbconn->query($insertquery);
    
        if (!$result) die("Database Access Failed. Please contact the System Administrator. Error[1]: [ " . $dbconn->error . " ]");

        //get the last id
        $lastid = $dbconn->insert_id;

        $result=null;

        $insertquery = "INSERT INTO `client_bookings`
        (`client_booking_id`, `valet_service`, `residential_area`, `message`, `status`, `status_date`, `outcome`, `outcome_date`, `administrators_administrators_id`, `clients_client_id`, `bookings_date`, `booking_time`)  
        VALUES 
        (null,'$inputValet','$inputResArea','$inputMessage','open','$date_now','Appoinment Pending','$date_now', 2, $lastid, '$inputBookingDate', '$inputBookingTime')";
    
        //die($insertquery . "<br>");
        $result = $dbconn->query($insertquery);
    
        if (!$result) die("Database Access Failed. Please contact the System Administrator. Error[2]: [ " . $dbconn->error . " ]");
    
        $result=null;
        $dbconn->close();
    
        $outcome_title = "Booking Successfull";
        $outcome_body = <<<_END
        <h1 class="caeser-dressing-font mt-4" style="font-size: 100px;">Success!</h1>
        <h4 class="mb-4 fw-bold">Your appointment has been reserved.</h4>
        <p>
            Thank you for making a booking with us. 
            We have received your submission and a consultant will contact you momenteraly
            to confirm your appointment.<br><br>
            Thank you for choosing <b class="caeser-dressing-font">Manzini</b> Car Wash.
        </p>
        _END;
      } catch (\Throwable $err) {
        //throw $err;
        //echo "Error( $err )";
        $outcome_title = "An error occurred.";
        $outcome_body = <<<_END
        <h1 class="caeser-dressing-font mt-4" style="font-size: 100px;">Success!</h1>
        <h4 class="mb-4 fw-bold">Your appointment has been reserved.An error has occured whilst attempting to save the Booking.</h4>
        <p>
            The system is experiencing a tecgnical error: [3 - $err ]. Please contact the system administrator.<br><br>
            Call 081 811 8095 or send an email to <a href="mailto:admin@adaptivconcept.co.za">admin@manzinicarwash.co.za</a>.
        </p>
        _END;
      }
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap CSS Only (cdn link) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

    <!-- My stylesheet -->
    <link rel="stylesheet" href="../../css/style.css">

    <!-- Google Material Symbols -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <!-- Google Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <title><?php echo $outcome_title; ?> | Manzini Car Wash (Mofolo Central)</title>

    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Megrim&family=Questrial&family=Caesar+Dressing&display=swap" rel="stylesheet">

    <style>
        /* Material Icon style */
        .material-symbols-outlined {
            font-variation-settings:
                'FILL'0,
                'wght'700,
                'GRAD'0,
                'opsz'48
        }
    </style>
</head>

<body>
    <!-- Main Content -->
    <div class="container text-center h-100 d-flex align-items-center justify-content-center">
        <div class="d-grid gap-2 text-white text-center justify-content-center">
            <div class="text-center" style="width: 100%;">
                <img src="../../media/assets/manzini_logo_ss.png" alt="logo" class="img-fluid rounded shadow">
            </div>

            <?php echo $outcome_body; ?>

            <hr class="text-white">
            <p class="fw-bold">You can return to any of the pages below.</p>
            <ul class="list-group list-group-horizontal justify-content-center flex-grow-1 d-flex p-0">
                <li class="list-group-item flex-fill text-center p-3 bg-transparent border-0"><a class="text-white text-decoration-none fw-bold" href="../../index.html"><span class="material-icons material-icons-round">home</span> Home</a></li>
                <li class="list-group-item flex-fill text-center p-3 bg-transparent border-0"><a class="text-white text-decoration-none fw-bold" href="../../about/"><span class="material-icons material-icons-round">info</span>About</a></li>
                <li class="list-group-item flex-fill text-center p-3 bg-transparent border-0"><a class="text-white text-decoration-none fw-bold" href="../../contact/"><span class="material-icons material-icons-round">contact_support</span>Contact</a></li>
            </ul>
        </div>

    </div>
    <!-- ./ Main Content -->

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>

</html>