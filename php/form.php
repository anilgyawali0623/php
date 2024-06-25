
<?php

    // Set connection variables
    $server = "localhost";
    $username = "root";
    $password = "";
    $db = "form";

    // Create connection to database
    $connect = new mysqli($server,$username,$password,$db);
    
    // Check connection
    if($connect->connect_error){
        echo "connection error !!";
    }
    
    // Collecting data from Form
    $name = $_POST['firstField'];
    $phone = $_POST['secondField'];
    $email = $_POST['thirdField'];
    $gender = $_POST['Gender'];
    $address = $_POST['fifthField'];
    $hobbie = $_POST['hobs'];
    $hobbies = implode(',',$hobbie);    // for multiple inputs
    $skills = $_POST['skll'];
    $skillss = implode(',',$skills);    // for multiple inputs
    $country = $_POST['contree'];

    // SQL Query to insert into table kecforms
    $sql="INSERT INTO kecforms (Name, Phone, Email, Gender, Address, Hobbies, Skills, Country) VALUES ('$name','$phone','$email','$gender','$address','$hobbies','$skillss','$country')";

    // If the connection is successful run the query
    if($connect->query($sql)){
        echo "The Data has been inserted";
    }
    
?>
